import React from 'react'
import { Link } from 'gatsby'
import './PokemonList.css'

const PokemonList = ({ pageContext: { data: pokemonList }, navigate }) => {
  console.log(pokemonList)
  return (
    <section className="container">
      {pokemonList.map(pokemon => (
        <Link key={pokemon.name} to={`/${pokemon.name.toLowerCase()}`} className="pokemon">
          <h2>{pokemon.name}</h2>
          <div className="image-container">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <h3>Weight</h3>
          <ul>
            <li>Minimum: {pokemon.weight.minimum}</li>
            <li>Maximum: {pokemon.weight.maximum}</li>
          </ul>
          {pokemon.evolutionRequirements && (
            <h3>Evolution requirement: {pokemon.evolutionRequirements.amount} {pokemon.evolutionRequirements.name}</h3>
          )}

        </Link>
      ))}
    </section>

  )
}

export default PokemonList
