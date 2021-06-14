import React, { Component } from "react";
import switchImage from "../Resources/Misc/homeSwitchImage.png";
import {Link } from "react-router-dom";

const HomePage = (props) => {

    return (
        <div id = "homePageContainer">

            <div id="showcase">
                <h1>Nintendo Switch</h1>
                <h2>Play anywhere, anytime, with anyone.</h2>
                <div id="showNowBtn">
                <Link id="shopNowLink"to ="/ProductsPage">SHOP NOW</Link>
                </div>
            </div>
            <div id = "showCaseImgContainer" >
                <img  src={switchImage}></img>
            </div>
        </div>

    );


};



export default HomePage;