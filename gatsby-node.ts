import { GatsbyNode } from 'gatsby'
import path from 'path'
import { POKEMON_TYPES } from './src/constants'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const { createPage } = actions

  const PokemonList = path.resolve('./src/templates/PokemonList.tsx')
  const SinglePokemon = path.resolve('./src/templates/SinglePokemon.js')

  const result = await graphql<any>(
    `
      query Pokemon {
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
  )
  if (result.errors) {
    throw result.errors
  }
  const {
    data: {
      pokemon: { pokemons: pokemonList }
    }
  } = result
  createPage({
    path: '/',
    component: PokemonList,
    context: {
      data: result.data
    }
  })

  POKEMON_TYPES.forEach((type) => {
    createPage({
      path: `/${type.toLowerCase()}`,
      component: PokemonList,
      context: {
        data: pokemonList.filter((pokemon) => pokemon.types.includes(type))
      }
    })
  })
  pokemonList.forEach((pokemon_1) => {
    createPage({
      path: `/${pokemon_1.name.toLowerCase()}`,
      component: SinglePokemon,
      context: {
        data: pokemon_1
      }
    })
  })
}
