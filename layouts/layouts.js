import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";

function Layouts({children}) {
    return (
        <div>
            <Header/>
            <main className={'container'}>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layouts;