import React,{useState} from "react";
import style from "../styles/Global.module.scss";
import Link from "next/link";
import TextField from "./textField";
import Button from "./button";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import Modal from "../components/modal";
export default function BookInspection({ closeModal }) {

    function alertSuccess() {
        closeModal(true);
        alert("Inspection booked Succesfully");
        setShowSuccess(true);
       
    }
    const [showSuccess, setShowSuccess] = useState(false);
  
    const [openModal,setModalStatus] = useState(false);
   return (
      <div className={style.bookInspection}>
         <div>
            <Icon
               path={mdiClose}
               className={`icon ${style.closeIcon}`}
            //    onClick={hideModal}
            />

            <div className={style.topText}>
               <h3>Book An Inspection</h3>
            </div>

            <p>Enter the email address linked to this account</p>
            <span>Full Name</span>
            <TextField
               placeholder="Jonathan Doe"
               variant={"outline"}
               label={"Email address"}
               type={"email"}
            />
            <span>Email Address</span>
            <TextField
               placeholder="E.g Jonathandoe@gmail.com"
               variant={"outline"}
               label={"Email address"}
               type={"email"}
            />
            <span>Phone Number</span>
            <TextField
               placeholder="+2349012345678"
               variant={"outline"}
               label={"Email address"}
               type={"email"}
            />

            {/* <Link style={{ marginLeft: "500px", marginTop: "100px" }} href="../reviewAppointment"> */}
                  <Button 
                  onClick={alertSuccess}
                     size={"sm"}
                     style={"blue"}
                     margin-top={"100px"}
                     radius={5}
                  >
                     Book an inspection
                  </Button>
            
            {/* </Link> */}
         </div>

         {showSuccess && (<Modal open={openModal} onClose={()=>setModalStatus(false)}>
                <reviewAppointment closeModal={()=>setModalStatus (false)}/>
            </Modal> )
            }
      </div>
   );
}
