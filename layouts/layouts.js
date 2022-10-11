import React from 'react';
import Footer from "../components/footer";
import NormHeader from "../components/normHeader";

function Layouts({children}) {
    return (
        <div>
            <NormHeader/>
            <main className={'container'}>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layouts;