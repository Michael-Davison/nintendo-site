import React, {Component} from "react";
import nintendoLogo from "../Resources/Logos/logo.png";
import {Link } from "react-router-dom";


const Logo = (props) => {

    return (
        <Link to ="/" ><img id = "logo" src = {nintendoLogo}></img></Link>
    );


};



export default Logo;