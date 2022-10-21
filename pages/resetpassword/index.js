import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layouts from "../../layouts/layouts";
import TextField from '../../components/textField';
import Button from "../../components/button";
import { useRouter } from 'next/router';
import style from "../../styles/Global.module.scss";
import Link from 'next/link';
import AuthLayout from "../../layouts/authLayout";





export default function Home(passwordcode) {
  const router = useRouter()

  const togglePageHandler = () => {
    router.push('/passwordcode')
  }

  return (


    <div className={style.passwordcode} >
      <div>

        <div className={style.topText }>
          <h3>Reset Password</h3>
          <p>Enter the email address linked to this account</p>
        </div>


          <TextField placeholder='Jonathandoe@gmail.com' variant={'outline'} label={'Email address'} type={'email'} />
          <Link style={{ marginLeft: '500px', marginTop: '100px' }} href="/passwordcode">
            <Button size={'sm'} style={"blue"} margin-top={"100px"} radius={5}>
              Proceed
            </Button>
          </Link>
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
