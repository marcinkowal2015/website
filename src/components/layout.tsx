import React from "react";
import logo from "../images/avatar.png";

export function Layout(props) {
    return (
    <>  
        <div>
            <img src={logo}></img>
            <div>
                Marcin Kowal
                Front End Developer
            </div>
            
        </div>
        
        {props.children}
    </>);
}