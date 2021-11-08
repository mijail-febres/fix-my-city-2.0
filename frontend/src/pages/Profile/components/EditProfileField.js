import React, {useEffect} from 'react';
import { EditProfileFieldContainer, EditAddressFieldContainer } from '../ProfileStyled';
import Navigation from '../../../components/Navigation/Navigation';
import { useDispatch } from "react-redux";
import { useState } from "react";
import {patchProfileInfo} from "../../../Axios/fetches"
import {fetchLatestProfileInfoAndUpdateRedux} from "../../../middleware/fetchUpdateRedux"
import { SaveButton} from "../ProfileStyled";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// import "./Geocoder2.css";

const EditProfileField = (props) => {

    const dispatch = useDispatch();
    const [latLong, setLatLong] = useState(null)
    const [homeAddress, setHomeAddress] = useState(null)

    // Token for Mapbox (to be able to use Mapbox)
    const MAPBOX_TOKEN =
        "pk.eyJ1IjoiZml4bXljaXR5MiIsImEiOiJja3Y2ZnU0cWUxdTdpMm5vdjkya2Q0c3N0In0.f7LrfMfap262-GOR6MsHFg";

    const geocoder = new MapboxGeocoder({ // search bar
        accessToken: MAPBOX_TOKEN,
        types: 'address, country,region,place,postcode,locality,neighborhood',
        countries: 'ch'
    }); 

    useEffect(() => {
        geocoder.addTo('#geocodermain');
        geocoder.on('result', (e) => {
            setLatLong(e.result.center)
            setHomeAddress(JSON.stringify(e.result.place_name, null, 2))
        });
    });

    useEffect(() => {          
            
    }, []);   
    
    const [fieldValue,setFieldValue] = useState(props.currentEditFieldValue);

    const fieldOnChangeHandler = e => {
        setFieldValue(e.target.value);
    }

    const saveOnClickHandler = () => {
        let formdata = new FormData();
        formdata.append(props.currentEditFieldAPIName, fieldValue);
        const patchAndFetch = async () => {
            const resp = await patchProfileInfo(formdata);
            console.log(resp);
            fetchLatestProfileInfoAndUpdateRedux(dispatch);
        }
        patchAndFetch();          
        props.setShouldIRender(true);
        props.setShowEditProfileField(false);
    }

    const saveOnClickHandlerAddress = async() => {
        const url = 'https://fix-my-city.app.propulsion-learn.ch/backend/api/me/';

        const method = 'PATCH'; // method
        const headers = {
            "Content-type": "application/json",                                       
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }

        let noQuotesAddress = homeAddress.replaceAll('"', '')
        const body = {
            // body
            home_address: noQuotesAddress,
            home_latitude: latLong[0],
            home_longitude: latLong[1]
        };
        console.log(body)
        const config = {
            // configuration
            method: method,
            headers: headers,
            body: JSON.stringify(body),
        };

        const response = await fetch(url, config); //fething
        const data = await response.json(); // getting the user

    }

    return (
        <>               
            {props.currentEditFieldAPIName === 'home_address'?
                <EditAddressFieldContainer> 
                    <Navigation showBackButton = {true} page={"editProfileField"} setShowEditProfileField={props.setShowEditProfileField}/>
                    <div id="geocodermain">                         
                        <h1>{props.currentEditFieldName}</h1>
                        
                        {/* <input type="text" id="fieldSection" value={fieldValue} onChange={fieldOnChangeHandler}></input>                    */}
                        <SaveButton type={"submit"} onClick={saveOnClickHandlerAddress}>Save</SaveButton>                          
                    </div>
                </EditAddressFieldContainer>
            :
                <EditProfileFieldContainer> 
                    <Navigation showBackButton = {true} page={"editProfileField"} setShowEditProfileField={props.setShowEditProfileField}/>
                    <div id="main">                         
                        <h1>{props.currentEditFieldName}</h1>
                        <input type="text" id="fieldSection" value={fieldValue} onChange={fieldOnChangeHandler}></input>                   
                        <SaveButton type={"submit"} onClick={saveOnClickHandler}>Save</SaveButton>                          
                    </div>
                </EditProfileFieldContainer>
            }
        </>
    )
    
                 
}

export default EditProfileField