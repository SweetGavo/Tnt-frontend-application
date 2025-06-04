import "../styles/main.scss";
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

    

  }, []);
  const getLayout = Component.getLayout || ((page) => page);


  return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
