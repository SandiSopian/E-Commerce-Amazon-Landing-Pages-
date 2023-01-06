import React from "react";
import headerCss from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";

const Header = () => {
  return (
    <section className={headerCss.container}>
      <div className={headerCss.logo}>
        <img src={Logo} alt="logo image" />
        <p>amazon</p>
      </div>

      <div className={headerCss.right}>
        <nav className={headerCss.menu}>
          <ul className={headerCss.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </nav>

        <input type="text" className={headerCss.search} placeholder="Search" />

        <CgShoppingBag className={headerCss.cart} />
      </div>
    </section>
  );
};

export default Header;
