const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
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
      allMicrocmsTag {
        nodes {
          id
          name
        }
      }
    }
  `);

  // ページネーション追加
  const posts = result.data.allMicrocmsBlog.edges;
  const postsPerPage = 2; // 1ページあたりの記事数
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`, // 1ページ目は /blog, それ以降は /blog/2...
      component: path.resolve('./src/templates/blog-list.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
  // 2. タグごとのページ生成
  const tags = result.data.allMicrocmsTag.nodes;
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.name}`,
      component: path.resolve('./src/templates/tag-list.js'),
      context: {
        tagId: tag.id,
        tagName: tag.name,
      },
    });
  });

  if (result.errors) {
    reporter.panicOnBuild(`GraphQLのクエリ実行時にエラーが発生しました。`, result.errors)
    return
  }

  if (!result.data || !result.data.allMicrocmsBlog || !result.data.allMicrocmsBlog.edges) {
    reporter.warn(`microCMSから記事データが取得できなかったため、詳細ページの生成をスキップします。`)
    return
  }

  const blogEdges = result.data.allMicrocmsBlog.edges
  const blogTemplate = path.resolve(`./src/templates/single-blog.js`)

  blogEdges.forEach((edge) => {
    if (!edge.node || !edge.node.blogId) {
      reporter.warn(`blogId が設定されていない記事があるため、該当ページの生成をスキップしました。`)
      return
    }

    createPage({
      path: `/blog/${edge.node.blogId}/`, 
      component: blogTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })
}