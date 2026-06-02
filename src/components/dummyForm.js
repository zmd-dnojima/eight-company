import React, { useRef } from "react"
import { graphql, Link } from "gatsby"
import * as style from "../styles/common.module.scss"
import { navigate } from "gatsby"

//google map
import EmbedMap from "../components/embedmap"
const recaptchaRef = React.createRef();
function onChange(value) {
    console.log("Captcha value:", value);
}

export default () => (

    <div className={style.contentWrap}>
        <form
        // onSubmit={ () => {navigate("/thankyou/")}}
        action="https://ssgform.com/s/RMruDkv8M5DZ"
        method="post"
        // target="hidden_iframe"
        >
            {/* <div style={{display: 'none'}}><input type="text" name="wana" /></div> */}
            <div>
                <label htmlFor="name"><span className={style.required}>必須</span>お名前</label>  
                <input id="name" type="text" name="entry.337327570" placeholder="お名前" required></input>
            </div>
            <div>
                <label htmlFor="email"><span className={style.required}>必須</span>メールアドレス</label>
                <input id="email" type="text" name="entry.232616317" placeholder="email@example.com" required></input>
            </div>
            <div>
                <label htmlFor="tel"><span className={style.required}>必須</span>電話番号</label>
                <input id="email" type="text" name="entry.1211937607" placeholder="" required></input>
            </div>

            <div>
                <label htmlFor="message"><span className={style.required}>必須</span>ご用件</label>
                <textarea
                    id="email"
                    type="text"
                    name="entry.1102438489"
                    wrap="soft"
                    placeholder="お問い合わせ内容" required>
                </textarea>
            </div>
            <div>
                <button className={style.contactButton} type="submit">お問い合わせをする</button>
            </div>
        </form>
        {/* <iframe title="hidden_iframe" name="hidden_iframe"></iframe> */}
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdPFLZFftZQor8GDOyibzNMbedPYDRkU9cWcbwnma9xTuGwWg/viewform?embedded=true" width="640" height="824" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe> */}
        
    </div>
)