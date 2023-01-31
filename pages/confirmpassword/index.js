import React from 'react';
import TextField from '../../components/textField';
import Button from "../../components/button";
import style from "../../styles/Global.module.scss";
import Link from 'next/link';
import AuthLayout from "../../layouts/authLayout";




export default function Home() {
  return (
    <div className={style.passwordcode}>
      <div>
        <div className={style.topText}>
          <h3>Reset Password</h3>
          <p>Enter a new password for this account</p>
        </div>
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



Home.getInitialProps = ()=>{
  return {}
}






Home.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}
