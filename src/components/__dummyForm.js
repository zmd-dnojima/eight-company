import React, { useRef } from "react"
import { graphql, Link } from "gatsby"
import * as style from "../styles/sub.module.scss"
import ReCAPTCHA from "react-google-recaptcha"

//google map
import EmbedMap from "../components/embedmap"

const DummyForm = () => {
    const recaptchaRef = React.createRef();
    // const onSubmit = () => {
    //     const recaptchaValue = recaptchaRef.current.getValue();
    //     this.props.onSubmit(recaptchaValue);
    // }
    function onChange(value) {
        console.log("Captcha value:", value);
      }

    return (
        <div className={style.contentWrap}>
            <h2>アクセス</h2>
            <br/>
            <h3>一般社団法人　甲府青年会議所事務局</h3>
            <br/>
            <div className={style.outline}>
                <div className={style.materialName}>住所</div><div>〒400-0858 山梨県甲府市相生2丁目2-17 甲府商工会議所3F</div>
                <div className={style.materialName}>TEL</div><div>055-235-5423</div>
                <div className={style.materialName}>FAX</div><div>055-226-9596</div>
                <div className={style.materialName}>営業時間</div><div>平日１０時～１５時</div>
            </div>

            <div className={style.gmap} id={"access"}>
                <EmbedMap><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12967.14761647503!2d138.5696454!3d35.6576215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601bf9c4a4071a5b%3A0xb0f771b4a1e4e832!2z5LiA6Iis56S-5Zuj5rOV5Lq655Sy5bqc6Z2S5bm05Lya6K2w5omA!5e0!3m2!1sja!2sjp!4v1732688904917!5m2!1sja!2sjp" className={style.gmapInner} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></EmbedMap>
            </div>
            <br/>
            <h2>お問い合わせ</h2>
            
            <form action="https://ssgform.com/s/FYR6tpn2PBnY" method="post" enctype="multipart/form-data">
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                <div style={{display: 'none'}}><input type="text" name="wana" /></div>{/* name="wana"を見えない状態で設置 */}
                <div>
                    <label htmlFor="name"><span className={style.required}>必須</span>お名前</label>  
                    <input type="text" name="お名前" required="required" />
                </div>
                <div>
                    <label htmlFor="email"><span className={style.required}>必須</span>メールアドレス</label>
                    <input type="email" name="メールアドレス" required="required" />
                </div>
                <div>
                    <label htmlFor="tel"><span className={style.required}>必須</span>電話番号</label>
                    <input type="tel" id="電話番号" name="phone" required="required" />
                </div>

                <div>
                    <label htmlFor="message"><span className={style.required}>必須</span>ご用件</label>
                    <textarea name="message" rows="10" id="message" required="required"></textarea>
                </div>
                <div>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LekWq8qAAAAAN67lgmd3Dfwsu7bpEb_NKgP1lCd"
                    onChange={onChange}
                />
                </div>
                <div>
                    <button className={style.contactButton} type="submit">お問い合わせをする</button>
                </div>
            </form>
            
        </div>
    )
}

export default DummyForm