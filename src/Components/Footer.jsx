import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 items-center">
      <nav>
        <img
          src="https://i.ibb.co/nsXypkj7/page-Logo-removebg-preview.png"
          className="w-32 "
          alt=""
        />
        <h6 className="footer-title">contact Details</h6>
        <a className="link link-hover">+88 01533 333 333</a>
        <a className="link link-hover">info@gmail.com</a>
        <a className="link link-hover">72, Wall street, King Road, Dhaka</a>
      </nav>

      <nav>
        <h6 className="footer-title">Terms & Conditions</h6>
        <Link to={"/about"}>about Us</Link>
        <Link to={"/contact"}>contact Us</Link>
        <a className="link link-hover">Terms of Use</a>

        <a className="link link-hover">Privacy Policy</a>
      </nav>

      <nav>
        <h6 className="footer-title">Social Media Links</h6>
        <div className="flex gap-2">
          <Link to={"https://www.facebook.com/concentration369/"}>
            <FaFacebook size={30}></FaFacebook>
          </Link>
          <Link to={"https://www.instagram.com/mh_sky_69/"}>
            <FaInstagram size={30}></FaInstagram>
          </Link>
          <Link to={"https://x.com/mh_sky_69"}>
            <FaTwitter size={30}></FaTwitter>
          </Link>
          <Link to={"www.linkedin.com/in/mehediakash01"}>
            <FaLinkedinIn size={30}></FaLinkedinIn>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
