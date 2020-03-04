const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const pokemonList = path.resolve('./src/templates/PokemonList.js')
  const SinglePokemon = path.resolve('./src/templates/SinglePokemon.js')

  return graphql(
      `
      {
        pokemon {
          pokemons(first: 600) {
            image
            name
            evolutions {
              image
            }
            weight {
              minimum
              maximum
            }
            evolutionRequirements {
              amount
              name
            }
          }
        }
      }
      `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log(result.data)
    createPage({
      path: '/',
      component: pokemonList,
      context: {
        data: result.data.pokemon.pokemons
      }
    })
    result.data.pokemon.pokemons.forEach(pokemon => {
      createPage({
        path: `/${pokemon.name.toLowerCase()}`,
        component: SinglePokemon,
        context: {
          data: pokemon
        }
      })
    })
  })
}
