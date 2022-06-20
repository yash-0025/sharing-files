import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { NomadsProvider } from '../context/NomadsContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl='https://dcqe2y7fit4t.usemoralis.com:2053/server'
    appId='ygIgTK7ksgmeoy03j18aaZygBjfAr7vaZee0XpFH'>
      <NomadsProvider>
        <Component {...pageProps} />
      </NomadsProvider>
    </MoralisProvider>
  )
}

export default MyApp
