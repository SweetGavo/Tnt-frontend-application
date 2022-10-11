import React from 'react';
import AuthHeader from "../components/authHeader";

function AuthLayout({children}) {
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