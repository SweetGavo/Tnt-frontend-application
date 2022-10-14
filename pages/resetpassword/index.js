import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layouts from "../../layouts/layouts";
import TextField from '../../components/textField';
import Button from "../../components/button";
import { useRouter } from 'next/router';
import style from "../../styles/Global.module.scss";
import Link from 'next/link';





export default function Home(passwordcode) {
  const router = useRouter()

  const togglePageHandler = () => {
    router.push('/passwordcode')
  }

  return (


    <div className={style.passwordcode} >
      <div className='Rp' >

        <h3 >Reset Password</h3>
        <p>Enter the email address linked to this account</p>



        <TextField placeholder='Jonathandoe@gmail.com' label={'Email:'} type={'email'} />
        <div>
          <Link style={{ marginLeft: '500px', marginTop: '100px' }} href="/passwordcode">
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
