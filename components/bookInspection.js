import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import style from "../styles/Global.module.scss";
import Link from "next/link";
import TextField from "./textField";
import Button from "./button";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import {useSelector} from "react-redux";
import {post} from "../utils/helperFunctions";
import InspectionForm from "./inspectionForm";
import ReviewBooking from "./reviewBooking";


const initialData={
  fullName:'',
  email:'',
  phoneNumber:''
}

export default function BookInspection({ closeModal,product }) {
  const router = useRouter();
  const [form,setFormField] = useState(initialData);
  const {user} = useSelector(s=>s.auth);
  const [currentView,setCurrentView] = useState('form');

  function bookInspection(){
    const formValue = {user:user._id}
      setCurrentView('reviewBooking');
  }

  function hideModal() {
    setCurrentView('form');
    closeModal();
  }

  function getView() {
    if (currentView === 'form') {
      return <InspectionForm form={form} setData={setData} bookInspection={bookInspection} />
    }
      
    return <ReviewBooking done={hideModal} />
  }
   
  

  useEffect(()=>{
    initialData.email = user.email;
    initialData.fullName = `${user.firstName} ${user.lastName}`;
    setFormField(initialData)
  },[user])

  function setData(e){
    const {name,value} = e.target;
    setFormField((v)=>({...v,[name]:value}));
  }
  return (
    <div className={style.bookInspection}>
      <div>
        <Icon
          path={mdiClose}
          className={`icon ${style.closeIcon}`}
          onClick={hideModal}
        />

        {
          getView()
        }
    
      </div>
    </div>
  );
}
