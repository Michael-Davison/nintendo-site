import React, {Component} from "react";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import switchImage from "../Resources/Misc/homeSwitchImage.png";


const HomePage = (props) => {

    return (
        <div>
             <Logo/>
             <NavBar/>
             <div id = "showcase">
                <h1>Nintendo Switch</h1>
                <h2>Play anywhere, anytime, with anyone.</h2>
                    <div id="showNowBtn">
                        <button id ="">SHOP NOW</button>
                    </div>
             </div>
              <div id = "showcaseImage">
                <img src = {switchImage}></img>
              </div>
              
        </div>
    );


};



export default HomePage;