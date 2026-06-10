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
      allMicrocmsTags {
        nodes {
          id
          name
        }
      }
    }
  `);

  // 【修正】まず最初にエラーがないかチェックする
  if (result.errors) {
    reporter.panicOnBuild(`GraphQLのクエリ実行時にエラーが発生しました。`, result.errors)
    return
  }

  // 【修正】データが正しく存在するかチェックする
  if (!result.data || !result.data.allMicrocmsBlog || !result.data.allMicrocmsBlog.edges) {
    reporter.warn(`microCMSから記事データが取得できなかったため、ページの生成をスキップします。`)
    return
  }

  const posts = result.data.allMicrocmsBlog.edges;

  // 1. 記事一覧ページ（ページネーション）追加
  const postsPerPage = 2; // 1ページあたりの記事数
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
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
  if (result.data.allMicrocmsTags && result.data.allMicrocmsTags.nodes) {
    const tags = result.data.allMicrocmsTags.nodes;
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
  }

  // 3. ブログ詳細ページの生成
  const blogTemplate = path.resolve(`./src/templates/single-blog.js`)

  posts.forEach((edge) => {
    // 【注目】ここの blogId が microCMS側と一致しているかチェックが入ります
    if (!edge.node || !edge.node.blogId) {
      reporter.warn(`blogId が設定されていない記事があるため、詳細ページの生成をスキップしました。`)
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