import { graphql, useStaticQuery } from 'gatsby';

const usePosts= ()=> {
  //could filter for certain posts
  const data = useStaticQuery(graphql`
    query{
      allMdx{
        nodes {
          excerpt
          frontmatter{
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#111111", highlight: "#f5f5f5"}
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }

  `)
  // map through the nodes, and make an array of post objects w/ all data
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  })
  )
}

export default usePosts;
