import { graphql, useStaticQuery } from 'gatsby'

// our custom hook using no React, but useStaticQuery a built in gatsby hook

const useSiteMetadata = () => {
  //from the graphql playground we got this query
  //useStaticQuery expects a graphql query
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `)

  //use data this will have the title and description
  return data.site.siteMetadata
}

export default useSiteMetadata;
