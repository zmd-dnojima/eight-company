import * as React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import * as style from "../styles/common.module.scss"

import logo from '../images/logo.svg'

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown,faChevronRight,faMinus,faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope,faUser } from "@fortawesome/free-regular-svg-icons"
import { faLine } from "@fortawesome/free-brands-svg-icons"

import bnr from "../images/bnr.png";

const Footer = ({ isShortMode }) => {
    return (
        <footer className={style.footerWrapper}>


            {!isShortMode && (
                <div>
                <div className={style.bannerZone}>
                    <Link to="/wallwash/" className={style.bannerLink}>
                        <img src={bnr} alt="塗装よりも安く早く外壁をキレイに 外壁洗浄専門店エイト" />
                    </Link>
                </div>
                <section className={style.contactSection}>
                    <div className={style.contactInner}>
                        <p className={style.contactSub}>CONTACT</p>
                        <h2 className={style.contactTitle}>お見積り無料で行います！</h2>
                        <p className={style.contactDesc}>お気軽にお問い合わせください</p>
                        <div className={style.contactBox}>
                            <div className={style.contactPhoneZone}>
                                <a href="tel:070-3815-0008" className={style.phoneLink}>
                                    <FontAwesomeIcon icon={faPhone} className={style.phoneIcon} />
                                    <span className={style.phoneNumber}>070-3815-0008</span>
                                </a>
                                <p className={style.businessHours}>受付時間: 08:30-17:30</p>
                            </div>

                            <div className={style.contactMailZone}>
                                <Link to="/contact/" className={style.mailButton}>
                                    <FontAwesomeIcon icon={faEnvelope} className={style.mailIcon} />
                                    <span>お問い合わせ</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            )}

            
            
            <div className={style.contentWrap}>
                <div className={style.logo}><img src={logo} alt="javascript" /></div>
                <div className={style.infoT}>
                    <div className={style.logoTitle}>外壁洗浄専門店 エイト</div>
                    <div>〒400-0104<br/>山梨県甲斐市龍地556-1</div>
                    <div>TEL : 0551-30-9062<br/>FAX : 0551-30-9063<br/>Phone : 070-3815-0008<br/>受付時間 : 08:30-17:30</div>
                </div>
            </div> 
            <div className={style.copyright}>©{new Date().getFullYear()} 株式会社エイトカンパニー All Rights Reserved.</div>
        </footer>
    )
}

export default Footer