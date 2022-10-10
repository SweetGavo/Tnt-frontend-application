import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layouts from "../layouts/layouts";

export default function Home() {
  return (
    <>

    </>
  )
}

Home.getLayout  = function getLayout(page){
  return (
      <Layouts>
        {page}
      </Layouts>
  )
}