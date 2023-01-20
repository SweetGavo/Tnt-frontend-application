import React from 'react';
import style from "../styles/Global.module.scss";
import TextField from "./textField";
import Button from "./button";

function InspectionForm({form,setData,bookInspection,isLogin}) {
    return (
        <>
            <div className={style.topText}>
                <h3>Book An Inspection</h3>
            </div>

            <p>Enter the email address linked to this account</p>
            <TextField
                placeholder="Jonathan"
                variant={"outline"}
                label={"Firstname"}
                name={'firstName'}
                value={form.firstName}
                onChange={setData}
            />
            <TextField
                placeholder="Doe"
                variant={"outline"}
                label={"Lastname"}
                name={'lastName'}
                value={form.lastName}
                onChange={setData}
            />
            <TextField
                placeholder="E.g Jonathandoe@gmail.com"
                variant={"outline"}
                label={"Email address"}
                type={"email"}
                name={"email"}
                value={form.email}
                onChange={setData}
                readOnly={isLogin}
            />
            <TextField
                placeholder="+2349012345678"
                variant={"outline"}
                label={"Phone Number"}
                value={form.phoneNumber}
                name={'phoneNumber'}
                onChange={setData}
            />
            <TextField
                type={'datetime-local'}
                variant={"outline"}
                label={"Time"}
                value={form.time}
                name={'time'}
                onChange={setData}
            />

            <Button  size={"sm"} style={"blue"} margin-top={"100px"} radius={5} onClick={bookInspection}>
                Book an inspection
            </Button>
        </>
    );
}

export default InspectionForm;
