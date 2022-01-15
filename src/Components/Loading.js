import React from 'react'
import MDSpinner from "react-md-spinner";
import { ssrBehavior } from "react-md-spinner";

const Loading = ({size = 100}) => {

    return (
        <>
        <head>{ssrBehavior.getStylesheetComponent()}</head>
       
        <div 
        
        style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%", 
        }}
        >
    <MDSpinner size={50} borderSize={15} color1="#FFD80B"/>

        </div>
         </>
    )
}

export default Loading
