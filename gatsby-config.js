require('global-agent/bootstrap')

module.exports = {
  polyfill: false,
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'POKEMON',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'pokemon',
        // Url to query from
        url: 'https://graphql-pokemon.now.sh/'
      }
    }
  ]

}
