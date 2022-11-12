import React, {useEffect, useMemo, useState} from "react";
import style from "../../styles/cart.module.scss";
import Link from "next/link";
import Button from "../../components/button";
import Layouts from "../../layouts/layouts";
import img from "../../public/images/glogo.png";
import {post, toCurrency} from "../../utils/helperFunctions";
import Icon from "@mdi/react";
import {mdiArrowLeft, mdiMinus, mdiPlus, mdiTrashCan, mdiTrashCanOutline} from "@mdi/js";
import {useDispatch, useSelector} from "react-redux";
import {changeQuantity, removeItem} from "../../store/reducers/cart";
import CatModal from "../../components/catModal";
import {ADDRESSKEY} from "../../utils/textHelper";
import {url} from "../../utils/urlHelpers";

const initialData = {
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
  country: "",
};

function Index(props) {
   const [openModal, setopenModal] = useState(false);

  const [form, setFormField] = useState(initialData);
  const {user} = useSelector(s => s.auth);
  const dispatch = useDispatch();
  const {itemsId,items} = useSelector(store=>store.cart);
  function deleteItem(product){
    dispatch(removeItem({product}));
  }

  function updateProductQuantity({currentTarget}){
    const {dataset:{value,id}} = currentTarget;
    dispatch(changeQuantity({productId:id,quantity:Number(value)}));
  }

  const cartTotal = useMemo(()=>{
      return itemsId.reduce((a,b)=>{
          const {price,quantity} = items[b];
          return (a + (price*quantity));
      },0)
  },[items,itemsId])

  function setData(e){
    const {name,value} = e.target;
    setFormField((v)=>({...v,[name]:value}));
  }


  function createOrder() {
    const products = itemsId.map(itemId => ({productId: itemId, quantity: items[itemId].quantity}));
    const address = {id: user._id, ...form};
    const finalForm = {products, address,email:user.email};
    post(url.createOrderUrl,finalForm).then(resp=>{
      console.log(resp);
    }).catch(err=>{
      console.log(err)
    })
  }

  function saveAddress(){
    localStorage.setItem(ADDRESSKEY,JSON.stringify(form));
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
                  <h3>{toCurrency(cartTotal)}</h3>
                </div>
                <div className={` ${style.checkoutButton}`} >
                  <Button
                      onClick={createOrder}
                      radius={5}
                      style={'blue'}
                      size={'large'}
                      block={true}
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
          {openModal && <CatModal closeModal={setopenModal} form={form} setData={setData} saveAddress={saveAddress} />}
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
