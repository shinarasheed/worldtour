module.exports = {
  siteMetadata: {
    title: "Worldtours",
    description:
      "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
    author: "rasheedshina",
    twitterusername: "iamrasheedshina",
    image: "/static/defaultBcg.jpeg",
    siteUrl: "https://worldtours.netlify.app",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://worldtours.netlify.app",
        sitemap: "https://worldtours.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
