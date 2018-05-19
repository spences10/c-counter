import Fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'

const Index = ({ cryptoData }) => (
  <Layout>
    <div>
      <h1>Hello</h1>
      {console.log(cryptoData)}
    </div>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await Fetch('https://api.coinmarketcap.com/v1/ticker/')
  const data = await res.json()

  return {
    cryptoData: data
  }
}

export default Index
