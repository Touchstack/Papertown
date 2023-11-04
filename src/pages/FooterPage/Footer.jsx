import React from "react";
import Logo from "../../assets/Images/Logo.png";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import "../../Style/Footer.css";
import { CiFacebook } from "react-icons/ci";
import { BiLogoTwitter } from "react-icons/bi";
import Slidershow from "../Slidershow/Slidershow";
import { sliderData } from "../../../Component/sliderData";

function Footer() {
  return (
    <div className="main">
      <Slidershow slides={sliderData} />

      <footer className="footer">
        <a href="#">
          <img className="footer__logo" src={Logo} />
        </a>
        <p className="footer__quick">Quick Links</p>

        <div className="footer__copyrightMain">
          <span className="footer__copyright1">Copyright Papertown 2022</span>
          <span className="footer__copyright">Terms of use</span>
          <span className="footer__copyright">Privacy Policy</span>
        </div>
        <div className="footer__existMain">
          <div className="footer__exist">
            <span className="footer__exist_h1">Why We Exist</span>
          </div>
          <span className="footer__exist_h1">FAQs</span>
          <span className="footer__exist_h1">Contact Us</span>
        </div>
        <div className="footer__email">
          <input
            type="text"
            className="footer__emailInput"
            size="28"
            placeholder="Email Address"
          />
        </div>
        <div className="footer__weekly">
          Receive weekly writing prompts <br />
          when you subscribe to our <br /> newsletter
        </div>
        <div className="footer__subMain">
          <button className="footer__subBtn">Subscribe</button>
        </div>
        <div className="footer__socialMain">
          <span className="footer__socialFollow">
            Follow us on social media
          </span>
          <div className="footer__socialIconsMain">
            <div className="footer__iconsMain">
              <FaWhatsapp className="footer__icons" />
            </div>
            <div className="footer__iconsMain">
              <div className="footer__i">
                <CiFacebook className="footer__icons" />
              </div>
            </div>
            <div className="footer__iconsMain">
              <AiOutlineInstagram className="footer__icons" />
            </div>
            <div className="footer__iconsMain">
              <BiLogoTwitter className="footer__icons" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
