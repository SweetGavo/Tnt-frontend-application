import React from 'react';
import Layouts from "../layouts/layouts";

function Index(props) {
    return (
        <div></div>
    );
}

export default Index;

Index.getLayout = function getLayout(page){
    return <Layouts>
        {page}
    </Layouts>
}