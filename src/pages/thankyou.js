import * as React from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/common.module.scss"
// import * as style from "../styles/common.module.scss"


const Thankyou = () => {
    return(
        <Layout>
            <Seo title="お問い合わせ完了" description="株式会社エイトカンパニー | お問い合わせ完了" />
            <div className={style.main}>
            <div className={style.subHeader}>
                <p>お問い合わせありがとうございます</p>
            </div>
            <div className={style.contentWrap}>
                    <p>
                    お問い合わせありがとうございます。<br/>
                    お送り頂きました内容を確認の上、原則数日以内にに折り返しご連絡させて頂きます。<br/>
                    また、ご記入頂いたメールアドレスへ、自動返信の確認メールをお送りしております。<br/><br/>

                    しばらく経ってもメールが届かない場合は、入力頂いたメールアドレスが間違っているか、迷惑メールフォルダに振り分けられている可能性がございます。<br/><br/>
                    以上の内容をご確認の上、お手数ですがもう一度フォームよりお問い合わせ頂きますようお願い申し上げます。
                    </p>
                <div className={style.topButton}><Link to="../">トップページへ戻る</Link></div>
            </div>

            </div>
            
        </Layout>
    )
}

export default Thankyou