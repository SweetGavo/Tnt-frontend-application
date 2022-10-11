import React from 'react';
import AuthLayout from "../../layouts/authLayout";
import TextField from "../../components/textField";
import Button from "../../components/button";
import image from "../../public/images/registration.jpg";
import Image from "next/image";
import style from "../../styles/Registration.module.scss";

function Index(props) {
    return (
        <div className={'flex registration-container'}>
            <div className={`col-md-6 ${style.sideContainer}`}>
                <img src={'images/registration.jpg'}   />
            </div>
            <div className={`col-md-6 ${style.formContainer}`}>
                <h3>Create an account</h3>
                <p>Kindly enter your details below to create an account</p>
                <TextField label={'Full name'}/>
                <TextField label={'Email Address'} type={'email'}/>
                <TextField label={'Password'} type={'password'}/>
                <Button size={'sm'} style={'blue'} radius={5}>
                    Create account
                </Button>
                <Button size={'sm'} variant={'outline'} radius={5} >
                    Continue with Google
                </Button>
            </div>
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