module.exports = {
  siteMetadata: {
    title: 'James Sinkler Developer',
    description: 'A site powered by Gatsby and React, built by James Sinkler'
  },
  plugins: ['gatsby-plugin-emotion', 
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
   {
    resolve: 'gatsby-plugin-mdx',
    options: {
      defaultLayouts: {
        default: require.resolve('./src/components/layout.js'),
      },
      gatsbyRemarkPlugins: [
        { resolve: 'gatsby-remark-images'}
      ]
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: 'posts',
    },
  },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Poppins'
        ],
        display: 'swap'
      }
    },
  {
    resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    options: {
      prodution: true,
      disable: !process.env.ANALYZE_BUNDLE_SIZE,
      generateStatsFile: true,
      analyzerMode: 'static',
    }
  }
  ],
}
