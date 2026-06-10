import React from "react"
import { graphql, Link } from "gatsby"

const TagList = ({ data, pageContext }) => {
  const { tagName } = pageContext
  const posts = data.allMicrocmsBlog.edges

  return (
    <div>
      <h1>タグ: 「{tagName}」 の記事一覧</h1>
      
      <div className="blog-grid">
        {posts.length === 0 ? (
          <p>該当する記事がありません。</p>
        ) : (
          posts.map(({ node }) => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
              </h2>
              <p>{node.date}</p>
            </article>
          ))
        )}
      </div>
      
      <Link to="/blog">ブログ一覧へ戻る</Link>
    </div>
  )
}

// gatsby-node.js の context から受け取った tagId で記事を絞り込み（filter）します
export const query = graphql`
  query tagListQuery($tagId: String!) {
    allMicrocmsBlog(
      filter: { tags: { elemMatch: { id: { eq: $tagId } } } }
      sort: { fields: date, order: DESC }
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

export default TagList