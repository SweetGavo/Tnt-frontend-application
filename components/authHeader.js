import React, {useEffect, useState} from 'react';
import Header from "./header";
import Button from "./button";
import Link from "next/link";
import {useRouter} from "next/router";

function AuthHeader(props) {
    const router = useRouter();
    const [path,setPath] = useState({
        text:'Create An Account',
        link:'/register'
    });
    useEffect(()=>{
        if(router.pathname === '/register'){
         setPath({
             text:'Log Into Account',
             link:'/login'
         })
        }else{
          setPath(
              {
                  text:'Create An Account',
                  link:'/register'
              }
          );
        }
},[router.pathname])
    return (
       <Header justify={'end'}>
           <Link href={path.link}>
               <Button  variant={'outline'}  style={'blue'} size={'large'} radius={5} >
                   {path.text}
               </Button>
           </Link>
       </Header>
    );
}

export default AuthHeader;