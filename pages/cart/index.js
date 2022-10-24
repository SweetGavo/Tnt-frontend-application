import { mdiArrowLeft, mdiMinus, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import Button from "../../components/button";
import Modal from "../../components/catModal";
import Layouts from "../../layouts/layouts";
import style from "../../styles/cart.module.scss";
import { toCurrency } from "../../utils/helperFunctions";

function Index(props) {

  const [openModal, setopenModal] = useState(false);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  const add = () => {
    return setCount(count++);
  };
  const add1 = () => {
    return setCount1(count1++);
  };
  const sub = () => {
    return setCount(count--);
  };
  const sub1 = () => {
     setCount1(count1--);
  };



  return (
    <div className={style.background}>
      <div className={"container flex flex-wrap"}>
        <div>
          <Button
            className={style.button}
            onClick={() => {
              setopenModal(true);
            }}
            variant={"outline"}
            size={"large"}
            radius={8}
          >
            {/* {/* {" "} 
                  <Icon path={mdiArrowLeft} className={"icon"} /> } */}
            Add Address
          </Button>
          {openModal && <Modal closeModal={setopenModal} />}
        </div>

        <div className={`flex col-md-12 ${style.cartTop}`}>
          <h3>Shopping cart</h3>

          <a href="/products"> </a>
              <Button
                className={style.button}
                variant={"outline"}
                size={"large"}
                radius={8}
              >
                {" "}
                <Icon path={mdiArrowLeft} className={"icon"} /> Back to shop
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
                  <Button
                    onClick={sub}
                    className={style.buttons}
                    size={"sm"}
                    style={"blue"}
                  >
                    <Icon path={mdiMinus} className={"icon"} />
                  </Button>

                  <p className={style.quantity}>{count}</p>
                  <Button
                    onClick={add}
                    className={style.buttons}
                    size={"sm"}
                    style={"blue"}
                  >
                    <Icon path={mdiPlus} className={"icon"} />
                  </Button>
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
                  <Button
                    onClick={sub1}
                    className={style.buttons}
                    size={"sm"}
                    style={"blue"}
                  >
                    <Icon path={mdiMinus} className={"icon"} />
                  </Button>
                  <p className={style.quantity}>{count1}</p>
                  <Button
                    onClick={add1}
                    className={style.buttons}
                    size={"sm"}
                    style={"blue"}
                  >
                    <Icon path={mdiPlus} className={"icon"} />
                  </Button>
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
                    <h3>{toCurrency(4000)}</h3>
                  </div>
                  <div className={` ${style.checkoutButton}`}>
                    <Button radius={5} style={"blue"} size={"large"}>
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
