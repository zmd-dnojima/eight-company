import * as React from "react"
import { graphql, Link } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { motion, useAnimate, useMotionValueEvent, useScroll, useInView } from "framer-motion"
//import * as Scroll from 'react-scroll'

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPhone,faPlus } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope,faUser } from "@fortawesome/free-regular-svg-icons"
import { faLine, faInstagram } from "@fortawesome/free-brands-svg-icons"

//bootstrap
//import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Loader from "../components/loader"
import SwiperLoop from "../components/swiperloop"
import * as style from "../styles/aboutus.module.scss"  


const AboutUs = (props) => {
    return (
        
        <Layout>
            
            <Seo title="株式会社エイトカンパニー" description="株式会社エイトカンパニー | 私たちについて" />
            {/* <Loader /> */}
            <div className={style.main}>
                <section className={style.subVisual}>
                    {/* <StaticImage src="../images/top.jpg" alt="main" placeholder="blurred" quality ={90} /> */}
                    <div className={style.txtWrap}>
                        <div className={style.txtArea}><span>ABOUT US</span><br/>私たちについて</div>
                    </div>
                </section>

                <section className={style.greetingSection}>
                <div className={style.greetingContainer}>
        
                        {/* 左側：代表の顔写真エリア */}
                        <div className={style.greetingImageZone}>
                            {/* <img src="../images/aboutus/p1.jpg" alt="株式会社エイトカンパニー 代表 饗場秀樹" /> */}
                            <StaticImage src="../images/aboutus/p1.jpg" alt="株式会社エイトカンパニー 代表 饗場秀樹" placeholder="blurred" quality ={90} />
                        </div>

                        <div className={style.greetingTextZone}>
                            <p className={style.greetingParagraph}>
                                当社は２０２１年エクステリアエイトとして創業し、２０２５年株式会社エイトカンパニーに改名したまだまだ浅い会社です。外構工事の確かな技術と経験をもとに、お客様の理想の庭（外構）造りをお手伝いしております。
                            </p>
                            <p className={style.greetingParagraph}>
                                「デザイナーはお客様。当社はスパイス（アドバイス）を添えるだけ。」
                            </p>
                            <p className={style.greetingParagraph}>
                                一緒に”理想の庭・外構”を作っていきます。もちろんデザインも承ります。<br />
                                代表自身職人として現場に立ち、設計から施工まで一貫対応いたします。<br />
                                まるで顔馴染みの職人に直接頼むような感覚でお気軽にお問合せ下さい。
                            </p>
                            <p className={style.greetingParagraph}>
                                造るだけではなくお家の美観を保つ為に外壁・エクステリアクリーニングのサービスも行っております。株式会社エイトカンパニーはこれからも地域に根差して誠実に心を込めてお客様の毎日が１％でも豊かになれるそんな会社を目指しております。
                            </p>
                            
                            {/* 署名エリア */}
                            <div className={style.signatureZone}>
                                <p>㈱エイトカンパニー・外壁洗浄専門店エイト 代表<br/>饗場秀樹</p>
                            </div>
                        </div>

                </div>
                </section>
                
                <section className={style.overviewSection}>
                    <div className={style.overviewTitle}><span>OVERVIEW</span>会社概要</div>

                    <div className={style.companyContainer}>
                        <dl className={style.companyList}>
                            <div className={style.companyRow}>
                                <dt className={style.companyItem}>会社名</dt>
                                <dd className={style.companyDetail}>株式会社エイトカンパニー</dd>
                            </div>

                            <div className={style.companyRow}>
                                <dt className={style.companyItem}>代表者</dt>
                                <dd className={style.companyDetail}>饗場 秀樹</dd>
                            </div>

                            <div className={style.companyRow}>
                                <dt className={style.companyItem}>資本金</dt>
                                <dd className={style.companyDetail}>◯◯◯,◯◯◯円</dd>
                            </div>

                            <div className={style.companyRow}>
                                <dt className={style.companyItem}>会社所在地</dt>
                                <dd className={style.companyDetail}>
                                    〒400-0104 山梨県甲斐市龍地556-1
                                    <a href="https://maps.app.goo.gl/V8npJvVBdqnXbGzk6" target="_blank" rel="noopener noreferrer" className={style.mapLink}>
                                        Google Mapはこちら
                                    </a>
                                </dd>
                            </div>

                            <div className={style.companyRow}>
                                <dt className={style.companyItem}>定休日</dt>
                                <dd className={style.companyDetail}>◯曜日</dd>
                            </div>

                            <div className={style.companyRow}>
                                <dt className={style.companyItem}>営業時間</dt>
                                <dd className={style.companyDetail}>08:30 - 17:30</dd>
                            </div>

                            <div className={style.companyRow}>
                                <dt className={style.companyItem}>TEL</dt>
                                <dd className={style.companyDetail}>0551-30-9062 / 070-3815-0008</dd>
                            </div>

                            <div className={style.companyRow}>
                                <dt className={style.companyItem}>FAX</dt>
                                <dd className={style.companyDetail}>0551-30-9063</dd>
                            </div>
                        </dl>

                    </div>
                </section>
              
         

            </div>{/* </main> */}
        </Layout>
    )
}

export default AboutUs

