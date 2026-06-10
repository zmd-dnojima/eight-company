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

//bootstrap
//import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPhone,faPlus,faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope,faUser } from "@fortawesome/free-regular-svg-icons"
import { faLine, faInstagram } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Loader from "../components/loader"
import SwiperLoop from "../components/swiperloop"
import * as style from "../styles/wash.module.scss"  

import logo from '../images/wash/logo.svg'
import home1 from '../images/wash/home_1.svg'
import home2 from '../images/wash/home_2.svg'
import home3 from '../images/wash/home_3.svg'
import merit1 from '../images/wash/m1.svg'
import merit2 from '../images/wash/m2.svg'
import merit3 from '../images/wash/m3.svg'
import merit5 from '../images/wash/m5.svg'
import sbn1 from '../images/wash/sbn1.svg'
import sbn2 from '../images/wash/sbn2.svg'
import mvtx1 from '../images/wash/mvtx1.svg'
import mvtx2 from '../images/wash/mvtx2.svg'

import free from '../images/wash/p3.png'
import f1 from "../images/wash/flow1.svg"
import f2 from "../images/wash/flow2.svg"
import f3 from "../images/wash/flow3.svg"
import f4 from "../images/wash/flow4.svg"

const faqList = [
    { q: "対応可能エリアはどこですか？", a: "ご住所が対応可能エリアか、お気軽にお問い合わせください。また出張無料エリア（山梨県甲府市、甲斐市、昭和町、中央市、韮崎市、笛吹市、南アルプス市）ほかは別途交通費がかかります。" },
    { q: "見積もりは無料ですか？", a: "はい。見積もりごにお断りいただいてもキャンセル料などは発生いたしません。" },
    { q: "見積もりをお願いしたら必ず契約しないといけないのですか？", a: "お見積もりのご依頼だけでは、必ず契約をしなければならないわけではありません。当社では、お客様と双方が納得してから初めて契約を結びます。ご不明な点がございましたら、何でもご相談ください。" },
    { q: "見積もり以外に追加料金が発生することはありますか？", a: "当社では、基本的に追加料金を請求することはございません。作業中に仕様変更や新たな工事が必要となった場合は、必ずお客様にご報告し、ご相談の上でご了承をいただいてから作業を進めています。" },
    { q: "電話やインターネットでの見積もりはできますか？", a: "メール、電話、公式LINEを通じて概算金額をご案内できます。正確なお見積もりは、スタッフが現場にお伺いし、汚れ具合や素材の状況を確認した上でご提供いたします。" },
    { q: "外壁全面ではなく、一面だけでも大丈夫ですか？", a: "はい、外壁の一部分だけの清掃も承ります。お気軽にお問い合わせください。" },
    { q: "洗浄作業にはどれくらいの時間がかかりますか？", a: "洗浄範囲によって異なりますが、作業時間はおおよそ1〜6時間程度です。詳しい時間は無料お見積もりでご案内いたしますので、お気軽にご依頼ください。" },
    { q: "洗浄で汚れはどこまで取れますか？", a: "プロの技術と専用の洗剤、器材を用いて洗浄を行います。ほとんどの汚れは除去できますが、素材に深く入り込んだ汚れや、手の届きにくい箇所の汚れは完全に除去できない場合があります。詳細については、事前のお見積もり時にご説明いたします。" },
    { q: "外壁洗浄するタイミングはいつですか？", a: "新築から5～8年ほど経つと、外壁に黒や緑の汚れが目立ってきます。この段階では防水性能はまだ保たれており、美観だけが損なわれていることが多いため、外壁塗装前のメンテナンスとして洗浄をおすすめします。" },
    { q: "外壁以外の洗浄は可能ですか？", a: "はい、土間コンクリート、玄関タイル、ブロック塀、カーポートなどの洗浄が可能です。その他の場所についてもお気軽にご相談ください。" },
    { q: "換気扇の周りなどの部分的な汚れだけでもいいのですか？", a: "部分的な汚れだけでも対応しております。1㎡から承っておりますのでお気軽にお問合せください。" },
    { q: "作業時の水道代はどうなりますか？", a: "通常、お客様の水道を使用させていただくことになりますので、水道代についてはご負担いただくようお願いしております。" },
    { q: "作業中、在宅は必要ですか？", a: "外壁洗浄は屋外での作業となりますので、お客様が在宅である必要はありません。ただし、お客様が不在の場合に作業を行う際には、事前にお客様のご了承を得てから作業を行います。" },
    { q: "雨の日でも作業はできますか？", a: "雨の日には作業を行うことができますが、天候によっては作業が延期される場合があります。作業が雨で延期になった場合、追加の費用はかかりません。" },
    { q: "洗浄時、隣家などに水は飛び散るか心配です", a: "念のために近隣の方へ弊社のスタッフが事前に挨拶へお伺いさせていただきます。また、施工に際しては細心の注意を払い、近隣の皆様にご迷惑がかからないよう心がけてまいります。" },
    { q: "施工中は、洗濯物などはどうしたらいいですか？", a: "洗濯物に関しては、施工中は部屋の中に干していただくようお願いしています。水を使用するため、家の中に水が入らないよう、すべての窓を閉めていただくようお願いいたします。万が一飛散があっては困りますので、しばらくの間、少し息苦しく感じるかもしれませんが、ご協力をお願いいたします。" },
];

