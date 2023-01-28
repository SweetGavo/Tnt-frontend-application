import React from 'react';
import style from "../styles/Global.module.scss";
import TextField from "./textField";
import Button from "./button";

function BidForm({form,setData,submitBid}) {
    return (
        <div>
            <div className={style.topText}>
                <h3>Submit bid</h3>
            </div>

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
                type={'text'}
                variant={"outline"}
                label={"Amount"}
                value={form.amount}
                name={'amount'}
                onChange={setData}
            />

            <Button  size={"sm"} style={"blue"} margin-top={"100px"} radius={5} onClick={submitBid}>
                Submit Bid
            </Button>
        </div>
    );
}

export default BidForm;
