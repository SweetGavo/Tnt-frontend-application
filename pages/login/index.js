import React, {useState, useEffect, useHistory, useRef} from "react";
import Head from "next/head";
import AuthLayout from "../../layouts/authLayout";
import style from "../../styles/Login.module.scss";
import TextField from "../../components/textField";
import Button from "../../components/button";
import { url } from "../../utils/urlHelpers";
import { post } from "../../utils/helperFunctions";
import Alert from "../../components/alert";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/reducers/auth";
const initalData={
  email:'',
  password:''
}
function Index(props) {
  const [form,setForm] = useState(initalData);
  const [response,setResponse] = useState({
    type:'error',
    message:""
  })
  const alertRef = useRef();
  const dispatch = useDispatch();

  function setData({target}){
    const {name,value} = target;
    setForm((v)=>({...v, [name]:value}) );
  }


  const login = () => {
    post(url.loginUrl, form)
      .then(({data}) => {
        const {token,user} = data.data;
        setResponse({type:'success', message:'Login Successful '})
        setForm(initalData);
        alertRef.current.scrollIntoView({
          block:'start'
        });
        setTimeout(()=>{
          user.token = token;
          dispatch(loginUser({user}))
        },3000);
      })
      .catch((e) => {
        const  {response:{data:{message=""}}} = e;
        setResponse(v => ({ type: 'error',message}));
        alertRef.current.scrollIntoView();
      });
  };

  function closeAlert(){
    setResponse(v =>({...v, message:''}))
  }

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

            <div ref={alertRef}>
              <Alert  type={response.type} message={response.message} closeAlert={closeAlert} />
            </div>
            <form>
              <TextField
                onChange={setData}
                name={'email'}
                value={form.email}
                label={"Email Address"}
                type={"email"}
                placeholder={"E.g jonathandoe@gmail.com"}
              />
              <TextField
                  onChange={setData}
                  name={'password'}
                  value={form.password}
                label={"Password"}
                type={"password"}
                placeholder={"••••••••"}
              />
              <Button
                onClick={login}
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
