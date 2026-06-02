import * as React from "react"
import { graphql, Link } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { motion, useAnimate, useMotionValueEvent, useScroll, useInView } from "framer-motion"
//import * as Scroll from 'react-scroll'

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPhone,faPlus, faChevronDown } from "@fortawesome/free-solid-svg-icons"
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
import * as style from "../styles/service.module.scss"  

import s1 from "../images/service/p1.jpg"
import s2 from "../images/service/p2.jpg"
import s3 from "../images/service/p3.jpg"
import s4 from "../images/service/p4.jpg"
import s5 from "../images/service/p5.jpg"
import area from "../images/service/area.jpg"
import f1 from "../images/service/flow1.svg"
import f2 from "../images/service/flow2.svg"
import f3 from "../images/service/flow3.svg"
import f4 from "../images/service/flow4.svg"
import f5 from "../images/service/flow5.svg"
import f6 from "../images/service/flow6.svg"


const Service = (props) => {

    const services = [
        {
            img:s1,
            title: "外構工事／エクステリア工事の設計施工一式",
            desc: "新築外構一式／駐輪場（土間コンクリート）／カーポート／ガレージ／物置設置／ブロック／フェンス工／門柱／門扉／石貼り／アプローチ／階段／ウッドデッキ／テラス／人工芝／ロックガーデン／基礎工事 etc"
        },
        {
            img:s2,
            title: "外構／庭園リガーデン・修繕工事",
            desc: "駐輪場の拡張／植木伐採・伐根／エクステリア商品の交換・修繕／段差解消／バリアフリー化／老朽化ブロック塀撤去／庭の撤去 etc"
        },
        {
            img:s3,
            title: "小規模工事／部分工事",
            desc: "カーポートだけブロック積だけ部分補修だけ小さな工事でもご相談ください。"
        },
        {
            img:s4,
            title: "造園工事",
            desc: "植木の植栽／花壇作成／客土入れ／砂利敷／ロックガーデン／石貼り／植木のお手入れ／伐採・伐根 etc"
        },
        {
            img:s5,
            title: "外構洗浄（外壁洗浄専門店エイト）",
            desc: "外構、建物の外壁等の汚れを専用の機械でキレイにします。外壁の汚れ（コケ・カビ等）除去／コンクリートの黒ずみ／アプローチ／タイル／ブロック／エクステリア商品 etc。塗装ではなく洗浄でキレイにするためコストを抑えながら見た目を改善し、資産価値アップができます。"
        }
    ];

    const flowSteps = [
        {
            step: "STEP 1",
            title: "お問い合わせ",
            icon:f1,
            desc: "お問合せフォーム・お電話・公式Lineよりお気軽にご相談ください。"
        },
        {
            step: "STEP 2",
            title: "ヒアリング",
            icon:f2,
            desc: "お手数ですが一度ご来店いただき、ご希望のデザインだけでなく立地や世帯数ライフスタイル、ご予算など暮らしに合わせた要望をお伺いします。"
        },
        {
            step: "STEP 3",
            title: "現地確認・プラン作成",
            icon:f3,
            desc: "敷地条件や建物とのバランスを確認し、ご要望に合わせたプランとお見積りをご提案します。"
        },
        {
            step: "STEP 4",
            title: "ご契約",
            icon:f4,
            desc: "内容にが納得いただいた上でご契約となります。工程や注意点もわかりやすくご説明いたします。"
        },
        {
            step: "STEP 5",
            title: "ご近所あいさつ・着工",
            icon:f5,
            desc: "着工前には当社よりご近所様へ工事のお知らせのご挨拶へ伺います。"
        },
        {
            step: "STEP 6",
            title: "完成・お引渡し",
            icon:f6,
            desc: "完成後も、気になる点があればお気軽にお問合せください。"
        }
    ];


    return (
        
        <Layout>
            
            <Seo title="株式会社エイトカンパニー" description="株式会社エイトカンパニー | 事業内容" />
            {/* <Loader /> */}
            <div className={style.main}>
                <section className={style.subVisual}>
                    {/* <StaticImage src="../images/top.jpg" alt="main" placeholder="blurred" quality ={90} /> */}
                    <div className={style.txtWrap}>
                        <div className={style.txtArea}><span>SERVICE</span><br/>事業内容</div>
                    </div>
                </section>

                <section className={style.serviceSection}>
                    <div className={style.servicePointContainer}>
                        
                        {/* 5つのサービスリストのループ */}
                        <div className={style.serviceGridList}>
                            {services.map((item, index) => (
                                <div key={index} className={style.serviceRow}>
                                    {/* 左側：写真エリア */}
                                    <div className={style.serviceImageZone}>
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    {/* 右側：テキストエリア */}
                                    <div className={style.serviceTextZone}>
                                        <h3 className={style.serviceItemTitle}>{item.title}</h3>
                                        <p className={style.serviceItemDesc}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 下部のお問い合わせ誘導エリア */}
                        <div className={style.serviceBottomLead}>
                            <p className={style.leadText}>その他お外のことならなんでもご相談ください。</p>
                            <Link to="/contact/" className={style.leadButton}>
                                <FontAwesomeIcon icon={faEnvelope} className={style.leadIcon} />
                                <span>お問い合わせ</span>
                            </Link>
                        </div>

                    </div>
                </section>


                <section className={style.areaSection}>
                    <div className={style.areaContainer}>
                        
                        {/* 左側：テキストコンテンツエリア */}
                        <div className={style.areaTextZone}>
                            <p className={style.areaSubTitle}>AREA</p>
                            <h2 className={style.areaMainTitle}>対応エリアについて</h2>
                            
                            <h3 className={style.areaLead}>山梨県全域に対応しております。</h3>
                            
                            <p className={style.areaText}>
                                甲府市、富士吉田市、都留市、山梨市、大月市、韮崎市、南アルプス市、
                                北杜市、甲斐市、笛吹市、上野原市、甲州市、中央市、市川三郷町、早川町、
                                身延町、南部町、富士川町、昭和町、西桂町、道志村、忍野村、山中湖村、
                                鳴沢村、富士河口湖町、小菅村、丹波山村。
                            </p>
                        </div>

                        {/* 右側：地図イラストエリア */}
                        <div className={style.areaImageZone}>
                            <img src={area} alt="山梨県全域対応エリアマップ" />
                        </div>

                    </div>
                </section>
              
                <section className={style.flowSection}>
                    <div className={style.flowContainer}>
                        
                        <p className={style.flowSubTitle}>FLOW</p>
                        <h2 className={style.flowMainTitle}>ご相談から完成までの流れ</h2>

                        <div className={style.flowTimeline}>
                            {flowSteps.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className={style.flowCard}>
                                        <div className={style.flowCardInner}>
                                            
                                            {/* 左側：アイコンゾーン（全体をリンク化） */}
                                            <div className={style.flowIconZone}>
                                                <div className={style.flowIconWrapper}>
                                                    <img src={item.icon} alt={`${item.title}のアイコン`} />
                                                </div>
                                            </div>
                                            
                                            {/* 右側：テキスト情報 */}
                                            <div className={style.flowTextZone}>
                                                <h3 className={style.flowStepHeader}>
                                                    <span className={style.flowStepNum}>{item.step}</span>
                                                    <span className={style.flowStepTitle}>{item.title}</span>
                                                </h3>
                                                <p className={style.flowStepDesc}>{item.desc}</p>
                                            </div>

                                        </div>
                                    </div>

                                    {index < flowSteps.length - 1 && (
                                        <div className={style.flowArrowZone}>
                                            <FontAwesomeIcon icon={faChevronDown} className={style.flowArrowIcon} />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                    </div>
                </section>                

            </div>{/* </main> */}
        </Layout>
    )
}

export default Service

