import React from "react";
import style from './header.module.css';
//import logo from './logo.png';
import logo from './logo-no-tag.png';

const Header = () => {


  return (
    <div className={style.header}>
      <div className={style.logo_container}>
      <img src={logo} className={style.logo} />
      <h3>Courageous Cottonwood</h3>
      </div>
      <p>CART</p>
    </div>
  )
}

export default Header;