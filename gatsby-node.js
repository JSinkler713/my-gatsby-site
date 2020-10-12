exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query{
      allMdx{
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }

  `)
  if (result.error) {
    reporter.panic('failed to create posts', result.errors);
  }
  //passed the errors, so assume it went well
  //
  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    actions.createPage({
      //try something here
      path:'/blog/' + post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        //because we set slug in context
        //gatsby is going to set a slug variable in graphql
        //with this value
        slug: post.frontmatter.slug
      },
    })
  })

}