const flowSteps = [
        {
            step: "STEP 1",
            icon:f1,
            title: "お問い合わせ",
            desc: "お試し洗浄、お見積もり無料で行います！お写真での診断もございます。まずはお気軽にお問い合わせください。"
        },
        {
            step: "STEP 2",
            icon:f2,
            title: "現地調査・お試し施工",
            desc: "現地にお伺いし、外壁の状況を調査します。1㎡程度でお試し施工を行い、汚れがドコまで落ちるか体験していただけます。"
        },
        {
            step: "STEP 3",
            title: "見積書発行・ご契約",
            icon:f3,
            desc: "お見積内容にご納得いただけましたらご契約後、施工日を確定いたします。"
        },
        {
            step: "STEP 4",
            title: "施工、完了確認",
            icon:f4,
            desc: "施工スタッフがお伺いし、丁寧に施工実施いたします。作業完了後、完了確認をしていただいてご請求となります。作業完了後も万が一問題があれば迅速に対応させていただきますので、ご不明点やご要望がございましたら、お気軽にお知らせください。"
        }
    ];



const Index = (props) => {
    const location = useLocation()
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    
    return (
        
        <Layout hideContact={true}>
            
            <Seo title="外壁洗浄専門店エイト" description="外壁洗浄専門店エイト | ホーム" />
            {/* <Loader /> */}
            <div className={style.main}>


                <div className={style.mainVisual}>
                    <div className={style.sbn1}><img src={sbn1} alt="javascript" /></div>
                    <div className={style.sbn2}><img src={sbn2} alt="javascript" /></div>
                    <div className={style.contentWrap}>
                    <div className={style.mainInner}>
                        
                        <div className={style.txtArea}>
                            <div className={style.mvtx2}><img src={mvtx2} alt="javascript" /></div>
                            <div className={style.mvname}>外壁洗浄専門店 エイト</div>
                        </div>
                        <div className={style.logo}>
                            {/* <img src={mvtx1} alt="javascript" className={style.mvtx1}/> */}
                            <img src={logo} alt="javascript" />
                        </div>
                    </div>
                    </div>
                </div>

                <div className={style.usp}>
                    <div className={style.contentWrap}>
                        <h3>試し洗浄、お見積もり無料で行います！</h3>
                        <div className={style.ctaWrap}>
                            <div className={`${style.hdr_btn} ${style.btn_line}`}><a href="https://lin.ee/hcoA4qn" target="_blank"><FontAwesomeIcon icon={faLine} size="1x"/><span> LINEで友達登録</span></a></div>
                            <div className={`${style.hdr_btn} ${style.btn_phone}`}><a href="tel:070-3815-0008"><FontAwesomeIcon icon={faPhone} size="1x"/><span> 電話</span></a></div>
                            {/* <div className={`${style.hdr_btn} ${style.btn_mail}`}><Link to="/contact" className={`${(location.pathname == "/contact/" ? style.selected : '')}`}><FontAwesomeIcon icon={faEnvelope} size="1x"/><span> メールフォーム</span></Link></div> */}
                        </div>
                    </div>
                </div>
    


                <div className={style.feature01}>
                    <div className={style.ab_home_1}><img src={home1} alt="home" /></div>
                    {/* <div className={style.title_en}><img src={tx1} alt="EXTERIOR WALL CLEANING" /></div> */}
                    <div className={style.contentWrap}>
                        <div className={style.title_jp}>外壁洗浄<span>とは</span></div>
                        <div className={style.grid_2}>
                            <div className={style.grid_imgArea}><StaticImage src="../images/wash/p1.png" alt="beforeAfter" placeholder="blurred" quality ={90} /></div>
                            <div className={style.grid_txtArea}>
                                
                                <p className={style.sub_title}>気になる外壁の<span>汚れやカビ</span>...解決策は塗装だけだと思っていませんか？</p>
                                <p>外壁は新築から5年も経過すると、カビやコケ、藻などで黒ずんだり緑色の汚れが目立ってきます。塗装の塗り替えをしなくても、<span>洗浄だけで驚くほど美しくよみがえります。</span>特に塗り壁などの仕上げ材は汚れがっきやすいため、定期的な「洗浄」で常に清潔で美しい状態を維持することが重要です。
経験豊富なスタッフが、専門的な技術と最新の設備を使用して、外壁の汚れやカビを<span>早く！安く！きれいに！</span>除去します。外壁を傷めない優しい手洗い洗浄を実施しているため、建物に優しいケアを提供します。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.feature02}>
                    <div className={style.ab_home_2}><img src={home2} alt="home" /></div>
                    <div className={style.ab_home_3}><img src={home3} alt="home" /></div>
                    {/* <div className={style.title_en}><img src={tx2} alt="EXTERIOR CLEANING" /></div> */}
                    <div className={style.contentWrap}>
                        <div className={style.titleWrap}>
                            <div className={style.title_en}>Exterior Cleaning</div>
                            <div className={style.title_jp}>エクステリア洗浄とは</div>
                        </div>
                        <div className={style.grid_2}>
                            
                            <div className={style.grid_txtArea}>
                                <p className={style.sub_title}>高圧洗浄で<span>エクステリアもピカピカに</span></p>
                                <p>エクステリア（外構）の洗浄も承ります。お庭や玄関アプローチ、駐車場、バルコニー/テラス、カーポートなど、外観全体を美しく保っために、細部まで丁寧に洗浄します。
プロの技術と経験を活かし、エクステリアの美しさを引き出します。</p>
                            </div>
                            <div className={style.grid_imgArea}><StaticImage src="../images/wash/p2.png" alt="beforeAfter" placeholder="blurred" quality ={90} /></div>
                        </div>
                    </div>
                </div>

                <div className={style.merit}>
                    <div className={style.contentWrap}>
                        <div className={style.titleWrap}>
                            <div className={style.title_en}>Merit</div>
                            <div className={style.title_jp}>エイトの外壁洗浄</div>
                        </div>
                        <div className={style.grid_auto}>
                            
                            <div className={style.featureCard}>
                                <div className={style.grid_imgArea}><img src={merit1} alt="merit1" /></div>
                                <div className={style.sub_title}>カビ、コケ、各種菌を除去</div>
                                <div>外壁を傷めないように優しい手洗い洗浄を行いながら、除菌・殺菌効果も兼ね備えています。これにより、カビやコケ、各種菌をしっかりと除去し、清潔な外壁を保ちます。</div>
                            </div>
                            <div className={style.featureCard}>
                                <div className={style.grid_imgArea}><img src={merit2} alt="merit2" /></div>
                                <div className={style.sub_title}>塗装より圧倒的に安い</div>
                                <div>塗装に比べて圧倒的にコストが抑えられます。高額な塗装を諦める前に、まずは洗浄サービスをお試しください。</div>
                            </div>
                            <div className={style.featureCard}>
                                <div className={style.grid_imgArea}><img src={merit3} alt="merit3" /></div>
                                <div className={style.sub_title}>足場不要</div>
                                <div>通常の塗装工事と異なり、、足場を組む必要がありません。これにより、作業時間と費用の両方を節約することができます。</div>
                            </div>
                            <div className={style.featureCard}>
                                <div className={style.grid_imgArea}><img src={merit5} alt="merit5" /></div>
                                <div className={style.sub_title}>騒⾳/⾶散がない</div>
                                <div>⾼圧洗浄機を使⽤しないため近隣への⾶散や騒⾳の⼼配はありません。</div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className={style.price}>
                    <div className={style.contentWrap}>
                        <div className={style.titleWrap}>
                            <div className={style.title_en}>Price</div>
                            <div className={style.title_jp}>料金例</div>
                        </div>
                        <div className={style.price_title}>外壁洗浄</div>
                        <div className={style.grid_2}>
                            <div className={style.price_1}><p>基本料金</p><p className={style.price_number}>¥2,980</p></div>
                            <div className={style.price_plus}><p><FontAwesomeIcon icon={faPlus} size="2x"/></p></div>
                            <div className={style.price_2}><p>外壁洗浄（足場なし）</p><p className={style.price_number}>¥850〜/㎡</p></div>
                            
                        </div>
                        <div className={style.price_ex}>
                            <div><p>例 1：50㎡の外壁1面クリーニングの場合（45,480円+税）</p></div>
                            <div><p>例 2：120㎡の外壁4面クリーニングの場合（104,980円+税）</p></div>
                        </div>
                        <div className={style.price_title}>エクステリア洗浄</div>
                        <div className={style.grid_2}>
                            
                            <div className={style.price_1}><p>基本料金</p><p>¥2,980</p></div>
                            <div className={`${style.price_plus} ${style.price_plus_2}`}><p><FontAwesomeIcon icon={faPlus} size="2x"/></p></div>
                            <div className={style.price_3}>
                                <div>バルコニー床<span>¥400〜/㎡</span></div>
                                <div>玄関アプローチ<span>¥500〜/㎡</span></div>
                                <div>駐車場<span>¥500〜/㎡</span></div>
                                <div>塀<span>¥500〜/㎡</span></div>
                                <div>玄関タイル<span>¥600〜/㎡</span></div>
                                <div>カーポート<span>¥1,000〜/㎡</span></div>
                                <div>ソーラーパネル<span>¥1,000〜/㎡</span></div>
                                <div>その他部分洗浄<span>応相談</span></div>
                            </div>
                        </div>
                        <div className={style.price_ex}>
                            <div><p>例 1：駐車場車3台分45㎡の場合（25,480円+税）</p></div>
                            <div><p>例 2：バルコニー・ベランダ 16㎡の場合（9,380円+税）</p></div>
                        </div>
                    </div>
                </div>

                <div className={style.bf}>
                    <div className={style.contentWrap}>
                        <div className={style.titleWrap}>
                            <div className={style.title_en}>Before & After</div>
                            <div className={style.title_jp}>施工事例</div>
                        </div>
                        <div className={style.bfSlide}>
                            <Swiper
                                // initialSlide={1}
                                loop={true}
                                centeredSlides={true}
                                centerInsufficientSlides={true}
                                modules={[Autoplay,Navigation, Thumbs]}
                                // navigation={{ clickable: true }}
                                slidesPerView={1.3}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                            >
                                <SwiperSlide><StaticImage src="../images/wash/bf1.jpg" alt="bf1" placeholder="blurred" quality ={90} /></SwiperSlide>
                                <SwiperSlide><StaticImage src="../images/wash/bf2.jpg" alt="bf2" placeholder="blurred" quality ={90} /></SwiperSlide>
                                <SwiperSlide><StaticImage src="../images/wash/bf3.jpg" alt="bf3" placeholder="blurred" quality ={90} /></SwiperSlide>
                                <SwiperSlide><StaticImage src="../images/wash/bf1.jpg" alt="bf1" placeholder="blurred" quality ={90} /></SwiperSlide>
                                <SwiperSlide><StaticImage src="../images/wash/bf2.jpg" alt="bf2" placeholder="blurred" quality ={90} /></SwiperSlide>
                                <SwiperSlide><StaticImage src="../images/wash/bf3.jpg" alt="bf3" placeholder="blurred" quality ={90} /></SwiperSlide>
                            </Swiper>

                        </div>
                        <div className={`${style.hdr_btn} ${style.btn_phone}`}><a href="https://www.instagram.com/gaiheki.eight8/?igsh=MWhrZm00aDNzaWN2NQ%3D%3D#" target="_blank"><FontAwesomeIcon icon={faInstagram} size="1x"/><span> 最新の施工事例はInstagramで</span></a></div>
                    </div>
                </div>

                <section className={style.flow}>
                    <div className={style.contentWrap}>
                        <div className={style.titleWrap}>
                            <div className={style.title_en}>FLOW</div>
                            <div className={style.title_jp}>施工の流れ</div>
                        </div>
                        <div className={style.flowTimeline}>
                            {flowSteps.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className={style.flowCard}>
                                        <div className={style.flowCardInner}>
                                            <div className={style.flowIconZone}>
                                                <div className={style.flowIconWrapper}>
                                                    <img src={item.icon} alt={`${item.title}のアイコン`} />
                                                </div>
                                            </div>
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

                <section className={style.cv}>
                    <div className={style.contentWrap}>
                        <div className={style.title_en}>FREE</div>
                        <div className={style.gridArea}>                    
                            <div className={style.grid_img}>
                                <img src={free} alt="無料" />
                            </div>
                            <div className={style.grid_txt}>
                                <div className={style.titleWrap}>
                                    <div className={style.title_jp}>まずはお試し！<br/><span>無料の外壁洗浄テスト実施中！</span></div>
                                    
                                </div>
                                <p>「どれくらいキレイになるの？」というお客様の声にお応えして、無料の外壁洗浄テスト（約１㎡・１５分程）を実施中です。安心してご検討いただける「キレイ体験」、ぜひお試しください！</p>
                                <div className={style.contactBox}>
                                    <div className={style.contactPhoneZone}>
                                        <a href="tel:0551-30-9062" className={style.phoneLink}>
                                            <FontAwesomeIcon icon={faPhone} className={style.phoneIcon} />
                                            <span className={style.phoneNumber}>0551-30-9062</span>
                                        </a>
                                        <p className={style.businessHours}>受付時間: 08:30-17:30</p>
                                    </div>
        
                                    <div className={style.contactMailZone}>
                                        <Link to="/contact/" className={style.mailButton}>
                                            <FontAwesomeIcon icon={faEnvelope} className={style.mailIcon} />
                                            <span>お問い合わせ</span>
                                        </Link>
                                        <Link to="https://lin.ee/hcoA4qn" target="_blank" className={`${style.drawerSnsBtn} ${style.snsLine}`}>
                                            <FontAwesomeIcon icon={faLine} />
                                            <span>LINE</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                

                <section className={style.faqSection}>
                    <div className={style.inner_faq}>

                        <div className={style.titleWrap}>
                            <div className={style.title_en}>FAQ</div>
                            <div className={style.title_jp}>よくある質問</div>
                        </div>

                        <Accordion>
                            {faqList.map((item, index) => (
                                <Accordion.Item key={item.key} className={style.item_faq} eventKey={index.toString()}>
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


                {/* <div className={style.cardWrap}>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/wash/banner1.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/wash/banner2.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/wash/banner3.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/wash/banner4.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                    <div className={style.img}><Link to="/"><StaticImage src="../images/wash/banner5.jpg" alt="バナー" placeholder="blurred" quality ={90} /></Link></div>
                </div> */}

            </div>{/* </main> */}
        </Layout>
    )
}

export default Index

