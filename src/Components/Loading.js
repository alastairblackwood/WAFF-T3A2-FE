import React from 'react'
import MDSpinner from "react-md-spinner";

const Loading = ({size = 100}) => {

    return (
        <>
       
        <div 
        
        style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%", 
        }}
        >
    <MDSpinner size={50} borderSize={15} color1="#FFD80B" color2='#517AB9' color3='#FFABE7' color4='white'/>

        </div>
         </>
    )
}

export default Loading
