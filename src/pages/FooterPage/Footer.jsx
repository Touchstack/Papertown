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

      <footer className="footer  lg:w-[100%] lg:h-[100%] lg:top-[399px] relative  sm:w-[88%] sm:h-[88%] sm:top-[28px] sm:relative">
        <a href="#">
          <img
            className="footer__logo lg:left-[80px] lg:top-[39px] absolute sm:left-[60px] sm:top-[399px] "
            src={Logo}
          />
        </a>
        <p className="footer__quick  absolute left-[80px] top-[169px]  text-[#d0d0d0] text-[14px] font-[400]">
          Quick Links
        </p>

        <div className="footer__copyrightMain absolute left-[80px] top-[320px] flex justify-start gap-[20px] inline-flex">
          <span className="footer__copyright text-[#d0d0d0] text-[14px] font-[400]">
            Copyright Papertown 2022
          </span>
          <span className="footer__copyright text-[#d0d0d0] text-[14px] font-[400]">
            Terms of use
          </span>
          <span className="footer__copyright text-[#d0d0d0] text-[14px] font-[400]">
            Privacy Policy
          </span>
        </div>
        <div className="footer__existMain absolute left-[80px] top-[201px] flex justify-start gap-[20px] inline-flex ">
          <div className="footer__exist flex justify-start gap-[20px]">
            <span className="footer__exist_h1 text-[#d0d0d0] text-[18px] font-[400]">
              Why We Exist
            </span>
          </div>
          <span className="footer__exist_h1 text-[#d0d0d0] text-[18px] font-[400]">
            FAQs
          </span>
          <span className="footer__exist_h1 text-[#d0d0d0] text-[18px] font-[400]">
            Contact Us
          </span>
        </div>
        <div className="footer__email w-[300px] h-[50px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] left-[900px] top-[154px] absolute rounded-[30px] flex justify-start items-center gap-[10px] inline-flex  outline-none  border-solde border-[1px] border-[#e9d8d8]">
          <input
            type="text"
            className="footer__emailInput outline-none text-[#707070] text-[16px] font-[400]"
            size="28"
            placeholder="Email Address"
          />
        </div>
        <div className="footer__weekly font-[400] w-[300px] absolute left-[900px] top-[66px] text-[18px] text-[#707070]">
          Receive weekly writing prompts <br />
          when you subscribe to our <br /> newsletter
        </div>
        <div className="footer__subMain w-[300px] h-[50px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] left-[900px] top-[223px] absolute bg-[#52b4ae] rounded-[30px] justify-center items-center gap-[10px] inline-flex hover:bg-[#0e8f86]">
          <button className="footer__subBtn text-[16px] font-[800] text-[#fffe]">
            Subscribe
          </button>
        </div>
        <div className="footer__socialMain left-[80px] top-[240px] absolute flex justify-start gap-[13px] inlin-flex  flex-col">
          <span className="footer__socialFollow text-[#d0d0d0] text-[14px] font-[400] ">
            Follow us on social media
          </span>
          <div className="footer__socialIconsMain flex justify-start items-center gap-[10px] inline-flex">
            <div className="footer__iconsMain w-[30px] h-[30px] relative">
              <FaWhatsapp className="footer__icons w-[24px] h-[25px] left-[2.56px] top-[2.5px] abbsolute" />
            </div>
            <div className="footer__iconsMain">
              <div className="footer__i">
                <CiFacebook className="footer__icons w-[24px] h-[25px] left-[2.56px] top-[2.5px] abbsolute" />
              </div>
            </div>
            <div className="footer__iconsMain">
              <AiOutlineInstagram className="footer__icons w-[24px] h-[25px] left-[2.56px] top-[2.5px] abbsolute" />
            </div>
            <div className="footer__iconsMain">
              <BiLogoTwitter className="footer__icons w-[24px] h-[25px] left-[2.56px] top-[2.5px] abbsolute" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
