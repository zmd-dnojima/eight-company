import React, { useState, useMemo } from "react"
import { graphql, Link } from "gatsby"
import { useLocation } from "@reach/router"
import queryString from 'query-string'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../styles/articles.module.scss"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

const Blog = (props) => {
    // 状態管理
    const [selectedTag, setSelectedTag] = useState("すべて");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;

    // データ加工（重複を防ぎ、フィルタリングとページネーションを統合）
    const { filteredPosts, pageCount, allTags } = useMemo(() => {
        const allPosts = props.data.allMicrocmsBlog.edges;
        
        // 1. タグによる絞り込み
        let filtered = allPosts;
        if (selectedTag !== "すべて") {
            filtered = allPosts.filter(edge => 
                edge.node.tags?.some(tag => tag.name === selectedTag)
            );
        }

        // 2. 全タグの抽出（ボタン用）
        const tags = ["すべて", ...new Set(allPosts.flatMap(e => e.node.tags?.map(t => t.name) || []))];

        // 3. ページネーション計算
        const pageCount = Math.ceil(filtered.length / postsPerPage);
        const start = (currentPage - 1) * postsPerPage;
        const slicedPosts = filtered.slice(start, start + postsPerPage);

        return { filteredPosts: slicedPosts, pageCount, allTags: tags };
    }, [selectedTag, currentPage, props.data.allMicrocmsBlog.edges]);

    const getShortText = (htmlContent, maxLength = 30) => {
        const textOnly = htmlContent.replace(/<[^>]*>?/gm, '');
        return textOnly.length <= maxLength ? textOnly : textOnly.substring(0, maxLength) + '...';
    };
    
    return (
        <Layout>
            <Seo title="株式会社エイトカンパニー" description="株式会社エイトカンパニー | 記事一覧ページです" />
            <div className={style.main}>
                <section className={style.subVisual}>
                    <div className={style.txtWrap}>
                        <div className={style.txtArea}><span>NEWS</span><br/>お知らせ&施工事例一覧</div>
                    </div>
                </section>

                <div className={style.contentWrap}>
                    {/* タグボタンエリア */}
                    <div className={style.tagFilter}>
                        {allTags.map(tag => (
                            <button key={tag} onClick={() => { setSelectedTag(tag); setCurrentPage(1); }}>
                                {tag}
                            </button>
                        ))}
                    </div>

                    <div className={style.blogArea}>  
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((novel) => (
                                <Link to={'../blog/' + novel.node.blogId} key={novel.node.blogId}>
                                    <div className={style.blogCard}>                            
                                        <div className={style.blogImgWrapper}>
                                            <div className={style.blogImgContent}>
                                                <img src={novel.node.thumbnail.url} alt={novel.node.title} className={style.cardImg} />
                                            </div>
                                        </div>
                                        <div className={style.blogTxtArea}>
                                            <div className={style.blogTitle}>{novel.node.title}</div>
                                            <div className={style.blogDate}>{dayjs(novel.node.date).tz().format("YYYY年MM月DD日")}</div>
                                            <div className={style.blogContent}>{getShortText(novel.node.content, 10)}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>該当する記事はありません。</p>
                        )}
                    </div>

                    {/* ページネーション */}
                    <div className={style.pagination}>
                        {[...Array(pageCount)].map((_, i) => (
                            <button key={i} onClick={() => setCurrentPage(i + 1)} disabled={currentPage === i + 1}>
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog

export const query = graphql` 
    query MyQuery {
        allMicrocmsBlog(sort: { fields: [createdAt], order: DESC }) {
            edges {
                node {
                    date
                    blogId
                    content
                    title
                    tags { id name }
                    thumbnail { url }
                }
            }
        }
    }
`