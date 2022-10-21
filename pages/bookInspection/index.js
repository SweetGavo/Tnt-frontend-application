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





export default function Home(reviewAppointment) {
  const router = useRouter()

  const togglePageHandler = () => {
    router.push('/reviewAppointment')
  }

  return (


    <div className={style.passwordcode} >
      <div>

        <div className={style.topText }>
          <h3 >Book An Inspection</h3>
          <p>Enter the email address linked to this account</p>
        </div>

          <span>Full Name</span>
          <TextField placeholder='Jonathan Doe' variant={'outline'} label={'Email address'} type={'email'} />
          <span>Email Address</span>
          <TextField placeholder='E.g Jonathandoe@gmail.com' variant={'outline'} label={'Email address'} type={'email'} />
          <span>Phone Number</span>
          <TextField placeholder='+2349012345678' variant={'outline'} label={'Email address'} type={'email'} />
          <Link style={{ marginLeft: '500px', marginTop: '100px' }} href="/reviewAppointment">
            <Button size={'sm'} style={"blue"} margin-top={"100px"} radius={5}>
             Book an inspection
            </Button>
          </Link>
        </div>

      </div>
  )
}