require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Aniket Narayan`,
    siteTitleAlt: `Aniket Narayan, Blog | Portfolio`,
    siteHeadline: `Aniket Narayn - Personal Blog, Portfolio`,
    siteUrl: `https://aniketis.online`,
    siteDescription: `A minimal portfolio and blog site for my personal use and serves as showcase to my projects and resume in this digital playground.`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@mrgooglr`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Medium`,
            url: `https://medium.com/@aniketnarayan`,
          },
          {
            name: `LinkedIn`,
            url: `https://in.linkedin.com/in/aniket-narayan-145478138`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/mrgooglr`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aniket Narayan, Blog | Portfolio`,
        short_name: `blog_portfolio`,
        description: `A minimal portfolio and blog site for my personal use and serves as showcase to my projects and resume in this digital playground.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}