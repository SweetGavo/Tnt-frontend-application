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

function Index(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className={style.background}>
      <div className={style.cart}>
        <div className={style.cart1}>
          <div className={style.cartTop}>
            <div className={style.buttonSection}>
              <h3>Shopping cart</h3>
            </div>
            <div className={style.buttonSection1}>
              <div className={style.button}>
                <button className={style.buttonRound}>
                  {" "}
                  <AiOutlineArrowLeft /> Back to shop
                </button>
              </div>
            </div>
          </div>

          <div className={style.container}>
            <div className={style.content}>
              <section className={style.contentSection}>
                <div className={style.contentSectionDiv}>
                  <div className={style.sectionContainer}>
                    <section className={style.section}>
                      <div className={style.round}>
                        {" "}
                        <img src="/images/iphone 13 pro.jpeg" alt="" />{" "}
                      </div>
                    </section>
                    <div className={style.section1}>
                      <div className={style.inline}>
                        iphone 13 pro max Variation: space gray
                      </div>
                    </div>
                  </div>

                  <button className={style.button}>
                    <BiTrash />
                    Remove
                  </button>
                </div>

                <div className={style.contentSectionDivSign}>
                  <button
                    onClick={() => setCount(count - 1)}
                    className={style.smallBtn1}
                  >
                    -
                  </button>
                  <div className={style.Btn}>
                    <span className={style.countBtn}>{count}</span>
                  </div>
                  <button
                    onClick={() => setCount(count + 1)}
                    className={style.smallBtn}
                  >
                    +
                  </button>
                </div>
                <div className={style.contentSectionDivAmount}>
                  <h3># 420,000</h3>
                </div>
              </section>

              <section className={style.contentSection}>
                <div className={style.contentSectionDiv}>
                  <div className={style.sectionContainer}>
                    <section className={style.section}>
                      <div className={style.round}>
                        {" "}
                        <img src="/images/iphone 13 pro.jpeg" alt="" />{" "}
                      </div>
                    </section>
                    <div className={style.section1}>
                      <div className={style.inline}>
                        iphone 13 pro max Variation: space gray
                      </div>
                    </div>
                  </div>

                  <button className={style.button}>
                    <BiTrash />
                    Remove
                  </button>
                </div>

                <div className={style.contentSectionDivSign}>
                  <button
                    onClick={() => setCount1(count1 - 1)}
                    className={style.smallBtn1}
                  >
                    -
                  </button>
                  <div className={style.Btn}>{count1}</div>
                  <button
                    onClick={() => setCount1(count1 + 1)}
                    className={style.smallBtn}
                  >
                    +
                  </button>
                </div>
                <div className={style.contentSectionDivAmount}>
                  <h3># 420,000</h3>
                </div>
              </section>

              <section className={style.contentSection}>
                <div className={style.contentSectionDiv}>
                  <div className={style.sectionContainer}>
                    <section className={style.section}>
                      <div className={style.round}>
                        {" "}
                        <img src="/images/iphone 13 pro.jpeg" alt="" />{" "}
                      </div>
                    </section>
                    <div className={style.section1}>
                      <div className={style.inline}>
                        iphone 13 pro max Variation: space gray
                      </div>
                    </div>
                  </div>

                  <button className={style.button} placeholder="remove">
                    <BiTrash />
                    Remove
                  </button>
                </div>
                <div className={style.contentSectionDivSign}>
                  <button
                    onClick={() => setCount2(count2 - 1)}
                    className={style.smallBtn1}
                  >
                    -
                  </button>
                  <div className={style.Btn}>{count2 }</div>
                  <button
                    onClick={() => setCount2(count2 + 1)}
                    className={style.smallBtn}
                  >
                    +
                  </button>
                </div>

                <div className={style.contentSectionDivAmount}>
                  <h3># 420,000</h3>
                </div>
              </section>
            </div>
            <section className={style.sideContent}>
              <div>
                <section className={style.little}>
                  <h3>Summary</h3>
                  <div className={style.total}>
                    <p>Total</p>
                    <p>#1,300,000</p>
                  </div>
                  <div className={style.button}>
                    <button
                      className={style.bulebtn}
                      placeholder="Pay with CloudPay"
                    >
                      Pay with CloudPay
                    </button>
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
