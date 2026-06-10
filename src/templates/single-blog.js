import * as React from "react"
import { useState, useEffect } from "react"
import { Link, graphql } from "gatsby" 
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/single.module.scss"

import { useLocation } from "@reach/router"
import Share from "../components/share"

 
const SingleBlog = (props) => {   
    //const tagsString = props.data.microcmsArticles.category[0].name
    const siteUrl = useLocation().href;
    const slug = useLocation().search;

    // ==========================================================================
    // 【プレビュー用の処理追加】
    // ==========================================================================
    // 1. 最初はGatsbyがビルドしたデータを初期値にする
    const [blog, setBlog] = useState(props.data.microcmsBlog)

    useEffect(() => {
        // URLのパラメータ（?previewKey=xxxx）を取得
        const searchParams = new URLSearchParams(window.location.search)
        const previewKey = searchParams.get("previewKey")

        // 🔍 【原因調査用】いまプログラムが認識している値を出力してみる
        console.log("--- プレビューデバッグ ---");
        console.log("previewKey (合言葉):", previewKey);
        console.log("blogオブジェクト全体:", blog);
        console.log("blogId (記事のID):", blog?.blogId);

        // previewKey がある場合（microCMSの画面プレビューから来た時）だけ実行
        if (previewKey && blog && blog.blogId) {
            const fetchUrl = `https://eightcompany.microcms.io/api/v1/blog/${blog.blogId}?draftKey=${previewKey}`;
            console.log("実際に叩きにいくURL:", fetchUrl);

            fetch(
                `https://eightcompany.microcms.io/api/v1/blog/${blog.blogId}?draftKey=${previewKey}`,
                {
                    headers: {
                        "X-MICROCMS-API-KEY": "JAacUj2wNeGxPP0s8LpnXImw8YqtmngM3z0J",
                    },
                }
            )
            .then((res) => {
                // 🔍 【原因調査用】microCMSからどんな返事が来たかステータスコードをログに出す
                console.log("microCMSからのレスポンス状態(status):", res.status); 
                if (!res.ok) {
                    throw new Error(`サーバーエラー: ステータスコード ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("無事に取得できた下書きデータ:", data);
                setBlog(data)
            })
            .catch((err) => console.error("エラーが発生しました:", err))
        }else{
            console.log("条件（previewKey, blog, blogId）のどれかが揃わなかったため、fetchされませんでした。");
        }
    }, [blog?.blogId])
    // ==========================================================================

    // もしデータがない場合の安全対策
    if (!blog) return null;

    return(
      <Layout>
            <Seo title={props.data.microcmsBlog.title} description={props.data.microcmsBlog.title} /> 
            <div className={style.subHeader}>
                
            </div>
            {props.data.microcmsBlog.thumbnail && (
            <div className={style.mainThumbnail}>
                {/* CSSでトリミングするので、<img>タグはそのまま */}
                <img src={props.data.microcmsBlog.thumbnail.url} alt={props.data.microcmsBlog.title} />
            </div>
            )}
            <div className={style.singlePage}>
                <div className={style.subContent}>
                    <h1 className={style.title}>{props.data.microcmsBlog.title}</h1>   
                    <div className={style.blogDate}>{`${props.data.microcmsBlog.date.substring(0, props.data.microcmsBlog.date.indexOf("T"))}`}</div>
                    <div className={style.contentInner} dangerouslySetInnerHTML={{ __html: props.data.microcmsBlog.content }} />  
                    <div className={style.backButton}><Link to={"../../articles/"}>新着情報一覧へ</Link></div>
                </div>
            </div>
        </Layout>                    
    )
}

export default SingleBlog
   
export const query = graphql` 
    query($id: String!) {
        microcmsBlog(id: { eq: $id }) {
            date
            blogId
            content
            title
            tags {
                name
            }
            thumbnail {
                url
            }
        }
    }
  `    

