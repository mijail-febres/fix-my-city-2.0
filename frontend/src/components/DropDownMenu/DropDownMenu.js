import React, { useState, useEffect, useRef } from "react";
import { useDispatch} from "react-redux";
import DropDownMenuContainer from "./DropDownMenuStyled";
import { parsePropertyToHuman } from "../TextOperations/TextOperations";
import {defaultTheme} from "../../globalstyles/Styles.js";
import svgArrowUp from "../../assets/svgs/arrow-up.svg"
import svgArrowDown from "../../assets/svgs/arrow-down.svg"

const DropDownMenu = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [title, setTitle] = useState(null);

    const handleClick = (e,ind) => {
        setExpanded(!expanded);
        props.changeSubject(e.target.attributes[1].value);
        setTitle(e.target.attributes[1].value)
    }

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        props.items?
        <DropDownMenuContainer>
            <div id='labelMenu' onClick={toggleExpanded}>
                <span id='title'>{title?parsePropertyToHuman(title):`--Select ${parsePropertyToHuman(props.title)}--`}</span>
                <img id='arrow' src={expanded?svgArrowUp:svgArrowDown} alt="my image"/>
            </div>
            {expanded && (
                <div className="DivOptions">
                    {props.items.map((item,ind) => {
                        return (
                            <div 
                                className= "menuItems" 
                                key={ind} 
                            >
                                <span
                                    className='itemTag'
                                    onClick={(e) => handleClick(e,ind)}
                                    item={item}
                                >
                                 {parsePropertyToHuman(item)}
                                 </span>
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
