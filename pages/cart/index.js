import React, { useRef, useState } from "react";
import AuthLayout from "../../layouts/authLayout";
import Head from "next/head";
import style from "../../styles/cart.module.scss";
import Alert from "../../components/alert";
import TextField from "../../components/textField";
import Link from "next/link";
import Button from "../../components/button";
import Header from "../../components/header";
import profile from "../../public/images/profile.png";
import Layouts from "../../layouts/layouts";
import { BiTrash } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import img from "../../public/images/glogo.png";
import { GrAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import {toCurrency} from "../../utils/helperFunctions";
import Icon from "@mdi/react";
import {mdiArrowLeft, mdiMinus, mdiPlus} from "@mdi/js";

function Index(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  


  return (
    <div className={style.background}>
      <div className={'container flex flex-wrap'}>
        <div className={ `flex col-md-12 ${style.cartTop}`}>
            <h3>Shopping cart</h3>
              <Button className={style.button} variant={'outline'} size={'large'} radius={8}>
                {" "}
                <Icon path={mdiArrowLeft} className={'icon'}/> Back to shop
              </Button>
        </div>
        <div className={`col-md-12`}>
            <div className={`flex `}>
              <div className={`col-md-9 ${style.content} `}>
                <section className={style.contentSection}>
                  <div className={style.round}>
                    <img src="/images/eclipse 45.png" alt="" />
                  </div>
                <div className={style.productDetails}>
                    <h3>Iphone 13 pro max</h3>
                    <p>Variation: Space Gray</p>
                  </div>

                  <div className={style.cartButtons}>
                    <Button className={style.buttons} size={'sm'} style={'blue'} >
                      <Icon path={mdiMinus} className={'icon'}/>
                    </Button>

                      <p className={style.quantity}>1</p>
                    <Button className={style.buttons} size={'sm'} style={'blue'}><Icon path={mdiPlus} className={'icon'}/></Button>

                  </div>

                  <div className={`flex flex-end ${style.priceSection}`}>
                    <p>{toCurrency(2000)}</p>
                  </div>
                </section>
                <section className={style.contentSection}>
                  <div className={style.round}>
                    <img src="/images/eclipse 45.png" alt="" />
                  </div>
                <div className={style.productDetails}>
                    <h3>Iphone 13 pro max</h3>
                    <p>Variation: Space Gray</p>
                  </div>

                  <div className={style.cartButtons}>
                    <Button className={style.buttons} size={'sm'} style={'blue'} >
                      <Icon path={mdiMinus} className={'icon'}/>
                    </Button>

                      <p className={style.quantity}>1</p>
                    <Button className={style.buttons} size={'sm'} style={'blue'}><Icon path={mdiPlus} className={'icon'}/></Button>


                  </div>

                  <div className={`flex flex-end ${style.priceSection}`}>
                    <p>{toCurrency(2000)}</p>
                  </div>
                </section>
              </div>
              <section className={`col-md-3 ${style.sideContent}`}>
                <div>
                  <section>
                  <h3 className={style.title}>Summary</h3>
                    <div className={style.total}>
                      <p>Total</p>
                      <h3>{toCurrency(1300)}</h3>
                    </div>
                    <div className={` ${style.checkoutButton}`}>
                      <Button
                          radius={5}
                          style={'blue'}
                          size={'large'}
                      >
                        Pay with CloudPay
                      </Button>
                    </div>
                  </section>
                </div>
              </section>

            </div>
        </div>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default Index;
