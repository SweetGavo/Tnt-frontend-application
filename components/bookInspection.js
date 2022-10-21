import React from 'react';
import { useRouter } from 'next/router';
import style from "../styles/Global.module.scss";
import Link from 'next/link';
import TextField from "./textField";
import Button from "./button";
import Icon from "@mdi/react";
import {mdiClose} from "@mdi/js";





export default function BookInspection({closeModal}) {
    const router = useRouter()

    const togglePageHandler = () => {
        router.push('/reviewAppointment')
    }

    function hideModal(){
        closeModal();
    }
    return (

        <div className={style.bookInspection} >
            <div>
                <Icon path={mdiClose} className={`icon ${style.closeIcon}`} onClick={hideModal} />

                <div className={style.topText }>
                    <h3 >Book An Inspection</h3>
                </div>

                <p>Enter the email address linked to this account</p>
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