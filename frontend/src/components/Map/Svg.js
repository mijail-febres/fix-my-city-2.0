import React from "react";
import {markerSvg} from "./MapStyled";
const svgPlant = () => {
    return(
        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
        //     <g fill="#61DAFB">
        //         <path d="M666.3 ... 50.6zM320.8 78.4z"/>
        //         <circle cx="420.9" cy="296.5" r="45.7"/>
        //         <path d="M520.5 78.1z"/>
        //     </g>
        // </svg>  
        <markerSvg xmlns="http://www.w3.org/2000/svg"
            fill={'gold'} 
            style={{ width: "100%", height: "100%" }}
            viewBox={`0 0 100% 100%`} stroke="currentColor"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                // d="M10 10"
                d="M 0 0 H 90 V 90 H 10 L 10 10"
            />
            <circle cx="18" cy="18" r="18" fill="red"/>
        </markerSvg>
    )
}

export default svgPlant;