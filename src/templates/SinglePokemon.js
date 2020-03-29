import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'

const renderType = (type) => (
  <Link to={`/${type.toLowerCase()}`} key={type}>
    <span className={`type ${type.toLowerCase()}`}>{type}</span>
  </Link>
)

const renderTypes = ({ heading, types }) => types && (
  <>
    {heading && <h2>{heading}</h2>}
    {types.map(renderType)}
  </>
)

const SinglePokemon = ({ pageContext: { data: pokemon } }) => {
  const { evolutions, image, maxCP, maxHP, name, resistant, types, weaknesses } = pokemon
  return (
    <Layout>
      <article className="card pokemon-container">
        <h1>{name}</h1>
        {renderTypes({ types })}
        <div className="image-container">
          <img src={image} alt={name}/>
        </div>
        <h3>Max CP: {maxCP}</h3>
        <h3>Max HP: {maxHP}</h3>
        {renderTypes({ heading: 'Resistances', types: resistant })}
        {renderTypes({ heading: 'Weaknessess', types: weaknesses })}
        {evolutions && (
          <>
            <h2>Evolutions</h2>
            <div className="evolution-container">
              {evolutions.map(evolution => (
                <>
                  <div className="evolution-card">
                    <Link to={`/${evolution.name.toLowerCase()}`} key={evolution.name}>
                      <h3>{evolution.name}</h3>
                    </Link>
                    <div className="types-container">
                      {evolution.types.map(renderType)}
                    </div>
                    <img src={evolution.image} alt={evolution.name} />
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </article>
    </Layout>
  )
}

export default SinglePokemon
