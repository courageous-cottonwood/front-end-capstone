import React from "react";
import style from './header.module.css';
import logo from './logo.png';

const Header = () => {


  return (
    <div className={style.header}>
      <div className={style.logo_container}>
      <img src={logo} className={style.logo} />
      <h3>Courageous Cottonwood</h3>
      </div>
      <p>Cart</p>
    </div>
  )
}

export default Header;