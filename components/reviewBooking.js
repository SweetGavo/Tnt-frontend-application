import React from 'react';
import style from "../styles/Global.module.scss";
import {FcOk} from "react-icons/fc";
import Link from "next/link";
import Button from "./button";

function ReviewBooking({done}) {
    return (
        <div className={style.passwordcode} >
            <div  >
                <div className={style.topText}>
                    <h3 >Book a review appointment</h3>
                    <div><FcOk/></div>
                    <h3 >Inspection booked Succesfully</h3>

                    <p>Inspection details sent to your email address and phone number</p>
                </div>
                <div>
                        <Button size={'sm'} style={"blue"} margin-top={"100px"} radius={5} onClick={done}>
                            Done
                        </Button>
                </div>

            </div>
        </div>

    );
}

export default ReviewBooking;