// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
//  })
// const env = process.env.NODE_ENV || 'development';
// require('dotenv').config({path: `./.env.${env}`}); 

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

module.exports = {
  trailingSlash: "never", // 👈 これを追記（フォルダ化を禁止する魔法のオプションです）
  siteMetadata: {
    defaultTitle: `株式会社エイトカンパニー`,
    defaultDescription: `山梨県の外構・エクステリア工事を承っている専門会社です`,
    defaultImage: "src/image/social-card.png",
    siteUrl: "https://eight-company.com/",
  },
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `react-router-dom`,
    `react-router-hash-link`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://eight-company.com/`,  //変更
        sitemap: `https://eight-company.com/sitemap-index.xml`, //変更
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://eight-company.com/`, //変更
        stripQueryString: true,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: 'JAacUj2wNeGxPP0s8LpnXImw8YqtmngM3z0J',
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: 'blog', // microCMSで作ったエンドポイント名
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       `G-DQ7WR0RM2S`,
    //     ],
    //     gtagConfig: {
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     pluginConfig: {
    //       head: true,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //     },
    //   },
    // }
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
