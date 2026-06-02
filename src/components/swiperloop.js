import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"


//swiper
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Keyboard, FreeMode } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css/bundle'
import "swiper/swiper.min.css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import * as style from "../styles/swiperLoop.module.scss"

import p1 from "../images/loopImg/s1.jpg"  
import p2 from "../images/loopImg/s2.jpg"  
import p3 from "../images/loopImg/s3.jpg"  
import p4 from "../images/loopImg/s4.jpg"
import p5 from "../images/loopImg/s5.jpg"  
import p6 from "../images/loopImg/s6.jpg"  
import p7 from "../images/loopImg/s7.jpg"  
import p8 from "../images/loopImg/s8.jpg"  
import p9 from "../images/loopImg/s9.jpg"  
import p10 from "../images/loopImg/s10.jpg"  

const SLIDES = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const SwiperLoop = (props) => {

    return (
        <div className={style.swiperWrap}>
            <Swiper
                modules={[Autoplay, FreeMode]}
                loop={true}
                slidesPerView={4}
                spaceBetween={0}
                breakpoints={{
                768: { slidesPerView: 6, spaceBetween: 0 },
                }}
                freeMode={{
                enabled: true,
                momentum: false,  // 慣性をオフにして一定速度を保つ
                }}
                autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                }}
                speed={5000}
                allowTouchMove={false}
                className={style.swiperloop}
            >
            {[...SLIDES, ...SLIDES, ...SLIDES].map((src, i) => (
                <SwiperSlide key={i}>
                    <img src={src} alt="" />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}

export default SwiperLoop