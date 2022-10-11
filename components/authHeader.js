import React from 'react';
import Header from "./header";
import Button from "./button";

function AuthHeader(props) {
    return (
       <Header justify={'end'}>
            <Button href='/register' variant={'outline'}  style={'blue'} size={'large'} radius={5} >
                Create an account
            </Button>
       </Header>
    );
}

export default AuthHeader;