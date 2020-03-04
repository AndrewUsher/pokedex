const path = require('path')
const { POKEMON_TYPES } = require('./src/constants')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const pokemonList = path.resolve('./src/templates/PokemonList.js')
  const SinglePokemon = path.resolve('./src/templates/SinglePokemon.js')

  return graphql(
    `
    {
  pokemon {
    pokemons(first: 151) {
      attacks {
        fast {
          name
        }
        special {
          name
          type
        }
      }
      name
      weaknesses
      types
      resistant
      number
      maxCP
      image
      maxHP
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
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

    createPage({
      path: '/',
      component: pokemonList,
      context: {
        data: result.data.pokemon.pokemons
      }
    })

    POKEMON_TYPES.forEach(type => {
      createPage({
        path: `/${type.toLowerCase()}`,
        component: pokemonList,
        context: {
          data: result.data.pokemon.pokemons.filter(pokemon => pokemon.types.includes(type))
        }
      })
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
