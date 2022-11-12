import React, {useRef, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layouts from "../../layouts/layouts";
import TextField from '../../components/textField';
import Button from "../../components/button";
import { useRouter } from 'next/router';
import style from "../../styles/Global.module.scss";
import Link from 'next/link';
import AuthLayout from "../../layouts/authLayout";
import {post} from "../../utils/helperFunctions";
import {url} from "../../utils/urlHelpers";
import Alert from "../../components/alert";





export default function Home(passwordcode) {
  const router = useRouter()
  const [email,setEmail] = useState('');
  const togglePageHandler = () => {
    router.push('/passwordcode')
  }

  const [response,setResponse] = useState({
    type:'error',
    message:""
  })
  const alertRef = useRef();

  function resetPassword(){
    console.log(email);
        post(url.resetPassword,{email})
            .then(({status,data})=>{
                if(status){
                  setResponse({type:'success', message:data.data.message});
                  setTimeout(()=>{
                    router.push('/passwordcode')
                  },2000);
                }
            })
            .catch(e=>{
              console.log(e.message);
              setResponse({type:'error', message:'Sorry Try again'});
            });
  }


  function closeAlert(){
    setResponse(v =>({...v, message:''}))
  }
  return (

    <div className={style.passwordcode} >
      <div>
        <div className={style.topText }>
          <div ref={alertRef}>
            <Alert  type={response.type} message={response.message} closeAlert={closeAlert} />
          </div>
          <h3>Reset Password</h3>
          <p>Enter the email address linked to this account</p>
        </div>


          <TextField placeholder='Jonathandoe@gmail.com' variant={'outline'} onChange={({target})=>{setEmail(target.value)}} label={'Email address'} type={'email'} />
            <Button size={'sm'} style={"blue"} margin-top={"100px"} radius={5} block={true} onClick={resetPassword}>
              Proceed
            </Button>
        </div>

      </div>
  )
}




Home.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}
