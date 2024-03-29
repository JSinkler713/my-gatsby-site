//import siteImage from './siteImage.png'


module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true
  },
  siteMetadata: {
    title: 'James Sinkler Developer',
    description: 'A site powered by Gatsby and React, built by James Sinkler',
    url: "https://www.jamessinkler.com",
    image: "/siteImage.png"

  },
  plugins: ['gatsby-plugin-emotion', 
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-R3ZCVWF9JL", // GA
        ],
      },
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stuff`,
        path: `static`,
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
