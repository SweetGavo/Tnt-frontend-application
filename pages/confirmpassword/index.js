import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layouts from "../../layouts/layouts";
import TextField from '../../components/textField';
import Button from "../../components/button";
import Link from 'next/link';


export default function Home() {
    return (

       
      <div className='flex flex-center'>
            <div className='Rp'>
           <h3>Reset Password</h3>
           <p>Enter the email address linked to this account</p>
           <TextField placeholder = '•••••' label={'Password:'} type={'email'}/>
           <TextField placeholder = '•••••' label={'ConfirmPassword:'} type={'email'}/>

       <div>
           <Button onClick = 
           '' size={'sm'} variant={'outline'} radius={5} >
               Proceed
           </Button>
       </div>
           
       </div>
         </div> 
    )
}
            
            
       
    
      

  


Home.getLayout  = function getLayout(page){
  return (
      <Layouts>
        {page}
      </Layouts>
  )
}