import React from "react";
import AuthLayout from "../../layouts/authLayout";
import Head from "next/head";
import style from "../../styles/shoppingCart.module.scss";
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
                  <AiOutlineArrowLeft/> Back to shop
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
                        <img src="/images/profile.png" alt="" />{" "}
                      </div>
                    </section>
                    <div className={style.section1}>
                      <div>iphone 13 pro max</div>
                      <div>
                        Variation: <span>space gray</span>
                      </div>
                    </div>
                  </div>

                  <button className={style.button}>
                    <BiTrash />
                    Remove
                  </button>
                </div>

                <div className={style.contentSectionDivSign}>
                  <button className={style.smallBtn1}>
                    <GrFormSubtract />
                  </button>
                  <div className={style.Btn}></div>
                  <button className={style.smallBtn}>
                    <GrAdd />
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
                        <img src="/images/profile.png" alt="" />{" "}
                      </div>
                    </section>
                    <div className={style.section1}>
                      <div>iphone 13 pro max</div>
                      <div>
                        Variation: <span>space gray</span>
                      </div>
                    </div>
                  </div>

                  <button className={style.button}>
                    <BiTrash />
                    Remove
                  </button>
                </div>

                <div className={style.contentSectionDivSign}>
                  <button className={style.smallBtn1}>
                    <GrFormSubtract />
                  </button>
                  <div className={style.Btn}></div>
                  <button className={style.smallBtn}>
                    <GrAdd />
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
                        <img src="/images/profile.png" alt="" />{" "}
                      </div>
                    </section>
                    <div className={style.section1}>
                      <div>iphone 13 pro max</div>
                      <div>
                        Variation: <span>space gray</span>
                      </div>
                    </div>
                  </div>

                  <button className={style.button} placeholder="remove">
                    <BiTrash />
                    Remove
                  </button>
                </div>
                <div className={style.contentSectionDivSign}>
                  <button className={style.smallBtn1}>
                    <GrFormSubtract />
                  </button>
                  <div className={style.Btn}></div>
                  <button className={style.smallBtn}>
                    <GrAdd />
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
