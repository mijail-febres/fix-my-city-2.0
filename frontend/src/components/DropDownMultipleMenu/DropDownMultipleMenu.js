import React, { useState, useEffect, useRef } from "react";
import { useDispatch} from "react-redux";
import DropDownMenuContainer from "./DropDownMultipleMenuStyled";
import { parsePropertyToHuman } from "../TextOperations/TextOperations";
import {defaultTheme} from "../../globalstyles/Styles.js";
import svgArrowUp from "../../assets/svgs/arrow-up.svg"
import svgArrowDown from "../../assets/svgs/arrow-down.svg"

const DropDownMultipleMenu = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [selections, setSelections] = useState(null)
    const [checkedItems, setCheckedItems] = useState(null);
    const [title, setTitle] = useState(null);
    const dispatch = useDispatch();

    const toggleExpanded = () => {
        setExpanded(!expanded)
    };

    useEffect(() =>{ // Initialize checked items
        setCheckedItems(new Array(props.items.length).fill(false))
    },[])

    useEffect(() => { // Update selections
        setSelections(props.selections)
        // Change checked items
        let newChecked;
        if (checkedItems) { // will put default items checked (this depends on users or issues)
            newChecked = new Array(props.items.length).fill(false);
            props.selections.forEach(element => {
                let index = props.items.indexOf(element);
                if ( index > -1) {
                    if (!newChecked[index]) {
                        newChecked[index] = true;
                    }
                }
            });        
            setCheckedItems([...newChecked])
        }
    },[props.selections || props.subject])
    
    const handleClick = (event,ind) => {
        let newSelections = [...selections]
        if (checkedItems[ind] === true) { // It was already on the list
            newSelections.splice(newSelections.indexOf(props.items[ind]), 1)
        } else {// It needs to be added
            newSelections.push(props.items[ind])
        }
        dispatch({ // sending the new selections
            type: 'setItems',
            payload: newSelections
        })
        // Modifying the checked status
        let newChecked = [...checkedItems];
        newChecked[ind] = !newChecked[ind];
        setCheckedItems([...newChecked]);
    }

    return (
        // props.subject?
        <DropDownMenuContainer>
            <div id='labelMenu' onClick={toggleExpanded}>
                <span id='title'>--Select Fields--</span>
                <img id='arrow' src={expanded?svgArrowUp:svgArrowDown} alt="my image"/>
            </div>
            {(expanded && props.subject)?
                <div className="DivOptions">
                    {props.items.map((item,ind) => {
                        return (
                            <div 
                                className= "menuItems" 
                                key={ind} 
                                onClick={(e) => handleClick(e,ind)}
                                style={{backgroundColor: checkedItems[ind]?defaultTheme.greenColorTransparent:defaultTheme.greyColorTransparent}}
                                checked={checkedItems[ind]}
                            >
                                <span className="itemTag" style={{color: checkedItems[ind]?defaultTheme.greyColor:'black'}}>{parsePropertyToHuman(item)}</span>
                            </div>
                        )
                    })}
                </div>
            :
            null
            }
        </DropDownMenuContainer>
    );
};

export default DropDownMultipleMenu; 
