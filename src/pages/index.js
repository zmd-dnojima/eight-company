import * as React from "react"
import { graphql, Link } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { motion, useAnimate, useMotionValueEvent, useScroll, useInView } from "framer-motion"
//import * as Scroll from 'react-scroll'

import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Keyboard, FreeMode, EffectCards, Thumbs } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css/bundle'
import "swiper/swiper.min.css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/free-mode"

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
import * as style from "../styles/index.module.scss"  

import person1 from "../images/pw_1.png"
import person2 from "../images/pw_2.png"
import person3 from "../images/pw_3.png"
import person4 from "../images/pw_4.png"

const worryText = "お悩み";



const Index = (props) => {
    const location = useLocation()
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    const singleBlog = [];
    
    return (
        
        <Layout>
            
            <Seo title="株式会社エイトカンパニー" description="株式会社エイトカンパニー | ホーム" />
            {/* <Loader /> */}
            <div className={style.main}>


                <section className={style.mainVisual}>
                    <div className={style.txtWrap}>
                        <div className={style.txtArea}>世代を超えて<br/>家族の笑顔が続く外構に</div>
                    </div>
                </section>


                
                <section className={style.news}>
                    <div className={style.contentWrap}>
                    <div className={style.subTitle}>
                        <div className={style.subtitle}><span>NEWS</span><br/>新着情報｜活動報告</div>
                        <div className={style.morebutton}><Link to="/past/1">VIEW MORE<span><FontAwesomeIcon icon={faChevronRight}/></span></Link></div>
                    </div>
                    
                    <div className={style.gridArea}>
                        <div className={style.blogArea}>
                            {/* tagをworks、記事数を4つに絞る */}
                            {(() => {
                                const allBlog = [];
                                const showBlogNum = 4;
                                var blogAddNum = 0;
                                
                                for(var i in props.data.allMicrocmsBlog.edges){
                                    allBlog.push(props.data.allMicrocmsBlog.edges[i])
                                    blogAddNum +=1
                                    if(blogAddNum > showBlogNum){ break }
                                    singleBlog.push(allBlog[i])
                                }
                            })()}             
                            {
                                singleBlog.map((novel, index) =>(
                                    <Link to={`/blog/${novel.node.blogId}`} key={index}>
                                        <div className={style.blogCard}>                            
                                            
                                            <div className={style.blogImgWrapper}><div className={style.blogImgContent}><img src={novel.node.thumbnail.url} alt="card-image" className={style.cardImg} /></div></div>
                                            <div className={style.blogTags}>{novel.node.tags.name}</div>  
                                            <div className={style.blogTitle}>{novel.node.title}</div>
                                            {/* <div className={style.blogDate}><FontAwesomeIcon icon={faClock}/> {`${novel.node.eventDate.substring(0, novel.node.eventDate.indexOf("T"))}`}</div> */}
                                            <div className={style.blogDate}> {novel.node.date}</div>
                                            
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                    </div>
                    
                </div></section>
                



              
                <section className={style.featuresSection}>
                <div className={style.featuresGrid}>

                    <div className={style.featureCard}>
                    <p className={style.featureStars}>★★★★★</p>
                    <h3 className={style.featureTitle}>施工実績</h3>
                    <p className={style.featureText}>創業５年、10年後も笑顔でいられる外構づくりをモットーに。豊富な知識と高品質施工でリピート多数。</p>
                    </div>

                    <div className={style.featureCard}>
                    <p className={style.featureStars}>★★★★★</p>
                    <h3 className={style.featureTitle}>適正価格×高品質施工</h3>
                    <p className={style.featureText}>中間マージンがないことにより高いコスパを実現。代表自ら現場を管理、品質をチェック。</p>
                    </div>

                    <div className={style.featureCard}>
                    <p className={style.featureStars}>★★★★★</p>
                    <h3 className={style.featureTitle}>エクステリアプランナー</h3>
                    <p className={style.featureText}>お客様の目線に立ちデザイン、使いやすさ、生活導線、メンテナンス性まで考慮。10年後も笑顔でいられる為に。</p>
                    </div>

                    <div className={style.featureCard}>
                    <p className={style.featureStars}>★★★★★</p>
                    <h3 className={style.featureTitle}>イレギュラー対応力</h3>
                    <p className={style.featureText}>出来ない事を考えるのではなく、できる方法を考え美しさと耐久性を両立。</p>
                    </div>

                    <div className={style.featureCard}>
                    <p className={style.featureStars}>★★★★★</p>
                    <h3 className={style.featureTitle}>地域密着の安心対応</h3>
                    <p className={style.featureText}>一件一件丁寧に施工、施工後も安心してお付き合い可能。施工前にはご近隣の方へのご挨拶へ伺います。</p>
                    </div>

                    <div className={style.featureCard}>
                    <p className={style.featureStars}>★★★★★</p>
                    <h3 className={style.featureTitle}>外構＋外壁洗浄のトータル対応</h3>
                    <p className={style.featureText}>外構工事だけでなく、住まい全体を綺麗に保つお手伝いが可能。</p>
                    </div>

                </div>
                </section>

                <SwiperLoop />
                
                <section className={style.worriesSection}>
 
                <h2 className={style.worriesTitle}>
                    こんな
                    <div className={style.worriesTitleAccent}>
                        {worryText.split("").map((char, index) => (
                        <span key={index}>
                            {char}
                        </span>
                        ))}
                    </div>
                    ありませんか？
                </h2>
            
                <div className={`${style.worriesRow} ${style.worriesRowRight}`}>
                    <div className={style.worriesContent}>
                    <div className={style.worriesBubbles}>
                    <p className={style.worriesBubble}>新築したけど外構をどう進めればいいのかわからない</p>
                    <p className={style.worriesBubble}>駐車しやすく使いやすい外構にしたい</p>
                    </div>
                    <img src={person1} alt="" className={style.worriesPerson} />
                    </div>
                </div>
            
                {/* 行2：左寄せ */}
                <div className={`${style.worriesRow} ${style.worriesRowLeft}`}>
                    <div className={style.worriesContent}>
                    <img src={person2} alt="" className={style.worriesPerson} />
                    <div className={style.worriesBubbles}>
                    <p className={style.worriesBubble}>何にお金をかければいいのか迷っている</p>
                    <p className={style.worriesBubble}>外からの視線が気になるダサくはしたくないけど、やりすぎも避けたい</p>
                    </div>
                    </div>
                </div>
            
                {/* 行3：右寄せ */}
                <div className={`${style.worriesRow} ${style.worriesRowRight}`}>
                    <div className={style.worriesContent}>
                    <div className={style.worriesBubbles}>
                    <p className={style.worriesBubble}>家に合う落ち着いた外構にしたい</p>
                    <p className={style.worriesBubble}>子どもが免許取得し駐車スペースが足りなくなった</p>
                    </div>
                    <img src={person3} alt="" className={style.worriesPerson} />
                    </div>
                </div>
            
                {/* 行4：左寄せ */}
                <div className={`${style.worriesRow} ${style.worriesRowLeft}`}>
                    <div className={style.worriesContent}>
                    <img src={person4} alt="" className={style.worriesPerson} />
                    <div className={style.worriesBubbles}>
                    <p className={style.worriesBubble}>住んでから「こうしておけばよかった」と後悔したくない</p>
                    <p className={style.worriesBubble}>相談できず、いわれるがままに進んでしまった</p>
                    </div>
                    </div>
                </div>
            
                {/* 締めコピー */}
                <div className={style.worriesClosing}>
                    <p>
                    株式会社エイトカンパニーは<br />
                    <span className={style.worriesClosingAccent}>暮らしやすさまで考えた外構提案を大切にしています。</span>
                    </p>
                </div>
            
                </section>


                <section className={style.aboutServiceSection}>
                    <div className={style.cardContainer}>
                        
                        {/* 左側：私たちについて */}
                        <div className={style.infoCard}>
                            <h3 className={style.cardTitle}><span>ABOUT US</span>私たちについて</h3>
                            <p className={style.cardText}>
                                私たちは山梨県全域で外構・エクステリア工事を承っている専門会社です。
                            </p>
                            <Link to="/aboutus/" className={style.cardButton}>
                                <span>ABOUT US</span>
                                <FontAwesomeIcon icon={faChevronRight} className={style.btnIcon} />
                            </Link>
                        </div>

                        {/* 右側：事業・サービス紹介 */}
                        <div className={style.infoCard}>
                            <h3 className={style.cardTitle}><span>SERVICE</span>事業・サービス紹介</h3>
                            <p className={style.cardText}>
                                その他お外のことならなんでもご相談ください。
                            </p>
                            <Link to="/service/" className={style.cardButton}>
                                <span>SERVICE</span>
                                <FontAwesomeIcon icon={faChevronRight} className={style.btnIcon} />
                            </Link>
                        </div>

                    </div>
                </section>


                <section className={style.faqSection}>
                    <div className={style.inner_faq}>
                        <div className={style.subTitle}>
                            <div className={style.ten}>FAQ</div>
                            <div className={style.tjp}>よくある質問</div>
                        </div>
                        <Accordion>
                            <Accordion.Item  className={style.item_faq} eventKey="0">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>造園工事の費用はどれくらいかかりますか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>庭の広さや内容によって大きく異なりますが、目安として小さな庭のリフォーム：20万円〜、中庭の造園：50万円〜150万円、広い庭や新築外構：200万円〜となります。現地調査を無料で行っていますので、まずはお気軽にご相談ください。詳細なお見積もりをお作りします。(※レンタル用品をご利用の際は備え付けのアルコールスプレーにて十分に消毒をされた上でご利用ください。)手ぶらでお気軽にご来店ください。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="1">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>庭のデザインから施工までお願いできますか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>はい、すべてお任せください。 ヒアリング → デザイン提案（パース・図面） → お見積もり → 施工 → アフターメンテナンスまで、一貫して対応しております。 お客様のご予算や好みに合わせて柔軟にプランをご提案します。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="2">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>対応エリアはどこまでですか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>主に山梨県全域に対応しております。 甲府市、富士吉田市、都留市、山梨市、大月市、韮崎市、南アルプス市、北杜市、甲斐市、笛吹市、上野原市、甲州市、中央市、市川三郷町、早川町、身延町、南部町、富士川町、昭和町、西桂町、道志村、忍野村、山中湖村、鳴沢村、富士河口湖町、小菅村、丹波山村。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item  className={style.item_faq} eventKey="3">
                                <Accordion.Header>
                                    <div className={style.q_logo}>Q</div>
                                    <div className={style.q_title}>見積もりは無料ですか？</div>
                                </Accordion.Header>
                                <Accordion.Body className={style.q_content}>
                                    <div className={style.q_logo}>A</div>
                                    <div className={style.q_title}>はい、完全無料です！ 現地調査とお見積もりは一切費用をいただきません。 庭の写真や図面だけでの簡易見積もりも可能ですので、まずはお気軽にご相談ください。 「予算がどれくらいかかるか知りたい」という方も大歓迎です。</div>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                        
                        </Accordion>
                    </div>
                </section>
                

               

                

                

                

                

                


                

            </div>{/* </main> */}
        </Layout>
    )
}

export default Index

export const query = graphql` 
    query MyQuery {
        allMicrocmsBlog(sort: { createdAt: DESC }) {
            edges {
                node {
                    date
                    blogId
                    content
                    title
                    tags {
                        name
                    }
                    thumbnail {
                        url
                    }
                }   
            }
        }
    }
  `  