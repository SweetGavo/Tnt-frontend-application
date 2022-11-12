import React, {useRef, useState} from 'react';
import style from "../styles/Global.module.scss";
import TextField from "./textField";
import Button from "./button";
const values = []
    values.length = 6;
    values.fill('',0);
function ResetCode({setView,currentValue,setFormField}) {
const valuesRef = useRef(currentValue);
    function moveNext(){
        setFormField(v=>({...v,'verificationCode':valuesRef.current.join()}));
        setView('resetPassword');
    }



    function setValue({target}){
        const {name,value}=target;
        let index = Number(name);
        const newValue = [...valuesRef.current];
        newValue[index] = value;
        valuesRef.current = newValue;
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
                        <Button onClick={moveNext} size={'sm'} block={true} className={style.resetButton} style={"blue"}   radius={5}>
                            Proceed
                        </Button>
                </div>
            </form>

        </div>
    </div>
    );
}

export default ResetCode;