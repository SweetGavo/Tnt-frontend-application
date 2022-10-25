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


const initialData = {
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
  country: "",
};




const Modal = ({ closeModal }) => {
  useEffect(() => {
    data().then((res) => {
      setFormField(res.data);
    }).catch((error) => {
      console.log(error);
  })
  },[]);
  
  const [form, setFormField] = useState(initialData);
  const {user} = useSelector(s => s.auth);
  console.log(user + 'user');


  const data =  async () =>  {
     const result = await post(url.cartUrl,form);
      console.log(result);
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
          />
          <TextField
            placeholder="No 41 igbo efun"
            variant={"outline"}
            label={"Address"}
            type={"email"}
            value={form.address}
          />
          <TextField
            placeholder="Nigeria"
            variant={"outline"}
            label={"Country"}
            type={"email"}
            value={form.country}
          />
          <TextField
            placeholder="Lagos"
            variant={"outline"}
            label={"State"}
            type={"email"}
            value={form.state}
          />
          <TextField
            placeholder="Benin"
            variant={"outline"}
            label={"City"}
            type={"email"}
            value={form.city}
          />
          <Link style={{ marginLeft: "500px", marginTop: "100px" }} href="">
            <Button size={"sm"} style={"blue"} margin-top={"100px"} radius={5}>
              Summit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
