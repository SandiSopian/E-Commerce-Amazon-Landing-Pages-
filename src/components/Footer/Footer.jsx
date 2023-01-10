import React from "react";
import footerCss from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div>
      <hr />

      <div className={footerCss.cFooter}>
        <div className={footerCss.logo}>
          <img src={Logo} alt="footer logo icon" />
          <span>amazon</span>
        </div>

        <div className={footerCss.block}>
          <div className={footerCss.detail}>
            <span>Contact Us</span>
            <span className={footerCss.pngLine}>
              <LocationMarkerIcon className={footerCss.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className={footerCss.pngLine}>
              <PhoneIcon className={footerCss.icon} />
              <a href="tel:352-587-887-8795">352-587-887-8795</a>
            </span>
            <span className={footerCss.pngLine}>
              <InboxIcon className={footerCss.icon} />
              <a href="mailto:support@amazon.com">support@amazon.com</a>
            </span>
          </div>
        </div>

        <div className={footerCss.block}>
          <div className={footerCss.detail}>
            <span>Account</span>
            <span className={footerCss.pngLine}>
              <LoginIcon className={footerCss.icon} />
              <span>Sign in</span>
            </span>
          </div>
        </div>

        <div className={footerCss.block}>
          <div className={footerCss.detail}>
            <span>Company</span>
            <span className={footerCss.pngLine}>
              <UsersIcon className={footerCss.icon} />
              <span>About us</span>
            </span>
          </div>
        </div>

        <div className={footerCss.block}>
          <div className={footerCss.detail}>
            <span>Resource</span>
            <span className={footerCss.pngLine}>
              <LinkIcon className={footerCss.icon} />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>

      <div className={footerCss.copyright}>
        <span>Copyright 2022 by Amazon, Inc.</span>
        <span>All right reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
