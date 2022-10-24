import React from 'react'
import Button from "../../components/button";
import { useRouter } from "next/router";
import style from "../../styles/Global.module.scss";
import Link from "next/link";
import { FcOk } from "react-icons/fc";
import Icon from "@mdi/react";
import {mdiClose} from "@mdi/js";




export default function ReviewAppointment({closeModal}){
  const router = useRouter()

  const togglePageHandler = () => {
    router.push('/products')
  }
  function hideModal(){
    closeModal();
  }

  return (
    <div className={style.passwordcode}>
       <div>
       <Icon path={mdiClose} className={`icon ${style.closeIcon}`} onClick={hideModal} />
       
          <div className={style.topText}>
             <h3>Book a review appointment</h3>
             <div>
                <FcOk />
             </div>
             <h3>Inspection booked Succesfully</h3>
             <p>
                Inspection details sent to your email address and phone number
             </p>
          </div>
          <div>
             <Link
                style={{ marginLeft: "500px", marginTop: "100px" }}
                href="/products"
             >
                <Button
                   size={"sm"}
                   style={"blue"}
                   margin-top={"100px"}
                   radius={5}
                >
                   Done
                </Button>
             </Link>
          </div>
       </div>
    </div>
 );
}
