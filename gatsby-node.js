const axios = require('axios')
const createNodeHelpers = require('gatsby-node-helpers').default

const { createNodeFactory } = createNodeHelpers({
  typePrefix: 'coinlore',
})

const COINLORE = createNodeFactory('COINLORE')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  const fetchCoinloreData = () =>
    axios.get('https://api.coinlore.com/api/tickers/')

  // await for results
  const res = await fetchCoinloreData()

  // Create your node object
  const coinloreNode = COINLORE(res.data)

  // Create node with the gatsby createNode() API
  createNode(coinloreNode)

  return
}
