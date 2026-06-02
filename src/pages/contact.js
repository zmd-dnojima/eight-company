import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {HashLink} from 'react-router-hash-link'
import DummyForm from "../components/dummyForm"
import * as style from "../styles/common.module.scss"

const Contact = () => {
    return (
        <Layout hideContact={true}>
            <Seo title="お問い合わせ" description="外壁洗浄専門店エイト｜お問い合わせページです。" />
            <div className={style.subHeader}>
                <p>お問い合わせ</p>
            </div>
            <DummyForm/>
            
        </Layout>
    )
}

export default Contact