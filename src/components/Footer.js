import React from "react";
import "./Footer.css";
import { CiFlag1 } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LiaCcAmex } from "react-icons/lia";
import { FaGooglePay } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";
import { FaAmazonPay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { FaAlipay } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footrcontainer">
      <div className=" top">
        <div>
          <h5 className="heading5">BE THE FIRST TO KNOW</h5>
          <p className="para">Sign up for updates from metta muse.</p>
          <div>
            <input type="text" />
            <button>Subscribe</button>
          </div>
        </div>
        <div>
          <h4 className="heading4">CONTACTS</h4>
          <p className="para">+44 221 133 5360</p>
          <p className="para">customercare@mettamuse.com</p>
          <h4 className="heading4">CURRENCY</h4>
          <h5 className="heading5">
            <CiFlag1 />
            USD
          </h5>
          <p className="para">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div className="contactinfo">
        <div>
          <h5 className="heading5">metta muse</h5>
          <p className="para">About Us</p>
          <p className="para">Stories</p>
          <p className="para">Artisans</p>
          <p className="para">Boutiques</p>
          <p className="para">Contact Us</p>
          <p className="para">EU Compliances Docs</p>
        </div>
        <div>
          <h5 className="heading5">QUICK LINKS</h5>
          <p className="para">Orders & shopping</p>
          <p className="para">Join/Login as a Selter</p>
          <p className="para">Payment & Pricing</p>
          <p className="para">Return & Refunds</p>
          <p className="para">FAQs</p>
          <p className="para">Privacy Policy</p>
          <p className="para">Terms & Conditions</p>
        </div>
        <div>
          <h5 className="heading5">FOLLOW US</h5>
          <div>
            <CiLinkedin className="simbol"/>
            <FaInstagram  className="simbol"/>
          </div>
          <h6 className="heading6">metta muse ACCEPTS</h6>
          <div className="space">
            <FaGooglePay  className="simbol"/>
            <LiaCcAmex className="simbol"/> 
            <FaCcApplePay className="simbol"/>
            <FaAmazonPay className="simbol" />
            <FaPaypal className="simbol"/>
            <FaAlipay className="simbol" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
