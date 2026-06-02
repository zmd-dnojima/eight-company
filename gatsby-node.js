const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // 1. microCMSからデータを取得する（安全に id と blogId を引っ張る）
  const result = await graphql(`
    query {
      allMicrocmsBlog {
        edges {
          node {
            id
            blogId
          }
        }
      }
    }
  `)

  // 💡 安全対策1：クエリ自体でエラーが起きたらビルドを安全に止める
  if (result.errors) {
    reporter.panicOnBuild(`GraphQLのクエリ実行時にエラーが発生しました。`, result.errors)
    return
  }

  // 💡 安全対策2：もしmicroCMSに記事が1件もない場合の防御策
  if (!result.data || !result.data.allMicrocmsBlog || !result.data.allMicrocmsBlog.edges) {
    reporter.warn(`microCMSから記事データが取得できなかったため、詳細ページの生成をスキップします。`)
    return
  }

  const blogEdges = result.data.allMicrocmsBlog.edges
  const blogTemplate = path.resolve(`./src/templates/single-blog.js`)

  blogEdges.forEach((edge) => {
    // 💡 安全対策3：管理画面で「blogId」を空っぽのまま公開してしまっている記事をスルーする
    if (!edge.node || !edge.node.blogId) {
      reporter.warn(`blogId が設定されていない記事があるため、該当ページの生成をスキップしました。`)
      return
    }

    // 2. ページを生成する
    createPage({
      // URLを「/blog/あなたの決めたID/」にする
      path: `/blog/${edge.node.blogId}/`, 
      component: blogTemplate,
      context: {
        id: edge.node.id, // single-blog.js のクエリに渡す内部システムID
      },
    })
  })
}