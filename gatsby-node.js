const path = require('path')
const { POKEMON_TYPES } = require('./src/constants')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const PokemonList = path.resolve('./src/templates/PokemonList.js')
  const SinglePokemon = path.resolve('./src/templates/SinglePokemon.js')

  return graphql(
    `
    {
      pokemon {
        pokemons(first: 151) {
          name
          weaknesses
          types
          resistant
          image
          maxCP
          maxHP
          evolutions {
            image
            name
            types
          }
        }
      }
    }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { data: { pokemon: { pokemons: pokemonList } } } = result

    createPage({
      path: '/',
      component: PokemonList,
      context: {
        data: pokemonList
      }
    })

    POKEMON_TYPES.forEach(type => {
      createPage({
        path: `/${type.toLowerCase()}`,
        component: PokemonList,
        context: {
          data: pokemonList.filter(pokemon => pokemon.types.includes(type))
        }
      })
    })
    pokemonList.forEach(pokemon => {
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
