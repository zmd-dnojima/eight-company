import * as React from "react"
import { graphql, Link } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import { motion, useAnimate, useMotionValueEvent, useScroll, useInView } from "framer-motion"
//import * as Scroll from 'react-scroll'

//fontswesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faCheck,
  faXmark,
  faLightbulb,
  faUser,
  faUserTie,
  faDraftingCompass,
  faBuilding,
  faHardHat,
} from "@fortawesome/free-solid-svg-icons"

//bootstrap
//import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as style from "../styles/secondopinion.module.scss"  

import m1 from "../images/secondopinion/m1.svg";
import m2 from "../images/secondopinion/m2.svg";
import m3 from "../images/secondopinion/m3.svg";
import m4 from "../images/secondopinion/m4.svg";
import m5 from "../images/secondopinion/m5.svg";
import m1_hl from "../images/secondopinion/m1_hl.svg";
import m3_hl from "../images/secondopinion/m3_hl.svg";
import m5_hl from "../images/secondopinion/m5_hl.svg";
import m6 from "../images/secondopinion/m6.svg";
import m7 from "../images/secondopinion/m7.svg";
import m8 from "../images/secondopinion/m8.svg";
import m9 from "../images/secondopinion/m9.svg";

const AboutUs = (props) => {
    return (
        
        <Layout>
            
            <Seo title="株式会社エイトカンパニー" description="株式会社エイトカンパニー | セカンドオピニオン" />
            {/* <Loader /> */}
            <div className={style.main}>
                <section className={style.subVisual}>
                    {/* <StaticImage src="../images/top.jpg" alt="main" placeholder="blurred" quality ={90} /> */}
                    <div className={style.txtWrap}>
                        <div className={style.txtArea}><span>SECOND OPINION SERVICE</span><br/>ハウスメーカー等で<br/>外構をご検討中の皆様へ</div>
                    </div>
                </section>

                {/* ── 導入セクション ── */}
                <section className={style.introSection}>
                <div className={style.introContainer}>
                    <div className={style.introText}>
                        <h1 className={style.introHeading}>
                            その外構のお見積もり、<br /><span className={style.introHighlight}>プロが無料で読み解きます。</span>
                        </h1>
            
                        <h2 className={style.introSubheading}>
                            その外構プランは、本当にあなたの暮らしに合っていますか？
                        </h2>
            
                        <p className={style.introParagraph}>
                            すでにお手元にある見積もりや図面をもとに、第三者の外構会社が内容を確認する「外構セカンドオピニオン」。目的は、安さだけを追求することではありません。工事範囲に抜けはないか、デザインと暮らしやすさのバランスは取れているか、削ってよい部分と削ってはいけない部分はどこか
                            ── プロの視点から整理し、後悔のない決断をサポートします。
                        </p>
            
                        <p className={style.introNote}>
                            診断は無料です。まずはお気軽にお問合せ下さい。
                        </p>
            
                        <Link to="/contact" className={style.ctaButton}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>無料診断・お問い合わせはこちら</span>
                        </Link>
                    </div>
        
                    <div className={style.introImage}>
                    {/* 差し替え用: 見積書＋図面＋虫眼鏡のイラスト画像を配置 */}
                    <StaticImage
                        src="../images/secondopinion/p1.png"
                        alt="お見積もり診断イメージ"
                        placeholder="blurred"
                        quality={90}
                    />
                    </div>
                </div>
                </section>
        
                {/* ── 5つのポイント ── */}
                <section className={style.pointsSection}>
                <div className={style.pointsContainer}>
                    <h2 className={style.pointsHeading}>
                    外構セカンドオピニオンで<br  className={style.brsp}/>確認できる
                    <span className={style.pointsCountWrap}>
                        <span className={style.pointsCount}>5</span>つのポイント
                    </span>
                    </h2>
        
                    <p className={style.pointsIntro}>
                    外構セカンドオピニオンとは、すでに出ている見積書や図面をもとに、第三者の外構会社が内容を確認するサービスです。目的は「より安くできるのか」だけではなく、今の見積もりが暮らし方に合っているか、工事範囲に抜けがないかを整理することにあります。
                    </p>
        
                    <ol className={style.pointsList}>
                    <li className={style.pointItem}>
                        <span className={style.pointNumber}>1</span>
                        <span className={style.pointTitle}>適正価格の判断</span>
                        <span className={style.pointDesc}>
                        提示された金額が、内容に見合っているかをプロの目でチェック。
                        </span>
                    </li>
        
                    <li className={style.pointItem}>
                        <span className={style.pointNumber}>2</span>
                        <span className={style.pointTitle}>図面との整合性</span>
                        <span className={style.pointDesc}>
                        見積書の内容と図面に食い違いがないか、記載漏れや認識のズレがないかを確認。
                        </span>
                    </li>
        
                    <li className={style.pointItem}>
                        <span className={style.pointNumber}>3</span>
                        <span className={style.pointTitle}>暮らし方との相性</span>
                        <span className={style.pointDesc}>
                        車の出入り、玄関動線、庭の使い方、家族構成や将来的な使い方まで踏まえて、そのプランが本当に合っているかを見極める。
                        </span>
                    </li>
        
                    <li className={style.pointItem}>
                        <span className={style.pointNumber}>4</span>
                        <span className={style.pointTitle}>削減できる部分</span>
                        <span className={style.pointDesc}>
                        後から追加できるものなのか、コストダウンできるものなのかチェック。
                        </span>
                    </li>
        
                    <li className={style.pointItem}>
                        <span className={style.pointNumber}>5</span>
                        <span className={style.pointTitle}>削らない方がよい部分</span>
                        <span className={style.pointDesc}>
                        下地、排水、境界、基礎、安全に関わる部分など品質維持のために削るべきでない箇所を整理。
                        </span>
                    </li>
                    </ol>
        
                    <div className={style.pointsArrow} aria-hidden="true" />
        
                    <p className={style.pointsClosing}>
                    高いからやめる、安いところに変えるという単純な判断ではなく、
                    <br />
                    <span>何を優先すべきかを整理できることが、セカンドオピニオンの一番の価値です。</span>
                    </p>
                </div>
                </section>
        
                {/* ── フル幅の施工事例写真 ── */}
                <div className={style.fullWidthPhoto}></div>
                
        
                {/* ── 比較セクション ── */}
                <section className={style.compareSection}>
                <h2 className={style.compareHeading}>
                    ハウスメーカー／デザイン専門店と
                    <br />
                    <span>エイトカンパニーの比較</span>
                </h2>
        
                {/* COMPARE 1: 価格面 */}
                <div className={style.compareBlock}>
                    <div className={style.compareLabel}>
                    <span className={style.compareLabelNo}>COMPARE 1</span>
                    <span className={style.compareLabelTitle}>価格面</span>
                    </div>
        
                    <p className={style.compareText}>
                    ハウスメーカー経由の外構工事では、広告宣伝費や営業コストなど、工事そのものとは直接関係のない費用が価格に含まれています。また、規格から外れた「こだわり」は高額なオプション扱いになりやすく、理想を形にしようとするほど予算が膨らむ傾向があります。エイトカンパニーでは、こうした<span>中間コストを抑えることで、同じ予算でもデザインや素材によりお金をかけることができます。</span>
                    </p>
        
                    <div className={style.priceCards}>
                    {/* ハウスメーカー */}
                    <div className={style.priceCard}>
                        <div className={style.priceCardHead}>
                            <p className={style.priceCardName}>ハウスメーカー</p>
                            <p className={style.priceCardSub}>大きな展示場</p>
                        </div>
        
                        <div className={style.priceCardMargin}>
                        <p className={style.marginLabel}>中間マージンの目安</p>
                        <p className={style.marginValue}>20〜30%</p>
                        </div>
        
                        <div className={style.flowDiagram}>
                        <p className={style.flowCaption}>発注の流れ</p>
                        <div className={style.flowIcons}>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m1} alt="お客様" />
                            </span>
                            <span className={style.flowLabel}>お客様</span>
                            </div>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m2} alt="営業マン" />
                            </span>
                            <span className={style.flowLabel}>営業マン</span>
                            </div>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m3} alt="設計者" />
                            </span>
                            <span className={style.flowLabel}>設計者</span>
                            </div>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m4} alt="外構専門会社" />
                            </span>
                            <span className={style.flowLabel}>外構専門<br/>会社</span>
                            </div>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m5} alt="職人" />
                            </span>
                            <span className={style.flowLabel}>外注の職人</span>
                            </div>
                        </div>
                        </div>
        
                        <ul className={style.priceCardList}>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className={style.iconCross} />
                            <span>中間業者が多く、費用が高くなりやすい。</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className={style.iconCross} />
                            <span>担当者によって提案力に差がある。</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className={style.iconCross} />
                            <span>外構の専門性が低く、デザインの自由度が限られることがある。</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className={style.iconCross} />
                            <span>建物との統一感は出しやすいが、外構だけの細かな相談がしにくい。</span>
                        </li>
                        </ul>
                    </div>
        
                    {/* デザイン専門店 */}
                    <div className={style.priceCard}>
                        <div className={style.priceCardHead}>
                        <p className={style.priceCardName}>デザイン専門店</p>
                        <p className={style.priceCardSub}>展示場や店舗など</p>
                        </div>
        
                        <div className={style.priceCardMargin}>
                        <p className={style.marginLabel}>中間マージンの目安</p>
                        <p className={style.marginValue}>10〜25%</p>
                        </div>
        
                        <div className={style.flowDiagram}>
                        <p className={style.flowCaption}>発注の流れ</p>
                        <div className={style.flowIcons}>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m1} alt="お客様" />
                            </span>
                            <span className={style.flowLabel}>お客様</span>
                            </div>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m2} alt="営業マン" />
                            </span>
                            <span className={style.flowLabel}>営業マン</span>
                            </div>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m3} alt="設計者" />
                            </span>
                            <span className={style.flowLabel}>設計者</span>
                            </div>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m5} alt="外注の職人" />
                            </span>
                            <span className={style.flowLabel}>外注の職人</span>
                            </div>
                        </div>
                        </div>
        
                        <ul className={style.priceCardList}>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className={style.iconCross} />
                            <span>設計料や施工管理費が発生する場合がある。</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className={style.iconCross} />
                            <span>デザインと施工が別会社の場合が多く、伝達や調整に時間がかかりやすい。</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faXmark} className={style.iconCross} />
                            <span>デザインばかり優先すると予算が膨らむ。</span>
                        </li>
                        </ul>
                    </div>
        
                    {/* エイトカンパニー */}
                    <div className={`${style.priceCard} ${style.priceCardHighlight}`}>
                        <div className={style.priceCardHead}>
                        <p className={style.priceCardName}>エイトカンパニー</p>
                        <p className={style.priceCardSub}>当社</p>
                        </div>
        
                        <div className={style.priceCardMargin}>
                        <p className={style.marginLabel}>中間マージンの目安</p>
                        <p className={style.marginValue}>0%</p>
                        </div>
        
                        <div className={style.flowDiagram}>
                        <p className={style.flowCaption}>発注の流れ</p>
                        <div className={style.flowIcons}>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m1_hl} alt="お客様" />
                            </span>
                            <span className={style.flowLabel}>お客様</span>
                            </div>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m3_hl} alt="設計者" />
                            </span>
                            <span className={style.flowLabel}>設計者</span>
                            </div>
                            <div className={style.flowStep}>
                            <span className={style.flowIconCircle}>
                                <img src={m5_hl} alt="自社職人" />
                            </span>
                            <span className={style.flowLabel}>自社職人</span>
                            </div>
                        </div>
                        </div>
        
                        <ul className={style.priceCardList}>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.iconCheck} />
                            <span>中間マージンが発生しないため、コストを抑えられる。</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.iconCheck} />
                            <span>設計から施工まで一貫対応で、スムーズに進む。</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.iconCheck} />
                            <span>自社職人による高い施工品質と丁寧な仕上がり。</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.iconCheck} />
                            <span>建物との調和を考えデザイン・素材・施工まで理想をしっかり反映できる。</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
        
                {/* COMPARE 2: デザインの自由度 */}
                <div className={`${style.compareBlock} ${style.cb2}`}>
                    <div className={style.compareLabel}>
                    <span className={style.compareLabelNo}>COMPARE 2</span>
                    <span className={style.compareLabelTitle}>デザインの自由度</span>
                    </div>
        
                    <p className={style.compareText}>
                    ハウスメーカーの外構プランは、あらかじめ用意された規格やパターンの中から選ぶ形式が中心です。そのため、敷地の形状やご家族の暮らし方に細かく合わせようとすると、対応できる範囲が限られたり、規格外の要望は高額なオプション費用につながったりします。エイトカンパニーでは、<span>規格ありきではなく、敷地条件やお客様の暮らし方を起点にプランを組み立てます。</span>土地の高低差や周辺環境、家族構成やライフスタイルの変化まで踏まえながら、既製のパターンに当てはめるのではなく、一つひとつの外構に合わせた設計が可能です。結果として、見た目の美しさだけでなく、実際の使いやすさまで含めたデザインを実現できます。
                    </p>
        
                    {/* 差し替え用: 饗場さんの作成した図面画像を配置予定 */}
                    <div className={style.placeholderBox}>
                        <StaticImage
                            src="../images/secondopinion/p3.jpg"
                            alt="設計図"
                            placeholder="blurred"
                            quality={90}
                    /></div>
                </div>
        
                {/* COMPARE 3: お客様と職人の距離 */}
                <div className={`${style.compareBlock} ${style.cb3}`}>
                    <div className={style.compareLabel}>
                    <span className={style.compareLabelNo}>COMPARE 3</span>
                    <span className={style.compareLabelTitle}>お客様と職人の距離</span>
                    </div>
        
                    <p className={style.compareText}>
                    ハウスメーカーの場合、窓口となる営業担当と、実際に施工する職人が別であることがほとんどです。要望が現場に伝わるまでに間に人が入るため、細かなニュアンスが伝わりにくいこともあります。エイトカンパニーでは、お客様と実際に手を動かす職人が直接顔を合わせるため、<span>要望の伝達や現場での微調整がスムーズです。</span>
                    </p>
        
                    <div className={style.flowDiagram}>
                    <div className={style.flowIcons}>
                        <div className={style.flowStep}>
                        <span className={style.flowIconCircle}>
                            <img src={m1_hl} alt="お客様" />
                        </span>
                        <span className={style.flowLabel}>お客様</span>
                        </div>
                        <div className={style.flowStep}>
                        <span className={style.flowIconCircle}>
                            <img src={m2} alt="営業マン" />
                        </span>
                        <span className={style.flowLabel}>営業マン</span>
                        </div>
                        <div className={style.flowStep}>
                        <span className={style.flowIconCircle}>
                            <img src={m3} alt="設計者" />
                        </span>
                        <span className={style.flowLabel}>設計者</span>
                        </div>
                        <div className={style.flowStep}>
                        <span className={style.flowIconCircle}>
                            <img src={m4} alt="外構専門会社" />
                        </span>
                        <span className={style.flowLabel}>外構<br/>専門会社</span>
                        </div>
                        <div className={style.flowStep}>
                        <span className={style.flowIconCircle}>
                            <img src={m5_hl} alt="職人" />
                        </span>
                        <span className={style.flowLabel}>職人</span>
                        </div>
                    </div>
                    </div>
        
                    <div className={style.pointBox}>
                    <span className={style.pointBoxLabel}>POINT</span>
                    <p>設計から施工まで一貫対応</p>
                    </div>
                </div>
        
                {/* COMPARE 4: 浮いた予算の使い道 */}
                <div className={style.compareBlock}>
                    <div className={style.compareLabel}>
                    <span className={style.compareLabelNo}>COMPARE 4</span>
                    <span className={style.compareLabelTitle}>浮いた予算の使い道</span>
                    </div>
        
                    <p className={style.compareText}>
                    中間マージンを抑えた分の予算は、デザイン性の高い素材選びや、日々の暮らしやすさを高める工夫に充てることができます。<span>「安く抑える」のではなく、「同じ予算でどこまで理想に近づけられるか」を考えられることが、エイトカンパニーが大切にしているポイントです。</span>
                    </p>
        
                    <div className={style.budgetCards}>
                    <div className={style.budgetCard}>
                        <p className={style.budgetCardName}>ハウスメーカー</p>
                        <p className={style.budgetCardSub}>大きな展示場</p>
                        <div className={style.budgetCardValueWrap}>
                        <p className={style.budgetLabel}>外構に使える金額</p>
                        <p className={style.budgetValue}>70〜80%</p>
                        </div>
                    </div>
        
                    <div className={style.budgetCard}>
                        <p className={style.budgetCardName}>デザイン専門店</p>
                        <p className={style.budgetCardSub}>展示場や店舗など</p>
                        <div className={style.budgetCardValueWrap}>
                        <p className={style.budgetLabel}>外構に使える金額</p>
                        <p className={style.budgetValue}>75〜90%</p>
                        </div>
                    </div>
        
                    <div className={`${style.budgetCard} ${style.budgetCardHighlight}`}>
                        <p className={style.budgetCardName}>エイトカンパニー</p>
                        <p className={style.budgetCardSub}>当社</p>
                        <div className={style.budgetCardValueWrap}>
                        <p className={style.budgetLabel}>外構に使える金額</p>
                        <p className={style.budgetValue}>100%</p>
                        </div>
                    </div>
                    </div>
        
                    <div className={style.pointBox}>
                    <span className={style.pointBoxLabel}>POINT</span>
                    <p>同じ予算でもっと理想の外構を</p>
                    </div>
                </div>
                </section>
        
                {/* ── 事例集 ── */}
                <section className={style.caseSection}>
                <h2 className={style.caseHeading}>事例集</h2>
        
                {/* CASE 1 */}
                <div className={style.caseCard}>
                    <div className={style.caseCardHead}>
                    <span className={style.casePill}>CASE 1</span>
                    <p>予算オーバーで理想はあきらめかけていたケース</p>
                    </div>
        
                    <div className={style.caseCardBody}>
                    <div className={style.caseRow}>
                        <img src={m6} alt="悩み" />
                        <p>理想はあるけど予算が合わない。予算内に収まるよう諦めるしかないかなぁ。</p>
                    </div>
        
                    <div className={style.caseAnswerBox}>
                        <p className={style.caseAnswerLabel}>
                        <img src={m7} alt="bulb" /> セカンドオピニオン
                        </p>
                        <p>
                        元のプランの魅力やお客様が大切にしたい部分は残しながら、素材・商品の選び方や施工方法、全体の予算配分を職人目線で見直しました。
                        </p>
                    </div>
        
                    <div className={style.caseResultBox}>
                        <img src={m8} alt="喜び" className={style.caseResultBoxImgLeft}/>
                        <p>
                        ただ安くするために内容を削るのではなく、見た目や使い勝手を保ちながら予算を調整してもらえたことがうれしかった。諦めかけていた理想の外構を形にすることができ、相談して本当に良かった。
                        </p>
                        <img src={m9} alt="喜び" className={style.caseResultBoxImgRight}/>
                    </div>
                    </div>
                </div>
        
                {/* CASE 2 */}
                <div className={style.caseCard}>
                    <div className={style.caseCardHead}>
                    <span className={style.casePill}>CASE 2</span>
                    <p>見積もりの内訳が見えず、不安を感じていたケース</p>
                    </div>
        
                    <div className={style.caseCardBody}>
                    <div className={style.caseRow}>
                        <img src={m6} alt="悩み" />
                        <p>
                        新築に合わせてハウスメーカー経由で外構工事の見積もりを取得。総額は提示されたものの、どこにどれだけ費用がかかっているのか内訳が分かりづらく、「この金額が妥当なのか判断できない」という状態でした。
                        </p>
                    </div>
        
                    <div className={style.caseAnswerBox}>
                        <p className={style.caseAnswerLabel}>
                        <img src={m7} alt="bulb" /> セカンドオピニオン
                        </p>
                        <p>
                        図面と見積もりを照らし合わせたところ、外構工事とは直接関係のない諸経費が金額に含まれていることが判明。また、フェンスの仕様が実際の生活動線とあまり合っていない可能性も見えてきました。
                        </p>
                    </div>
        
                    <div className={style.caseResultBox}>
                         <img src={m8} alt="喜び" className={style.caseResultBoxImgLeft}/>
                        <p>
                        不要なオプションを整理し、素材のグレードを暮らし方に合わせて調整。総額を抑えながら、当初よりも使い勝手の良いプランに見直すことができました。
                        </p>
                        <img src={m9} alt="喜び" className={style.caseResultBoxImgRight}/>
                    </div>
                    </div>
                </div>
        
                {/* CASE 3 */}
                <div className={style.caseCard}>
                    <div className={style.caseCardHead}>
                    <span className={style.casePill}>CASE 3</span>
                    <p>優先順位が整理できず、削るべき部分が分からなかったケース</p>
                    </div>
        
                    <div className={style.caseCardBody}>
                    <div className={style.caseRow}>
                        <img src={m6} alt="悩み" />
                        <p>
                        見積金額が予算をやや超えており、どこを削るべきか自己判断できずにいました。「削ってはいけない部分まで削ってしまうのでは」という不安から、決断を先延ばしにしていました。
                        </p>
                    </div>
        
                    <div className={style.caseAnswerBox}>
                        <p className={style.caseAnswerLabel}>
                        <img src={m7} alt="bulb" /> セカンドオピニオン
                        </p>
                        <p>
                        工事範囲全体を精査し、後から追加・変更しやすい部分と、今のタイミングでしっかり作っておくべき部分を整理。表面的な金額だけでなく、将来的なメンテナンスコストまで含めて検討しました。
                        </p>
                    </div>
        
                    <div className={style.caseResultBox}>
                         <img src={m8} alt="喜び" className={style.caseResultBoxImgLeft}/>
                        <p>
                        「今削ってよい部分」と「今つくるべき部分」が明確になり、優先順位に納得した上で契約。予算内に収めながら、後悔のない選択ができました。
                        </p>
                        <img src={m9} alt="喜び" className={style.caseResultBoxImgRight}/>
                    </div>
                    </div>
                </div>
                </section>
              
         

            </div>{/* </main> */}
        </Layout>
    )
}

export default AboutUs

