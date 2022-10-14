import React from 'react';
import AuthHeader from "../components/authHeader";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

function AuthLayout({children}) {
    const auth = useSelector(state=> state.auth);
    const router = useRouter();
    if (auth.isLogin){
        router.push('/');
    }
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