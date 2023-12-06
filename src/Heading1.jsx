import React from "react";
import "./index.css";

function Heading1(){
    const heading = {
        fontFamily: ' "Josefin Sans", sans-serif ',
        textAlign: "center",
        textTransform: "capitalize",
        textShadow: "0px 1px 1px black",
        fontWeight: "bold",
        color: "orangered",
        fontStyle: "italic",
      };
    
    return(
        <>
            <div>
        <h2 style={heading}>Welcome to React JS !!!</h2>
      </div>
        </>
    );
}

export default Heading1;