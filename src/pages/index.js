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


//microcmsの日時ずれを解消
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";


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


dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");
const worryText = "お悩み";

const faqList = [
    {
        key: "1",
        q: "外構・庭のデザインから施工までお願いできますか？",
        a: "はい、すべてお任せください。 ヒアリング → デザイン提案（パース・図面） → お見積もり → 施工 → アフターメンテナンスまで、一貫して対応しております。 お客様のご予算や好みに合わせて柔軟にプランをご提案します。"
    },
    {
        key: "2",
        q: "対応エリアはどこまでですか？",
        a: "主に山梨県全域に対応しております。 甲府市、富士吉田市、都留市、山梨市、大月市、韮崎市、南アルプス市、北杜市、甲斐市、笛吹市、上野原市、甲州市、中央市、市川三郷町、早川町、身延町、南部町、富士川町、昭和町、西桂町、道志村、忍野村、山中湖村、鳴沢村、富士河口湖町。<br/>上記以外の地域につきましても、柔軟に対応いたしますのでお気軽にご相談ください。"
    },
    {
        key: "3",
        q: "見積もりは無料ですか？",
        a: "はい、完全無料です！ 現地調査とお見積もりは一切費用をいただきません。 庭の写真や図面だけでの簡易見積もりも可能ですので、まずはお気軽にご相談ください。 「予算がどれくらいかかるか知りたい」という方も大歓迎です。"
    },
    {
        key: "4",
        q: "外構工事はどれくらいかかりますか？",
        a: "土地の広さやエクステリア商品の有無等お客様のご要望に応じて価格が変わりますので、まずはお気軽にご相談ください。詳細なお見積りをお作りします。"
    }
];
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
                        <div className={style.txtArea}>
                            <span>世代を超えて<br/>家族の笑顔が続く外構に</span>
                            山梨の外構・エクステリア専門店
                        </div>                    </div>
                </section>


                
                <section className={style.news}>
                    <div className={style.contentWrap}>
                        <div className={style.subTitleWrap}>
                            <div className={style.subTitle}>
                                <div className={style.ten}>NEWS</div>
                                <div className={style.tjp}>お知らせ&施工事例</div>
                            </div>
                            
                            <Link to="/articles/" className={style.moreButton}>
                                <span>VIEW MORE</span>
                                <FontAwesomeIcon icon={faChevronRight} className={style.btnIcon} />
                            </Link>
                        </div>
                    
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
                                        <div className={style.blogDate}> {`${dayjs(novel.node.date).tz().format("YYYY年MM月DD日")}`}</div>
                                        {/* <div className={style.blogTags}>{novel.node.tags && novel.node.tags.map((tag) => (<span key={tag.id}>{tag.name}</span>))}</div>   */}
                                        <div className={style.blogTitle}>{novel.node.title}</div>
                                    </div>
                                    <div className={style.blogButton}>もっと見る</div>
                                </Link>
                            ))
                        }

                    </div>
                    
                </div></section>
                



              
                <section className={style.featuresSection}>
                <div className={style.featuresGrid}>

                    <div className={style.featureCard}>
                    <p className={style.featureStars}>★★★★★</p>
                    <h3 className={style.featureTitle}>施工実績</h3>
                    <p className={style.featureText}>職人歴14年累計200件以上工事実績。10年後も笑顔でいられる外構づくりをモットーに。豊富な知識と高品質でリピート多数。</p>
                    </div>

                    <div className={style.featureCard}>
                    <p className={style.featureStars}>★★★★★</p>
                    <h3 className={style.featureTitle}>適正価格×高品質施工</h3>
                    <p className={style.featureText}>設計から施工まで自社で対応。無駄な中間コストを抑えながら代表自ら現場を管理し品質をチェック。</p>
                    </div>

                    <div className={style.featureCard}>
                    <p className={style.featureStars}>★★★★★</p>
                    <h3 className={style.featureTitle}>エクステリアプランナー</h3>
                    <p className={style.featureText}>現場を知る代表だからできる提案。使いやすさ、生活導線、メンテナンス性まで考慮。10年後も笑顔でいられる為に。</p>
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
                    <h3 className={style.featureTitle}>外構+メンテナンスのトータル対応</h3>
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
                    <p className={style.worriesBubble}>家を建てたけど外構はドコに頼めばいいのか分からない</p>
                    <p className={style.worriesBubble}>駐車しやすく使いやすい外構にしたい</p>
                    <p className={style.worriesBubble}>予算内で理想の外構ができるか不安</p>
                    </div>
                    <img src={person1} alt="" className={style.worriesPerson} />
                    </div>
                </div>
            
                {/* 行2：左寄せ */}
                <div className={`${style.worriesRow} ${style.worriesRowLeft}`}>
                    <div className={style.worriesContent}>
                    <img src={person2} alt="" className={style.worriesPerson} />
                    <div className={style.worriesBubbles}>
                    <p className={style.worriesBubble}>外からの視線が気になるダサくはしたくないけど、やりすぎも避けたい</p>
                    <p className={style.worriesBubble}>家に合う落ち着いた外構にしたい</p>
                    </div>
                    </div>
                </div>
            
                {/* 行3：右寄せ */}
                <div className={`${style.worriesRow} ${style.worriesRowRight}`}>
                    <div className={style.worriesContent}>
                    <div className={style.worriesBubbles}>
                    <p className={style.worriesBubble}>子どもが免許取得し駐車スペースが足りなくなった</p>
                    <p className={style.worriesBubble}>雑草やメンテナンスの手間を減らしたい</p>
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
                    <p className={style.worriesBubble}>こんな小さな仕事でも対応してくれるかな</p>
                    </div>
                    </div>
                </div>
            
                {/* 締めコピー */}
                <div className={style.worriesClosing}>
                    <p>
                    <span className={style.worriesClosingAccent}>その悩みエイトカンパニーが解決します！</span>
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
                            {faqList.map((item) => (
                                <Accordion.Item key={item.key} className={style.item_faq} eventKey={item.key}>
                                    <Accordion.Header>
                                        <div className={style.q_logo}>Q</div>
                                        <div className={style.q_title}>{item.q}</div>
                                    </Accordion.Header>
                                    <Accordion.Body className={style.q_content}>
                                        <div className={style.q_logo}>A</div>
                                        {/* 改行タグが含まれる場合、単純な文字列展開だとタグがエスケープされる場合があります */}
                                        <div className={style.q_title} dangerouslySetInnerHTML={{ __html: item.a }} />
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
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
                        id
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