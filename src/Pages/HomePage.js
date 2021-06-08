import React, {Component} from "react";
import switchImage from "../Resources/Misc/homeSwitchImage.png";


const HomePage = (props) => {

    return (
        <div>
            
             <div id = "showcase">
                <h1>Nintendo Switch</h1>
                <h2>Play anywhere, anytime, with anyone.</h2>
                    <div id="showNowBtn">
                        <a id ="shopNowLink" href="/ProductsPage">SHOP NOW</a>
                    </div>
             </div>
              <div id = "showcaseImage">
                <img src = {switchImage}></img>
              </div>
              
        </div>
    );


};



export default HomePage;