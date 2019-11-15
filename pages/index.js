import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import { CryptoDataProvider } from '../contexts/CryptoDataContext'

const Index = ({ cryptoData }) => (
  <CryptoDataProvider>
    <Layout>
      <div>
        <h1>Hello</h1>
        <div>
          {Object.keys(cryptoData).map((key, index) => {
            return <li>{key}</li>
          })}
        </div>
      </div>
    </Layout>
  </CryptoDataProvider>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coinmarketcap.com/v1/ticker/')
  const data = await res.json()

  return {
    cryptoData: data
  }
}

export default Index
