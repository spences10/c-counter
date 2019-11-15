import Dump from '@wesbos/dump'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'

export default () => {
  const [runTimeData, setRunTimeData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getRunTimeData() {
      const res = await axios({
        url: 'https://spotify-graphql-server.herokuapp.com/graphql',
        method: 'post',
        data: {
          query: `
            {
              queryArtists(byName:"Andy C") {
                name
                id
                image
                albums {
                  name
                  image
                }
              }
            }
          `,
        },
      })
      const { data } = res.data
      setRunTimeData(data)
      setLoading(false)
    }
    getRunTimeData()
  }, [])
  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )
  return (
    <Layout>
      <h2>{runTimeData.queryArtists[0].name}</h2>
      <img
        height="300px"
        src={runTimeData.queryArtists[0].image}
        alt={runTimeData.queryArtists[0].name}
      />
      {runTimeData.queryArtists[0].albums.map(album => (
        <div key={album.id}>
          <h3>{album.name}</h3>
          <img height="300px" src={album.image} alt={album.name} />
        </div>
      ))}
      <Dump GraphQLResponse={runTimeData} />
    </Layout>
  )
}
