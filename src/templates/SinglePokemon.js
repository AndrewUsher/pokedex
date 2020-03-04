import React from 'react'

const SinglePokemon = ({ pageContext: { data: pokemon } }) => {
  console.log(pokemon)
  return (
    <h2>{pokemon.name}</h2>
  )
}

export default SinglePokemon
