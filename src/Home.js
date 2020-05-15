import React from "react";
import "./App.css";
import fblogo from "./fblogo.svg";
import petfinderlogo from "./petfinderLogoBlack.png";

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
                <ul className="Menu">
                    <li className="MenuItem">About Us</li>
                    <li className="MenuItem">Adopt</li>
                    <li className="MenuItem">Donate</li>
                    <li className="MenuItem">Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;