import React from "react";
import instagram from "../../Img/instagram.png"

import twitter from "../../Img/twitter.jpg";

import whatsapp from "../../Img/whatsapp.jpg"

import facebook from "../../Img/facebook2.png.jpg"

function RedesSociais() {
  return (
    <ul className="social-media">
      <a target="_blank" href="https://www.instagram.com/">
        <img src= {instagram} alt="instagram" height="85px" />
      </a>
        
      <a target="_blank" href="https://twitter.com/">
        <img src={twitter} alt="instagram" height="85px" />
      </a>
      
      <a target="_blank" href="https://www.whatsapp.com/">
        <img src= {whatsapp} alt="whatsapp" height="85px" />
      </a>
      
       
      <a target="_blank" href="https://www.facebook.com/">
        <img src= {facebook} alt="facebook" height="85px" />
      </a>
    </ul>
  );
}

export default RedesSociais;
