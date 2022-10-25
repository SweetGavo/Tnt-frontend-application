import React, { useRef, useState } from "react";
import AuthLayout from "../../layouts/authLayout";
import Head from "next/head";
import style from "../../styles/cart.module.scss";
import Alert from "../../components/alert";
import TextField from "../../components/textField";
import Link from "next/link";
import Button from "../../components/button";
import Modal from "../../components/catModal";
import Layouts from "../../layouts/layouts";
import { BiTrash } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import img from "../../public/images/glogo.png";
import {toCurrency} from "../../utils/helperFunctions";
import Icon from "@mdi/react";
import {mdiArrowLeft, mdiMinus, mdiPlus, mdiTrashCan, mdiTrashCanOutline} from "@mdi/js";
import {useDispatch, useSelector} from "react-redux";
import {changeQuantity, removeItem} from "../../store/reducers/cart";


function Index(props) {
   const [openModal, setopenModal] = useState(false);

  const dispatch = useDispatch();
  const {itemsId,items} = useSelector(store=>store.cart);
  function deleteItem(product){
    dispatch(removeItem({product}));
  }

  function updateProductQuantity({currentTarget}){
    const {dataset:{value,id}} = currentTarget;
    dispatch(changeQuantity({productId:id,quantity:Number(value)}));
  }


  function cartContent(){
    if(!itemsId.length){
      return <p>Opps  no item in Cart</p>
    }

    return (
        <>
          <div className={`col-md-9 ${style.content} `}>
          {
            itemsId.map(item=>{
              const product = items[item];
              return (
                  <section className={`${style.contentSection} flex-wrap`} key={product._id}>
                    <div className={`col-md-6 flex`}>
                      <div className={style.round}>
                        <img src={product.attachments[0].thumbnailUrl} alt="" />
                      </div>
                      <div className={style.productDetails}>
                        <h3>{product.name}</h3>
                        <p>{product.variations||''}</p>
                      </div>
                    </div>
                    <div className={`col-md-2`}>
                      <div className={style.cartButtons}>
                        <Button className={`${style.buttons} ${product.quantity === 1?'disabled':''}`} size={'sm'} style={'blue'} data-value={-1} data-id={product._id} onClick={updateProductQuantity}>
                          <Icon path={mdiMinus} className={'icon'}/>
                        </Button>
                        <p className={style.quantity}>{product.quantity}</p>
                        <Button className={style.buttons} size={'sm'} data-value={1} onClick={updateProductQuantity} data-id={product._id} style={'blue'}>
                          <Icon path={mdiPlus} className={'icon'}/>
                        </Button>

                      </div>
                    </div>

                    <div className={`col-md-4`}>
                      <div className={`flex flex-end ${style.priceSection}`}>
                        <p>{toCurrency(product.sellingPrice)}</p>
                      </div>
                    </div>
                    <div className={`${style.footer} col-md-12`}>
                      <Button style={'blue'} variant={'outline'} size={'sm'} onClick={()=>deleteItem(product)}>
                        <Icon path={mdiTrashCanOutline} className={'icon'}/>  Remove
                      </Button>
                    </div>

                  </section>

              )
            })
          }
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
        </>

    )
  }

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

          <Link href={"/products"}>
            <Button
              className={style.button}
              variant={"outline"}
              size={"large"}
              radius={8}
            >
              {" "}
              <Icon path={mdiArrowLeft} className={"icon"} /> Back to shop
            </Button>
          </Link>
        </div>
        <div className={`col-md-12`}>
          <div className={`flex `}>{cartContent()}</div>
        </div>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default Index;
