import React, { useState } from "react";
import headerCss from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
  };

  return (
    <section className={headerCss.container}>
      <div className={headerCss.logo}>
        <img src={Logo} alt="logo image" />
        <p>amazon</p>
      </div>

      <div className={headerCss.right}>
        <div className={headerCss.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>

        <ul className={headerCss.menu} style={{ display: ShowMenu ? "inherit" : "none" }}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input type="text" className={headerCss.search} placeholder="Search" />

        <CgShoppingBag className={headerCss.cart} />
      </div>
    </section>
  );
};

export default Header;
