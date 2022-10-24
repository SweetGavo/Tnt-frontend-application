import React, {useEffect} from 'react';
import AuthHeader from "../components/authHeader";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

function AuthLayout({children}) {
    const auth = useSelector(state=> state.auth);
    const router = useRouter();

    useEffect(()=>{
        const components = router.components;
        const path = Object.keys(components).find(path=>components[path].initial === true );
        if (auth.isLogin){
            router.push((path!== router.pathname)?path:'/');
        }
    },[router,auth.isLogin])


    return (
        <>
            <AuthHeader/>
            <main>
                {children}
            </main>
        </>
    );
}

export default AuthLayout;