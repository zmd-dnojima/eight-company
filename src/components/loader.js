import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

//framer-motion
import { motion, useAnimate, useMotionValueEvent, useScroll, useInView, easeIn } from "framer-motion"
import * as style from "../styles/common.module.scss"




const Loader = (props) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = () => {
        //setLoading(false);
        setTimeout(()=>setLoading(false), 2000);
        };
        fetchData();
    }, []);

    return (
        <div className={style.loaderWrap}>
            <div className={`${style.loaderArea} ${(loading ? '' : style.inactive)}`}>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, ease: [0, 0.71, 0.22, 1] }}>
                {/* <div className={style.loaderInner}><div className={style.slogan}><img src={slogan} alt="javascript" /></div></div> */}
                </motion.div>
            </div>
        </div>
    )
}

export default Loader