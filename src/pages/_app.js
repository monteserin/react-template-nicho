import { GlobalStyle } from '../application/styled';
import NavBar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <NavBar />
    <Component {...pageProps} />
  </>
}

export default MyApp
