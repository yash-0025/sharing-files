import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { NomadsProvider } from '../context/NomadsContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl='https://ktk8zb63sfv7.usemoralis.com:2053/server'
    appId='0EMsOMzCNihw1CnxHlY7HjuccxgaCzOpif4L1I7X'
    >
      <NomadsProvider>
        <Component {...pageProps} />
      </NomadsProvider>
    </MoralisProvider>
  )
}

export default MyApp
