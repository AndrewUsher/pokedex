import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'

const PokemonList = ({ pageContext: { data: pokemonList } }) => {
  return (
    <Layout>
      <section className="container">
        {pokemonList.map(pokemon => (
          <Link key={pokemon.name} to={`/${pokemon.name.toLowerCase()}`} className="pokemon card">
            <h2 className="list-heading">{pokemon.name}</h2>
            <div className="image-container">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export default PokemonList
