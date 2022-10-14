import '../styles/main.scss'
<<<<<<< HEAD
import AuthPage from './authpage';
=======
import {wrapper,store} from "../store/store";
import {useEffect} from "react";
import {STORAGENAME} from "../utils/textHelper";
import {setUser} from "../store/reducers/auth";

>>>>>>> 921817559cb2bf9cdd99b9984095324ea3df5aa5
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
