import React from 'react';
import style from "../styles/Global.module.scss";
import {FcOk} from "react-icons/fc";
import Link from "next/link";
import Button from "./button";

function ReviewBooking({done,title,text}) {
    return (
        <div className={style.passwordcode} >
            <div  >
                <div className={style.topText}>
                    <h3 >Book a review appointment</h3>
                    <div className={style.checkMark}><img src="/images/lf30_v2PAPH.json%5Dcheck%20mark.svg" alt=""/></div>
                    <h3 >{title || "Inspection booked Succesfully"}</h3>

                    <p className={style.reviewMessage}>
                        {text || "Inspection details sent to your email address and phone number"}
                    </p>
                </div>
                <div className={`flex flex-center`}>
                        <Button size={'large'} style={"blue"} margin-top={"100px"} radius={5} onClick={done}>
                            Done
                        </Button>
                </div>

            </div>
        </div>

    );
}

export default ReviewBooking;
