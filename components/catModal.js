import React from "react";
import style from "../styles/modal.module.scss";
import Button from "../components/button";
import TextField from "../components/textField";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import styles from "../styles/Global.module.scss";
import sty from "../styles/cart.module.scss";

function hideModal() {
  closeModal();
}
const Modal = ({ closeModal }) => {
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
          <span>Phone Number</span>
          <TextField
            placeholder="+2349012345678"
            variant={"outline"}
            label={"Email address"}
            type={"email"}
          />
          <span>Address</span>
          <TextField
            placeholder="No 41 igbo efun"
            variant={"outline"}
            label={"Email address"}
            type={"email"}
          />
          {/* **** */}
          <span>Country</span>
          <TextField
            placeholder="Nigeria"
            variant={"outline"}
            label={"Email address"}
            type={"email"}
          />
          <span>State</span>
          <TextField
            placeholder="Lagos"
            variant={"outline"}
            label={"Email address"}
            type={"email"}
          />
          <span>City</span>
          <TextField
            placeholder="Lagos"
            variant={"outline"}
            label={"Email address"}
            type={"email"}
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
