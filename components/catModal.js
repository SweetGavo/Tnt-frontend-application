import React, { useEffect, useState } from "react";
import style from "../styles/modal.module.scss";
import Button from "../components/button";
import TextField from "../components/textField";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import styles from "../styles/Global.module.scss";
import sty from "../styles/cart.module.scss";
import { useSelector } from "react-redux";
import { get, post } from "../utils/helperFunctions";
import { url } from "../utils/urlHelpers";


const CatModal = ({ closeModal, form,setData,saveAddress }) => {

  function submitForm(){
    saveAddress();
    closeModal();
  }

  return (
    <div className={`${style.modal} ${open ? style.open : ""}`}>
      <div className={style.body}>
        <div className={styles.bookInspection}>
          <div className={sty.icon}>
            <Icon
              path={mdiClose}
              className={`icon ${style.closeIcon}`}
              onClick={() => {
                closeModal(false);
              }}
            />
          </div>
          <div className={style.topText}>
            <h3>Address Details</h3>
            <p>Fill the form to add address details</p>
          </div>
          <TextField
            placeholder="+2349012345678"
            variant={"outline"}
            label={"Phone Number"}
            type={"email"}
            value={form.phoneNumber}
            name={"phoneNumber"}
            onChange={setData}
          />
          <TextField
            placeholder="No 41 igbo efun"
            variant={"outline"}
            label={"Address"}
            type={"email"}
            value={form.address}
            name={"address"}
            onChange={setData}
          />
          <TextField
            placeholder="Nigeria"
            variant={"outline"}
            label={"Country"}
            type={"email"}
            value={form.country}
            name={"country"}
            onChange={setData}
          />
          <TextField
            placeholder="Lagos"
            variant={"outline"}
            label={"State"}
            type={"email"}
            value={form.state}
            name={"state"}
            onChange={setData}
          />
          <TextField
            placeholder="Benin"
            variant={"outline"}
            label={"City"}
            type={"email"}
            value={form.city}
            name={"city"}
            onChange={setData}
          />
            <Button size={"sm"} style={"blue"} margin-top={"100px"} radius={5} onClick={submitForm}>
              Summit
            </Button>
        </div>
      </div>
    </div>
  );
};

export default CatModal;
