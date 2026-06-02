import React, { useState } from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLine, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useLocation } from "@reach/router"
import * as style from "../styles/common.module.scss"

const NAV_LINKS = [
  { label: "私たちについて", to: "/about" },
  { label: "事業内容", to: "/services" },
  { label: "お知らせ＆施工事例", to: "/works" },
  { label: "外壁洗浄専門店エイト", to: "/wallwash" },
];


const Menu = () => {

    const location = useLocation()
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    const [active, setActive] = useState(false)
    const classToggle = () => {
      setActive(!active)
    }
    
    return (
        
      <menu className={style.menuWrapper}>
 
        <button
          onClick={classToggle}
          className={`${style.menuBtn} ${active ? style.active : ''}`}
          aria-label={active ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={active}
        ></button>
 
        <div className={`${style.menuInner} ${active ? style.menuShow : ''}`}>
  
          {/* ナビリンク */}
          <nav className={style.drawerNav}>
            {NAV_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={classToggle}
                className={`${style.drawerNavLink} ${location.pathname.startsWith(to) ? style.active : ""}`}
              >
                {label}
              </Link>
            ))}
          </nav>
 
        {/* お問い合わせ・SNS */}
        <div className={style.drawerBottom}>
          <Link
            to="/contact"
            onClick={classToggle}
            className={`${style.drawerContactBtn} ${
              location.pathname === "/contact" || location.pathname === "/contact/"
                ? style.selected : ""
            }`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>お問い合わせ</span>
          </Link>
 
          <div className={style.drawerSns}>
            <a
              href="https://lin.ee/hcoA4qn"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.drawerSnsBtn} ${style.snsLine}`}
              aria-label="LINE"
            >
              <FontAwesomeIcon icon={faLine} />
              <span>LINE</span>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${style.drawerSnsBtn} ${style.snsInsta}`}
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
 
      </div>
    </menu>
    )
}

export default Menu