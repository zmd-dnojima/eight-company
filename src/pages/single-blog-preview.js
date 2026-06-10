import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/single.module.scss"
import { Link } from "gatsby"

const SingleBlogPreview = () => {
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (typeof window === "undefined") return;

        // URLから previewKey と contentId を取得する
        const searchParams = new URLSearchParams(window.location.search)
        const previewKey = searchParams.get("previewKey")
        const contentId = searchParams.get("contentId") // 💡ここがポイント

        if (previewKey && contentId) {
            fetch(`https://eightcompany.microcms.io/api/v1/blog/${contentId}?draftKey=${previewKey}`, {
                headers: {
                    "X-MICROCMS-API-KEY": "JAacUj2wNeGxPP0s8LpnXImw8YqtmngM3z0J",
                },
            })
            .then((res) => res.json())
            .then((data) => {
                setBlog(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error("プレビューデータの取得に失敗しました:", err)
                setLoading(false)
            })
        }
    }, [])

    if (loading) return <Layout><p style={{textAlign: "center", padding: "50px"}}>下書きを読み込んでいます...</p></Layout>;
    if (!blog) return <Layout><p style={{textAlign: "center", padding: "50px"}}>下書きデータが見つかりませんでした。</p></Layout>;

    return (
        <Layout>
            <Seo title={`【プレビュー】${blog.title}`} description={blog.title} /> 
            <div className={style.subHeader}></div>
            {blog.thumbnail && (
                <div className={style.mainThumbnail}>
                    <img src={blog.thumbnail.url} alt={blog.title} />
                </div>
            )}
            <div className={style.singlePage}>
                <div className={style.subContent}>
                    <h1 className={style.title}>{blog.title}</h1>   
                    {blog.date && (
                        <div className={style.blogDate}>
                            {`${blog.date.substring(0, blog.date.indexOf("T"))}`}
                        </div>
                    )}
                    <div className={style.contentInner} dangerouslySetInnerHTML={{ __html: blog.content }} />  
                    <div className={style.backButton}>
                        <Link to={"/articles/"}>新着情報一覧へ</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SingleBlogPreview