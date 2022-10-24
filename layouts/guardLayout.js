import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

function GuardLayout({children}) {
    const {isLogin} = useSelector(s=>s.auth);
    const router = useRouter();



    useEffect(()=>{
        if(!isLogin){
            router.push('/login','login',{
                redirectTo: router.pathname
            });
        }
    },[isLogin])

    return (
        <>
            {
                children
            }
        </>
    );
}

export default GuardLayout;