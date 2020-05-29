import React from "react";
import "../styles/App.css";
import fblogo from "../images/fblogo.svg";
import hfplogo from "../images/doglogo.png";
import hfpdog1 from "../images/hfpdog1.png";
import hfpdog2 from "../images/hfpdog2.png";
import hfpdog3 from "../images/hfpdog3.png";
import petfinderlogo from "../images/petfinderLogoBlack.png";

function Home() {
    return (
        <div className="Home">
            <div className="Header">
                <div className="SocialLinks">
                    <a
                        className="FacebookLink"
                        href="https://www.facebook.com/heaven4pawz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={fblogo} className="SocialLogo" alt="logo" />
                    </a>
                    <a
                        className="PetfinderLink"
                        href="https://www.petfinder.com/member/us/wa/kirkland/heaven-4-paws-wa554/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={petfinderlogo} className="SocialLogo" alt="logo" />
                    </a>
                </div>
                {/* <ul className="Menu">
                    <li className="MenuItem">About Us</li>
                    <li className="MenuItem">Adopt</li>
                    <img src={hfplogo} className="MenuItem hfpLogo" alt="logo" />
                    <li className="MenuItem">Donate</li>
                    <li className="MenuItem">Contact Us</li>
                </ul> */}
                <div className="menu-container">
                    <div className="menu-item">About Us</div>
                    <div className="menu-item">Adopt</div>
                    <div className="menu-item"> 
                        <img src={hfplogo} className="menu-logo" alt="logo" />
                    </div>
                    <div className="menu-item">Donate</div>
                    <div className="menu-item">Contact Us</div>
                </div>
                <div classname="rowofdogs">
                    <div className="hfpdogs"> 
                        <img src={hfpdog1} alt="Dog" />
                    </div>
                    <div className="hfpdogs">
                        <img src={hfpdog2} alt="Dog" />
                    </div>
                    <div className="hfpdogs">
                        <img src={hfpdog3} alt="Dog" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;