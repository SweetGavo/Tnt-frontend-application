import React from 'react';
import Layouts from "../../layouts/layouts";
import Head from "next/head";

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
        <Layouts>
            {page}
        </Layouts>
    )
}

export default Index;