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
import { FcOk } from "react-icons/fc";





export default function Home(soppingCarts) {
  const router = useRouter()

  const togglePageHandler = () => {
    router.push('/login')
  }

  return (


    <div className={style.passwordcode} >
      <div  >

        <div className={style.topText }>
          <h3 >Book a review appointment</h3>

         <div></div> </div>
         

          <h3 >Inspection booked Succesfully</h3>
            <p>Inspection details sent to email address and phone number</p>
        </div>

          
          <Link style={{ marginLeft: '500px', marginTop: '100px' }} href="/soppingCarts">
            <Button size={'sm'} style={"blue"} margin-top={"100px"} radius={5}>
             Done
            </Button>
          </Link>
        </div>

      
  )
}




// Home.getLayout = function getLayout(page) {
//   return (
//     <AuthLayout>
//       {page}
//     </AuthLayout>
//   )
// }
