import Dump from '@wesbos/dump'
import React from 'react'
import Layout from '../components/layout'

export default ({ data }) => {
  const {
    rickAndMorty: { characters },
  } = data
  return (
    <Layout>
      {characters.results.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <p>Species: {character.species}</p>
          <img src={character.image} />
        </div>
      ))}
      <Dump GraphQLResponse={data} />
    </Layout>
  )
}

export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      characters {
        results {
          id
          name
          species
          image
        }
      }
    }
  }
`
