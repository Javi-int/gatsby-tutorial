module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "TutorialSite",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
