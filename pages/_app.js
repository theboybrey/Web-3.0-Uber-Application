import '../styles/globals.css'

//MyApp component with Props
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
