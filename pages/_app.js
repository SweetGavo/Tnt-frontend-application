import '../styles/main.scss'
import AuthPage from './authpage';
import { useEffect } from 'react';
import wrapper from '../store/store'
function MyApp({ Component, pageProps }) {
    useEffect(()=>{
        const storageUser = localStorage.getItem(STORAGENAME);
        let isLogin = Boolean(storageUser);
        let user = (isLogin)?JSON.parse(storageUser):'';
        store.dispatch(setUser({isLogin,user}));
    },[]);
    const getLayout = Component.getLayout || ((page)=>page);
    return  getLayout( <Component {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
