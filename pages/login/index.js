import React from 'react';
import Head from "next/head";
import AuthLayout from "../../layouts/authLayout";
import style from "../../styles/Login.module.scss";
import TextField from '../../components/textField';
import Button from '../../components/button';


function Index(props) {
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
                To sign in , please type in the email <b /> and password linked
                to your acccount
              </p>
              <TextField
                label={"Email Address"}
                type={"email"}
                placeholder={"E.g jonathandoe@gmail.com"}
              />
              <TextField
                label={"Password"}
                type={"password"}
                placeholder={"••••••••"}
              />
              <Button
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
            </div>
          </div>
        </div>
      </div>
    );
}

Index.getLayout = function getLayout(page){
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
}

export default Index;