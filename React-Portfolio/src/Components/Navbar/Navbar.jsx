import React, {useState} from "react";
import styles from './Navbar.module.css';
import { getImageURL } from "../../utils";

export const Navbar = () => {
  return ( 
  <nav className={styles.navbar}>
    <a className={styles.title} href='/'>Portfolio</a>
    <div className={styles.menu}>
      <img className={styles.menuBtn} src={getImageURL("nav/menuIcon.png")} alt='menu button'/>
      <ul className={styles.menuItems}>
        <li>
          <a href='#about'>About</a></li>
          <li><a href='#experience'>Skills</a></li>
          <li><a href='#about'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  </nav>
  );
};