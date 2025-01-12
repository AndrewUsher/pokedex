import React from 'react'
import { Link, type PageProps } from 'gatsby'
import { Layout } from '../components/Layout'

const PokemonList = ({
  pageContext
}: PageProps<never, Queries.PokemonQuery>) => {
  console.log(pageContext)
  return (
    <Layout>
      <section className="container">
        {pageContext?.pokemon?.pokemons?.map((pokemon) => (
          <Link
            key={pokemon?.name ?? ''}
            to={`/${pokemon?.name?.toLowerCase()}`}
            className="pokemon card"
          >
            <h2 className="list-heading">{pokemon?.name}</h2>
            <div className="image-container">
              <img src={pokemon?.image ?? ''} alt={pokemon?.name ?? ''} />
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export default PokemonList
