require('global-agent/bootstrap')

module.exports = {
  polyfill: false,
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'POKEMON',
        fieldName: 'pokemon',
        url: 'https://graphql-pokemon2.vercel.app/'
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    'gatsby-plugin-sass'
  ]

}
