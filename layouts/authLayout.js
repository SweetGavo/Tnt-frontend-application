import React from 'react';
import AuthHeader from "../components/authHeader";

function AuthLayout({children}) {
    return (
        <>
            <AuthHeader/>
            <main className={'container'}>
                {children}
            </main>
        </>
    );
}

export default AuthLayout;