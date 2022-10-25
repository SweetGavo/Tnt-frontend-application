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

const initialData={
  fullName:'',
  email:'',
  phoneNumber:''
}


function Index(props){
  const alertRef = useRef();
  const [form,setForm] = useState(initialData);
  const [response,setResponse] = useState({
    type:'error',
    message:""
});



function setData({target}){
  const {name,value} = target;
  setForm((v)=>({...v, [name]:value}) );
}



 function BookInspection({ closeModal,product }) {
  const router = useRouter();
  const [form,setFormField] = useState(initialData);
  const {user} = useSelector(s=>s.auth);
  const [currentView,setCurrentView] = useState('form');

  function bookInspect(){
    const formValue = {user:user._id}
      setCurrentView('reviewBooking');
  }

  function hideModal() {
    setCurrentView('form');
    closeModal();
  }

  function getView(){
    if(currentView === 'form'){
      return <InspectionForm form={form} setData={setData} bookInspection={bookInspection}/>
    }

    return  <ReviewBooking done={hideModal}/>
  }

  
  useEffect(()=>{
    initialData.email = user.email;
    initialData.fullName = `${user.firstName} ${user.lastName}`;
    setFormField(initialData)
  },[]);
  
  
  
    function setData(e){
      const {name,value} = e.target;
      setFormField((v)=>({...v,[name]:value}));
  
    }
const bookInspection = () => {
  post(url.bookInspectionsUrl, form)
    .then(({data}) => {
      const {token,user} = data.data;
      setResponse({type:'success',
      message:'Inspection Booked Successfully '})
      setForm(initialData);
        
      })

    .catch((e) => {
        const  {response:{data:{message=""}}} = e;
        setResponse(v => ({ type: 'error',message}));
        alertRef.current.scrollIntoView();
      });


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
};
 
}

}

export default Index;