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
import { url } from "../utils/urlHelpers";
import Alert from "./alert";


const initialData={
  fullName:'',
  email:'',
  phoneNumber:'',

}
export default function BookInspection({ closeModal,product }) {
  const [form,setFormField] = useState(initialData);
  const {user,isLogin} = useSelector(s=>s.auth);
  const [currentView,setCurrentView] = useState('form');
    const [response,setResponse] = useState({
        type:'error',
        message:""
    })

  function bookInspection(){
    const formValue = {user:user._id,product}
      post(url.inspectionsUrl,formValue).then(resp=>{
          setCurrentView('reviewBooking');
      }).catch(e=>{
          console.log(e);
      })

  }
  function hideModal() {
    setCurrentView('form');
    closeModal();
  }

  function getView() {
    if (currentView === 'form') {
      return <InspectionForm form={form} setData={setData} bookInspection={bookInspection} isLogin={isLogin} />
    }

    return <ReviewBooking done={hideModal} />
  }



  useEffect(()=>{
    initialData.email = user.email || "";
    initialData.fullName = `${user.firstName || ""} ${user.lastName || ""}`;
    setFormField(initialData)

  },[user])


  function setData(e){
    const {name,value} = e.target;
    setFormField((v)=>({...v,[name]:value}));
  }

  function closeAlert(){
        setResponse(v =>({...v, message:''}))
    }


 const bookInspect = () => {
    post(url.inspectionsUrl,form)
      .then(({data}) => {
        const {token,user} = data.data;
         setResponse({type:'success', message:' inspections Successful '})
      }).catch((e) => {
          const  {response:{data:{message=""}}} = e;
           setResponse(v => ({ type: 'error',message}));
        });
  }

  return (
    <div className={style.bookInspection}>
      <div>
        <Icon
          path={mdiClose}
          className={`icon ${style.closeIcon}`}
          onClick={hideModal}
        />
          <Alert  type={response.type} message={response.message} closeAlert={closeAlert} />
          {
          getView()
        }

      </div>
    </div>
  );
 }
