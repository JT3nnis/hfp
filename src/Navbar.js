import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import PetFinderLogo from "./images/petfinderLogoBlack.png";
import "./main.css";

function Navbar() {
  return (
    <div className="SocialLinks">
      <a
        href="https://www.facebook.com/heaven4pawz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-facebook FASocialIcon"></i>
      </a>
      <a
        className="SocialLink"
        href="https://www.petfinder.com/member/us/wa/kirkland/heaven-4-paws-wa554/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="CustomSocialIcon vertical-center" src={PetFinderLogo} alt="petfinder" />
      </a>
      <div>
        <ul className="navMenu center">
          <li className="navItem">About Us</li>
          <li className="navItem">Adopt</li>
          <li className="navItem">Donate</li>
          <li className="navItem">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
