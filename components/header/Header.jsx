import React from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import {GoThreeBars} from 'react-icons/go'
import { useState } from "react";
const Header = () => {
  const [ShowMenu,setShowMenu] =useState(true);
  const toggleMenu =()=>{
    setShowMenu((ShowMenu)=>!ShowMenu)
  }
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="" />
        <span>Mcsharp</span>
      </div>
      <div className={css.right}>
      {/* navbar toggle */}
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars/>
        </div>

          <ul className={css.menu} style={{display:ShowMenu ? 'inherit':'none'}}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        <input type="text" placeholder="search" className={css.search} />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
