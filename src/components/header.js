import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import * as style from "../styles/common.module.scss"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"


//bootstrap dropdown
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope,faUser } from "@fortawesome/free-regular-svg-icons"
import { faLine } from "@fortawesome/free-brands-svg-icons"
import { color } from 'framer-motion'

import logo from "../images/logo.svg";

const NAV_LINKS = [
  { label: "私たちについて", to: "/aboutus" },
  { label: "事業内容", to: "/service" },
  { label: "お知らせ＆施工事例", to: "/works", extraClass: style.off },
  { label: "外壁洗浄専門店エイト", to: "/wallwash" },
];


const Header = () => {

  const location = useLocation();

  return (

    <header className={style.headerWrapper}>
      <div className={style.contentWrap}>
 
        <div className={style.logo}><Link to="/"><img src={logo} alt="株式会社エイトカンパニー ロゴ" className={style.logoMark} /></Link></div>
 
        <nav className={style.nav}>
          {NAV_LINKS.map(({ label, to, extraClass }) => (
            <Link
              key={to}
              to={to}
              className={`
                ${style.navLink} 
                ${location.pathname.startsWith(to) ? style.active : ""}
                ${extraClass || ""} 
              `}
            >
              {label}
            </Link>
          ))}
        </nav>
 
        <div className={style.ctaWrap}>
          <Link
            to="/contact"
            className={`${style.hdr_btn} ${style.btn_mail} ${
              location.pathname === "/contact" || location.pathname === "/contact/"
                ? style.selected
                : ""
            }`}
          >
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            <span>お問い合わせ</span>
          </Link>
        </div>
 
      </div>
    </header>
    
  );
}

export default Header