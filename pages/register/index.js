import React from 'react';
import AuthLayout from "../../layouts/authLayout";

function Index(props) {
    return (
        <div>
            this  for registration
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