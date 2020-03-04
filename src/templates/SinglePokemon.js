import React from 'react'
import { Link } from 'gatsby'

const SinglePokemon = ({ pageContext: { data: pokemon } }) => {
  const { evolutions, image, maxCP, maxHP, name, resistant, types, weaknesses, ...rest } = pokemon
  console.log(evolutions, rest)
  return (
    <article className="card pokemon-container">
      <h1>{name}</h1>
      <div className="image-container">
        <img src={image} alt={name}/>
      </div>
      <h3>Max CP: {maxCP}</h3>
      <h3>Max HP: {maxHP}</h3>
      {types && (
        <div className="types-container">
          {types.map(type => (
            <span key={type} className={`type ${type.toLowerCase()}`}>{type}</span>
          ))}
        </div>
      )}
      {resistant && (
        <>
          <h2>Resistances</h2>
          <div className="evolution-container">
            {resistant.map(resistance => (
              <span key={resistance} className={`type ${resistance.toLowerCase()}`}>{resistance}</span>
            ))}
          </div>
        </>
      )}
      {weaknesses && (
        <>
          <h2>Weaknesses</h2>
          <div className="evolution-container">
            {weaknesses.map(resistance => (
              <span key={resistance} className={`type ${resistance.toLowerCase()}`}>{resistance}</span>
            ))}
          </div>
        </>
      )}
      {evolutions && (
        <>
          <h2>Evolutions</h2>
          <div className="evolution-container">
            {evolutions.map(evolution => (
              <Link to={`/${evolution.name.toLowerCase()}`} key={evolution.name}>
                <div className="evolution-card" >
                  <h3>{evolution.name}</h3>
                  <div className="types-container">
                    {evolution.types.map(type => (
                      <span key={type} className={`type ${type.toLowerCase()}`}>{type}</span>
                    ))}
                  </div>
                  <img src={evolution.image} alt={evolution.name} />
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </article>

  )
}

export default SinglePokemon
