import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layouts from "../../layouts/layouts";
import TextField from '../../components/textField';
import Button from "../../components/button";
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Home() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');
    const checkInput = (e) => {
        const { id, value } = e.target;
        if (id === 'input1') {
            setInput1(value);
            if (value !== '') {
                document.getElementById('input2').focus();
            }
        }
        if (id === 'input2') {
            setInput2(value);
            if (value !== '') {
                document.getElementById('input3').focus();
            }
        }
        if (id === 'input3') {
            setInput3(value);
            if (value !== '') {
                document.getElementById('input4').focus();
            }
        }
        if (id === 'input4') {
            setInput4(value);
            if (value !== '') {
                document.getElementById('input5').focus();
            }
        }
        if (id === 'input5') {
            setInput5(value);
            if (value !== '') {
                document.getElementById('input6').focus();
            }
        }
        if (id === 'input6') {
            setInput6(value);
        }
    }
    return (
        <div className={'flex flex-center'}>
            <div className={'.Rp'}>
                <h3>Reset Password</h3>
                <p>Enter the code sent to your email</p>
                <form>
                    <div className={'style.formGroup'}>
                        <input className={'style.boxes'} type="text" value={input1} id='input1' onChange={(e) => checkInput(e)} maxLength="1" />
                        <input className={'style.boxes'} type="text" value={input2} id='input2' onChange={(e) => checkInput(e)} maxLength="1" />
                        <input className={'style.boxes'} type="text" value={input3} id='input3' onChange={(e) => checkInput(e)} maxLength="1" />
                        <input className={'style.boxes'} type="text" value={input4} id='input4' onChange={(e) => checkInput(e)} maxLength="1" />
                        <input className={'style.boxes'} type="text" value={input5} id='input5' onChange={(e) => checkInput(e)} maxLength="1" />
                        <input className={'style.boxes'} type="text" value={input6} id='input6' onChange={(e) => checkInput(e)} maxLength="1" />
                    </div>
                    <div classname={'proceed'}>
                        <a href="/confirmpassword">
                        <Button  onclick="myFunction()">Proceed</Button>
                        </a>
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