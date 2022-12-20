import React, {useRef, useState} from 'react';
import style from "../styles/Global.module.scss";
import TextField from "./textField";
import Link from "next/link";
import Button from "./button";

function ResetPassword({setView,currentValue,setFormField,done}) {
    const inputRef = useRef({
        password:"",
        confirmPassword:""
    });
    const [error,setError] = useState('');

    function setField({target:{value,name}}){
        const prevValue = {...inputRef.current};
        prevValue[name] = value;
        inputRef.current  = prevValue;
    }

    function proceed(){
        setError('');
        const {password,confirmPassword} = inputRef.current;
        if(!password || !confirmPassword)
            setError('password and set password field cannot be empty');
        if(password !== confirmPassword){
            setError('confirm password and password does not match');
        }
        setFormField(v=>({...v,'newPassword':password}));
        done();
    }
    return (
        <div className={style.passwordcode}>
            <div>
                <div className={style.topText}>
                    <h3>Reset Password</h3>
                    <p>Enter a new password for this account</p>
                </div>
                <p className={`text-error`}>{error}</p>
                <TextField placeholder='•••••' label={'Password:'} type={'password'} name={'password'} onChange={setField} />
                <TextField placeholder='•••••' label={'ConfirmPassword:'} type={'password'} name={'confirmPassword'} onChange={setField} />
                <div style={{marginTop:"1rem"}}>
                        <Button size={'sm'} style={"blue"} margin-top={"100px"} radius={5} onClick={proceed} >
                            Proceed
                        </Button>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;