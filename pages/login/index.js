import React from 'react';
import Head from "next/head";
import AuthLayout from "../../layouts/authLayout";

function Index(props) {
    return (
        <div>
            <Head>
                <meta name={'description'} content={'login'}/>
            </Head>
            this is for login
        </div>
    );
}

Index.getLayout = function getLayout(page){
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default Index;