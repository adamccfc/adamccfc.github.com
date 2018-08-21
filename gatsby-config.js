module.exports = {
  siteMetadata: {
    title: 'Adam Morgan | Front end web developer',
    siteUrl: `http://www.adammorgan.wales`,
    description: `Front end web developer from Mountain Ash, South Wales.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:400,700,900`,
          `merriweather\:400,400i,700,700i`
        ]
      }
    }
  ],
}
