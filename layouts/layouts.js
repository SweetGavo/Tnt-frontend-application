import React from 'react';
import Footer from "../components/footer";
import NormHeader from "../components/normHeader";

function Layouts({children,className='container'}) {
    return (
        <div>
            <NormHeader/>
            <main {...className} >
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layouts;