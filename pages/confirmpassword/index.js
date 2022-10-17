import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layouts from "../../layouts/layouts";
import TextField from '../../components/textField';
import Button from "../../components/button";
import { useRouter } from 'next/router';
import style from "../../styles/Global.module.scss";
import Link from 'next/link';




export default function Home() {
  return (


    <div className={style.passwordcode}>
      <div>
        <h3>Reset Password</h3>
        <p>Enter the email address linked to this account</p>
        <TextField placeholder='•••••' label={'Password:'} type={'email'} />
        <TextField placeholder='•••••' label={'ConfirmPassword:'} type={'email'} />

        <div style={{marginTop:"1rem"}}>
          <Link style={{ marginLeft: '650px', marginTop: '100px' }} href="/login">
            <Button size={'sm'} style={"blue"} margin-top={"100px"} radius={5}>
              Proceed
            </Button>
          </Link>

      
        </div>

      </div>
    </div>
  )
}









Home.getLayout = function getLayout(page) {
  return (
    <Layouts>
      {page}
    </Layouts>
  )
}