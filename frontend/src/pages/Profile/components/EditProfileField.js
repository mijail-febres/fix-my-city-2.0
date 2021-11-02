import React, {useEffect} from 'react';
import { EditProfileFieldContainer } from '../ProfileStyled';
import Navigation from '../../../components/Navigation/Navigation';
import { useDispatch } from "react-redux";
import { useState } from "react";
import {patchProfileInfo} from "../../../Axios/fetches"
import {fetchLatestProfileInfoAndUpdateRedux} from "../../../middleware/fetchUpdateRedux"
import { SaveButton} from "../ProfileStyled";

const EditProfileField = (props) => {

    const dispatch = useDispatch();
    
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


    return (
        <>               
                <EditProfileFieldContainer> 
                    <Navigation showBackButton = {true} page={"editProfileField"} setShowEditProfileField={props.setShowEditProfileField}/>
                    <div id="main">                         
                        <h1>{props.currentEditFieldName}</h1>
                        <input type="text" id="fieldSection" value={fieldValue} onChange={fieldOnChangeHandler}></input>                   
                        <SaveButton type={"submit"} onClick={saveOnClickHandler}>Save</SaveButton>                          
                    </div>                   
                </EditProfileFieldContainer>
    
        </>
    )
}

export default EditProfileField