import { GlobalStyle } from '../application/styled';
import NavBar from '../components/navbar';
import Tracking from '../application/tracking';

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <Tracking />
    <NavBar />
    <Component {...pageProps} />
  </>
}

export default MyApp
