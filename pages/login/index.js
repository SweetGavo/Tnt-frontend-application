import React, { useState, useEffect, useHistory } from "react";
import Head from "next/head";
import AuthLayout from "../../layouts/authLayout";
import style from "../../styles/Login.module.scss";
import TextField from "../../components/textField";
import Button from "../../components/button";
import { url } from "../../utils/urlHelpers";
import { post } from "../../utils/helperFunctions";
import Alert from "../../components/alert";

function Index(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password });
    post(url, {
      email: email,
      password: password,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Head>
        <meta name={"description"} content={"login"} />
      </Head>

      <div className={"flex registration-container"}>
        <div className={`col-md-6 ${style.sideContainer}`}>
          <img src={"images/harry-cunningham-7qCeFo19r24-unsplash.jpeg"} />
          <div className={style.textContent}>
            <div>
              <h1>Bringing the best deals</h1>
            </div>
          </div>
        </div>
        <div className={`col-md-6 `}>
          <div className={style.formContainer}>
            <h1>Login to your account</h1>
            <p>
              To sign in , please type in the email <b /> and password linked to
              your acccount
            </p>
            <form>
              <TextField
                onChange={handleEmail}
                label={"Email Address"}
                type={"email"}
                placeholder={"E.g jonathandoe@gmail.com"}
              />
              <TextField
                onChange={handlePassword}
                label={"Password"}
                type={"password"}
                placeholder={"••••••••"}
              />
              <Button
                onClick={handleApi}
                id="user"
                size={"sm"}
                style={"blue"}
                radius={5}
                className={style.buttons}
              >
                Login
              </Button>
              <Button
                size={"sm"}
                variant={"outline"}
                className={style.buttons}
                radius={5}
              >
                <img src="/images/glogo.png" className={style.gLogo} alt="" />{" "}
                Continue with Google
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Index;
