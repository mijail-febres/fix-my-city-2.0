import React, { useState, useEffect, useRef } from "react";
import { useDispatch} from "react-redux";
import DropDownMenuContainer from "./DropDownMenuStyled";
import { parsePropertyToHuman } from "../TextOperations/TextOperations";


const DropDownMenu = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [selections, setSelections] = useState(null)
    const [checkedItems, setCheckedItems] = useState(null);
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
        props.subject?
        <DropDownMenuContainer>
            <div id='labelMenu' onClick={toggleExpanded}>
                <div
                    className={`font-semibold cursor-pointer ${
                        expanded ? "up-arrow" : "down-arrow"
                    }`}
                >
                    --Select Items--
                    {/* {props.subject} */}
                </div>
            </div>
            {expanded && (
                <div className="DivOptions">
                    {props.items.map((item,ind) => {
                        return (
                            <div className= "block" key={ind} onClick={(e) => handleClick(e,ind)}>
                                <input
                                    type="checkbox"
                                    name={item}
                                    value={item}
                                    checked={checkedItems?checkedItems[ind]:false}
                                    onChange={(e) => e.stopPropagation()}
                                    className="MenuItems"
                                />
                                <label htmlFor={item}>{parsePropertyToHuman(item)}</label>
                            </div>
                        )
                    })}
                </div>
            )}
        </DropDownMenuContainer>
        :
        null
    );
};

export default DropDownMenu; 
