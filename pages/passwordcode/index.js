import React, {useEffect, useMemo} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layouts from "../../layouts/layouts";
import TextField from '../../components/textField';
import Button from "../../components/button";
import { useState } from 'react';
import { useRouter } from 'next/router';
import style from "../../styles/Global.module.scss";
import Link from 'next/link';
import ResetCode from "../../components/resetCode";
import ResetPassword from "../../components/resetPassword";





export default function Home() {
    const [form,setFormField] = useState({
        newPassword:"",
        verificationCode:""
    });

    const views = {
        'code': {
            component:ResetCode,
            'field':'verificationCode',
        },
        'resetPassword':{
            component:ResetPassword,
            'field':'newPassword'
        }
    }



    const [currentView,setCurrentView] = useState('code');

    const fieldValues = useMemo(()=>{
        return form[views[currentView].field];
    },[currentView]);

    const View = useMemo(()=>{
        return views[currentView].component;
    },[currentView]);


    function resetPassword(){
            console.log(form);
    }


    return (
        <>
            {
                <View setView={setCurrentView} currentValue={fieldValues} setFormField={setFormField} done={resetPassword}  />
            }
        </>
    )
}


Home.getLayout = function getLayout(page) {
    return (
        <Layouts>
            {page}
        </Layouts>
    )
}