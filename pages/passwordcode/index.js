import React, {useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layouts from "../../layouts/layouts";
import TextField from '../../components/textField';
import Button from "../../components/button";
import { useState } from 'react';
import { useRouter } from 'next/router';
import style from "../../styles/Global.module.scss";
import Link from 'next/link';



const values = "".padEnd(6,' ').split('').fill('',0);
export default function Home() {
    const [input, setInput] = useState([]);

    function setValue({target}){
                    const {name,value}=target;
                    let index = Number(name);
                    const newValue = [...input];
                    newValue[index] = value;
                    setInput(newValue);
               const next = index + 1;
               if (value && next == values.length){
                    target.blur();
                    return true;
               }

               if(value){
                  const element = document.querySelector(`#input${next}`);
                  element.focus();
               }
    }

    return (
        <div className={style.passwordcode}>
            <div>
                <div className={style.topText}>
                    <h3>Reset Password</h3>
                    <p>Enter the code sent to your email</p>
                </div>

                <form>
                    <div className={'style.formGroup'}>
                        {
                            values.map((value,index) =>(
                            <TextField className={style.boxes} type="text" name={index} key={index} id={`input${index}`} onChange={setValue} maxLength="1" />
                            ))
                        }

                    </div>

                    <div style={{marginTop:"1rem"}}>
                        <Link style={{ marginLeft: '650px', marginTop: '100px' }} href="/confirmpassword">
                            <Button size={'sm'} className={style.resetButton} style={"blue"}   radius={5}>
                                Proceed
                            </Button>
                        </Link>
                    </div>
                </form>
                




            </div>
        </div>
    )
}


Home.getLayout = function getLayout(page) {
    return (
        <Layouts>
            {page}
        </Layouts>
    )
}