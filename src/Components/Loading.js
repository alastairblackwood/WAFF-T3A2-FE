import React from 'react'
import MDSpinner from "react-md-spinner";

const Loading = ({size = 100}) => {

    return (
        <div 
        style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%", 
        }}
        >
    <MDSpinner />

        </div>
    )
}

export default Loading
