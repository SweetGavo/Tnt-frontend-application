import React, {useState} from 'react';
import AuthLayout from "../../layouts/authLayout";
import TextField from "../../components/textField";
import Button from "../../components/button";
import image from "../../public/images/registration.jpg";
import Image from "next/image";
import style from "../../styles/Registration.module.scss";
import {url} from "../../utils/urlHelpers";
const defaultValue = {
    firstName:"",
    lastName:"",
    email:"",
    password:""
}

function Index(props) {
    const [form,setForm] = useState(defaultValue);
    const [response,setResponse] = useState({
        type:'error',
        message:""
    })
    function setValue({target}){
        const {name,value} = target;
            setForm(v=>({...v, [name]:value}));
    }

    function submitForm(){
                get( url.loginUrl,form)
                    .then(resp=>{

                    })
                    .catch((e)=>{

                    }).finally(e=>{

                });
    }
    return (
        <div className={'flex registration-container'}>

            <div className={`col-md-6 ${style.sideContainer}`}>
                <img src={'images/registration.jpg'}   />
                <div className={style.textContent}>
                    <h2>Shopping at your comfort</h2>
                </div>

            </div>
            <div className={`col-md-6 `}>
                <div className={style.formContainer}>
                    <h1>Create an account</h1>
                    <p>Kindly enter your details below to create an account</p>
                    {
                        
                    }
                    <TextField value={form.firstName} onChange={setValue} label={'First name'} placeholder={'Jonathan'}/>
                    <TextField value={form.lastName} onChange={setValue} label={'Last name'} placeholder={'Doe'}/>
                    <TextField  value={form.email} onChange={setValue} label={'Email Address'} type={'email'} placeholder={'E.g jonathandoe@gmail.com'}/>
                    <TextField  value={form.password} onChange={setValue} label={'Password'} type={'password'} placeholder={'password'} />
                    <Button size={'sm'} style={'blue'} radius={5} className={style.buttons} >
                        Create account
                    </Button>
                    <Button size={'sm'} variant={'outline'} onClick={submitForm} className={style.buttons} radius={5} >
                        <img src="/images/glogo.png" className={style.gLogo} alt=""/> Continue with Google
                    </Button>
                </div>

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