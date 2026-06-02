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

import Layout from "../components/layout"
import Seo from "../components/seo"
import Loader from "../components/loader"
import SwiperLoop from "../components/swiperloop"
import * as style from "../styles/wash.module.scss"  

import logo from '../images/wash/logo.svg'
import mtitle from '../images/wash/mtitle.svg'
import tx1 from '../images/wash/tx1.svg'
import tx2 from '../images/wash/tx2.svg'
import tx3 from '../images/wash/tx3.svg'
import tx4 from '../images/wash/tx4.svg'
import tx5 from '../images/wash/tx5.svg'
import tx6 from '../images/wash/tx6.svg'
import tx7 from '../images/wash/tx7.svg'
import tx8 from '../images/wash/tx8.svg'
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
                            <img src={mvtx1} alt="javascript" className={style.mvtx1}/>
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
                    <div className={style.title_en}><img src={tx1} alt="EXTERIOR WALL CLEANING" /></div>
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
                    <div className={style.title_en}><img src={tx2} alt="EXTERIOR CLEANING" /></div>
                    <div className={style.contentWrap}>
                        <div className={style.title_jp}>エクステリア洗浄<span>とは</span></div>
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
                            <div className={style.title_en}><img src={tx3} alt="MERIT" /></div>
                            <div className={style.title_jp}>エイトの外壁洗浄</div>
                        </div>
                        <div className={style.grid_auto}>
                            
                            <div className={style.grid_item}>
                                <div className={style.grid_imgArea}><img src={merit1} alt="merit1" /></div>
                                <div className={style.sub_title}>カビ、コケ、各種菌を除去</div>
                                <div>外壁を傷めないように優しい手洗い洗浄を行いながら、除菌・殺菌効果も兼ね備えています。これにより、カビやコケ、各種菌をしっかりと除去し、清潔な外壁を保ちます。</div>
                            </div>
                            <div className={style.grid_item}>
                                <div className={style.grid_imgArea}><img src={merit2} alt="merit2" /></div>
                                <div className={style.sub_title}>塗装より圧倒的に安い</div>
                                <div>塗装に比べて圧倒的にコストが抑えられます。高額な塗装を諦める前に、まずは洗浄サービスをお試しください。</div>
                            </div>
                            <div className={style.grid_item}>
                                <div className={style.grid_imgArea}><img src={merit3} alt="merit3" /></div>
                                <div className={style.sub_title}>足場不要</div>
                                <div>通常の塗装工事と異なり、、足場を組む必要がありません。これにより、作業時間と費用の両方を節約することができます。</div>
                            </div>
                            <div className={style.grid_item}>
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
                            <div><img src={tx8} alt="ABOUT" /></div>
                            <div className={style.title_jp}>料金</div>
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
                            <div className={style.title_en}><img src={tx4} alt="BEFOREAFTER" /></div>
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

                <div className={style.cv}>
                    <div className={style.contentWrap}>
                        <div className={style.grid_2}>
                            <div className={style.grid_txtArea}>
                                <div className={style.titleWrap}>
                                    <div className={style.title_en}><img src={tx5} alt="FREE" /></div>
                                    <div className={style.sub_title}>まずはお試し！<br/>無料の外壁洗浄テスト実施中！</div>
                                </div>
                                <div><StaticImage src="../images/wash/p3.png" alt="free" placeholder="blurred" quality ={90} /></div>
                                <p>「どれくらいキレイになるの？」というお客様の声にお応えして、無料の外壁洗浄テスト（約１㎡・１５分程）を実施中です。安心してご検討いただける「キレイ体験」、ぜひお試しください！</p>
                            </div>
                            <div className={style.flow}>
                                <div className={style.flow_title}>施工の流れ</div>
                                <div className={style.flow_content}>
                                    <div className={style.flow_step_wrap}>
                                        <div className={style.flow_step}><div className={style.flow_step_icon}><p>STEP 1</p></div></div>
                                        <p className={style.flow_step_title}>お問い合わせ（写真診断あり）</p>
                                    </div>
                                    <div>お試し洗浄、お見積もり無料で行います！まずはお気軽にお問い合わせください。</div>
                                    <div className={style.ctaWrap}>
                                        <div className={`${style.hdr_btn} ${style.btn_line}`}><a href="https://lin.ee/hcoA4qn" target="_blank"><FontAwesomeIcon icon={faLine} size="1x"/><span> LINE</span></a></div>
                                        <div className={`${style.hdr_btn} ${style.btn_phone}`}><a href="tel:070-3815-0008" target="_blank"><FontAwesomeIcon icon={faPhone} size="1x"/><span> 電話</span></a></div>
                                        {/* <div className={`${style.hdr_btn} ${style.btn_mail}`}><Link to="/contact" className={`${(location.pathname == "/contact/" ? style.selected : '')}`}><FontAwesomeIcon icon={faEnvelope} size="1x"/><span> メール</span></Link></div> */}
                                    </div>
                                    <div className={style.flow_step_wrap}>
                                        <div className={style.flow_step}><div className={style.flow_step_icon}><p>STEP 2</p></div></div>
                                        <p className={style.flow_step_title}>現地調査・お試し施工（1㎡程度）</p>
                                    </div>
                                    <div>現地にお伺いし、外壁の状況を調査します。お試し施工を行い、汚れがドコまで落ちるか体験していただけます。</div>
                                    <div className={style.flow_step_wrap}>
                                        <div className={style.flow_step}><div className={style.flow_step_icon}><p>STEP 3</p></div></div>
                                        <p className={style.flow_step_title}>見積書発行・ご契約</p>
                                    </div>
                                    <div>お見積内容にご納得いただけましたらご契約後、施工日を確定いたします。</div>
                                    <div className={style.flow_step_wrap}>
                                        <div className={style.flow_step}><div className={style.flow_step_icon}><p>STEP 4</p></div></div>
                                        <p className={style.flow_step_title}>施工、完了確認</p>
                                    </div>
                                    <div>施工スタッフがお伺いし、丁寧に施工実施いたします。作業完了後、完了確認をしていただいてご請求となります。作業完了後も万が一問題があれば迅速に対応させていただきますので、ご不明点やご要望がございましたら、お気軽にお知らせください。</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* <div className={style.about}>
                    <div className={style.contentWrap}>
                        <div className={style.titleWrap}>
                            <div><img src={tx6} alt="ABOUT" /></div>
                            <div className={style.title_jp}>会社概要</div>
                        </div>
                        <div className={style.grid_outline}>
                            <div className={style.grid_item}><p>事業名</p><p>外壁洗浄専門店　エイト</p></div>
                            <div className={style.grid_item}><p>代表者</p><p>饗場 秀樹</p></div>
                            <div className={style.grid_item}><p>設立</p><p>2025年◯月◯日</p></div>
                            <div className={style.grid_item}><p>事業内容</p><p>外壁洗浄・エクステリア洗浄店舗やアパート・マンションの定期洗浄</p></div>
                            <div className={style.grid_item}><p>会社住所</p><p>山梨県〇〇〇〇〇〇〇〇〇〇〇〇〇〇</p></div>
                            <div className={style.grid_item}><p>電話番号</p><p>000-0000-0000</p></div>                            
                            <div className={style.grid_item}><p>営業時間</p><p>09:00-17:00（日・祝日を除く）</p></div>
                        </div>
                    </div>
                </div> */}

                <div className={style.faq}>
                    <div className={style.contentWrap}>
                        <div className={style.titleWrap}>
                            <div className={style.title_en}><img src={tx7} alt="FAQ" /></div>
                            <div className={style.title_jp}>よくある質問</div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>対応可能エリアはどこですか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>ご住所が対応可能エリアか、お気軽にお問い合わせください。また出張無料エリア（山梨県甲府市、甲斐市、昭和町、中央市、韮崎市、笛吹市、南アルプス市）ほかは別途交通費がかかります。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>見積もりは無料ですか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>はい。見積もりごにお断りいただいてもキャンセル料などは発生いたしません。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>見積もりをお願いしたら必ず契約しないといけないのですか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>お見積もりのご依頼だけでは、必ず契約をしなければならないわけではありません。当社では、お客様と双方が納得してから初めて契約を結びます。ご不明な点がございましたら、何でもご相談ください。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>見積もり以外に追加料金が発生することはありますか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>当社では、基本的に追加料金を請求することはございません。作業中に仕様変更や新たな工事が必要となった場合は、必ずお客様にご報告し、ご相談の上でご了承をいただいてから作業を進めています。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>電話やインターネットでの見積もりはできますか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>メール、電話、公式LINEを通じて概算金額をご案内できます。正確なお見積もりは、スタッフが現場にお伺いし、汚れ具合や素材の状況を確認した上でご提供いたします。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>外壁全面ではなく、一面だけでも大丈夫ですか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>はい、外壁の一部分だけの清掃も承ります。お気軽にお問い合わせください。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>洗浄作業にはどれくらいの時間がかかりますか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>洗浄範囲によって異なりますが、作業時間はおおよそ1〜6時間程度です。詳しい時間は無料お見積もりでご案内いたしますので、お気軽にご依頼ください。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>洗浄で汚れはどこまで取れますか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>プロの技術と専用の洗剤、器材を用いて洗浄を行います。ほとんどの汚れは除去できますが、素材に深く入り込んだ汚れや、手の届きにくい箇所の汚れは完全に除去できない場合があります。詳細については、事前のお見積もり時にご説明いたします。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>外壁洗浄するタイミングはいつですか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>新築から5～8年ほど経つと、外壁に黒や緑の汚れが目立ってきます。この段階では防水性能はまだ保たれており、美観だけが損なわれていることが多いため、外壁塗装前のメンテナンスとして洗浄をおすすめします。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>外壁以外の洗浄は可能ですか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>はい、土間コンクリート、玄関タイル、ブロック塀、カーポートなどの洗浄が可能です。その他の場所についてもお気軽にご相談ください。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>換気扇の周りなどの部分的な汚れだけでもいいのですか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>部分的な汚れだけでも対応しております。1㎡から承っておりますのでお気軽にお問合せください。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>作業時の水道代はどうなりますか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>通常、お客様の水道を使用させていただくことになりますので、水道代についてはご負担いただくようお願いしております。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>作業中、在宅は必要ですか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>外壁洗浄は屋外での作業となりますので、お客様が在宅である必要はありません。ただし、お客様が不在の場合に作業を行う際には、事前にお客様のご了承を得てから作業を行います。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>雨の日でも作業はできますか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>雨の日には作業を行うことができますが、天候によっては作業が延期される場合があります。作業が雨で延期になった場合、追加の費用はかかりません。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>洗浄時、隣家などに水は飛び散るか心配です</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>念のために近隣の方へ弊社のスタッフが事前に挨拶へお伺いさせていただきます。また、施工に際しては細心の注意を払い、近隣の皆様にご迷惑がかからないよう心がけてまいります。</p></div>
                        </div>
                        <div className={style.grid_faq}>
                            <div className={style.grid_question}><p className={style.icon}>Q</p><p>施工中は、洗濯物などはどうしたらいいですか？</p></div>
                            <div className={style.grid_answer}><p className={style.icon}>A</p><p>洗濯物に関しては、施工中は部屋の中に干していただくようお願いしています。水を使用するため、家の中に水が入らないよう、すべての窓を閉めていただくようお願いいたします。万が一飛散があっては困りますので、しばらくの間、少し息苦しく感じるかもしれませんが、ご協力をお願いいたします。</p></div>
                        </div>
                        
                        
                    </div>
                </div>


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

