import '../styles/main.scss'
import AuthPage from './authpage';
function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page)=>page);
    return  getLayout(<Component {...pageProps} />);
}

export default MyApp
