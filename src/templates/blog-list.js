import React from "react"
import { graphql, Link } from "gatsby"

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMicrocmsBlog.edges
  const { currentPage, numPages } = pageContext
  
  // 前のページ、次のページのURL設定
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <div>
      <h1>ブログ記事一覧 (Page {currentPage})</h1>
      
      {/* 記事のループ表示 */}
      <div className="blog-grid">
        {posts.map(({ node }) => (
          <article key={node.id}>
            <h2>
              {/* ここで gatsby-node.js で作ったURL（/blog/blogId）と一致させます */}
              <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
            </h2>
            <p>{node.date}</p>
          </article>
        ))}
      </div>

      {/* ページネーションのボタン表示 */}
      <div className="pagination">
        {!isFirst && (
          <Link to={prevPage} rel="prev">← 前のページ</Link>
        )}
        
        {Array.from({ length: numPages }, (_, i) => (
          <Link 
            key={`page-number-${i + 1}`} 
            to={i === 0 ? "/blog" : `/blog/${i + 1}`}
            style={{ fontWeight: currentPage === i + 1 ? "bold" : "normal", margin: "0 5px" }}
          >
            {i + 1}
          </Link>
        ))}

        {!isLast && (
          <Link to={nextPage} rel="next">次のページ →</Link>
        )}
      </div>
    </div>
  )
}

// gatsby-node.js の context（limit, skip）がここに渡ってきます
export const query = graphql`
  query blogListQuery($limit: Int!, $skip: Int!) {
    allMicrocmsBlog(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          blogId
          title
          date
        }
      }
    }
  }
`

export default BlogList