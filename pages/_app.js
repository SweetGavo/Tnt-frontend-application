import "../styles/main.scss";
import AuthPage from "./authpage";
import { useEffect } from "react";
import { store, wrapper } from "../store/store";
import { setUser } from "../store/reducers/auth";
import { STORAGENAME } from "../utils/textHelper";
import {getFromMemory} from "../store/reducers/cart";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const storageUser = window.localStorage.getItem(STORAGENAME);
    let isLogin = Boolean(storageUser);
    let user = isLogin ? JSON.parse(storageUser) : "";
    store.dispatch(setUser({ isLogin, user }));
    store.dispatch(getFromMemory());
    if('serviceWorker' in window.navigator){
      window.navigator.serviceWorker.register('/worker/serviceworker.js').then(w=>{
        Notification.requestPermission().then(permission=>{
          console.log(permission);
        });
        console.log('service worker installed');
      }).catch(e=>{
        console.log(e.message);
      })
    }
  }, []);
  const getLayout = Component.getLayout || ((page) => page);


  return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
