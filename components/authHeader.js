import React from 'react';
import Header from "./header";
import Button from "./button";
import Link from "next/link";

function AuthHeader(props) {
    return (
       <Header justify={'end'}>
           <Link href='/register'>
               <Button  variant={'outline'}  style={'blue'} size={'large'} radius={5} >
                   Create an account
               </Button>
           </Link>
       </Header>
    );
}

export default AuthHeader;