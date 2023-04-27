import React, {useMemo, useState} from 'react';
import layouts from "../../layouts/layouts";
import Layouts from "../../layouts/layouts";
import style from "../../styles/products.module.scss";
import TextField from "../../components/textField";
import Icon from "@mdi/react";
import {mdiAccountCircleOutline} from "@mdi/js";
import ProductBox from "../../components/productBox";
import {useRouter} from "next/router";
import Button from "../../components/button";
import Tab from "../../components/tab";
import {get, post, toCurrency} from "../../utils/helperFunctions";
import Modal from "../../components/modal";
import BookInspection from "../../components/bookInspection";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../../store/reducers/cart";
import Link from "next/link";
import Countdown from "../../components/countdown";
import SubmitBid from "../../components/submitBid";



function ViewProduct({product}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const path = useMemo(()=>{
        const path = router.pathname.split('/');
        path.splice(0,1);
        return path;
    },[router.pathname])
    const [bidAmount,setBidAmount] = useState("");

    const [openModal,setModalStatus] = useState(false);
    const [currentImageIndex,setCurrentImageIndex] = useState(0);
    const {items} = useSelector(s=>s.cart);
    const [modalView,setModalView] = useState(product.deal?'bid':'bookInspection')

    const modalContent = {
        bookInspection:<BookInspection product={product._id} closeModal={()=>{setModalStatus(false)}}/>,
        bid: <SubmitBid product={product} closeModal={()=>{setModalStatus(false)}}/>
    }

    function openBooking(){
        setModalView('bookInspection')
        setModalStatus(true);

    }

    function openBiding() {
        setModalView('bid')
        setModalStatus(true)
    }

    function addItemToCart(){
        const toCart = {...product,quantity:1};
        dispatch(addItem({product:toCart}))
    }



    function getButtons(){

        if(product.isDeal){
            return <>
                <Button onClick={openBiding}>Submit Bid</Button>
            </>
        }

        return <>
            <Button style={'blue'} size={'large'} radius={5} onClick={addItemToCart}>Add to Cart</Button>
            <Button onClick={openBooking} variant={'outline'}  style={'blue'} size={'large'} radius={5}>Book an inspection</Button>
        </>

    }

    return (
        <section className={style.productPageWrapper}>
            <Modal open={openModal} onClose={()=>setModalStatus(false)}>
                {
                    modalContent[modalView]
                }
            </Modal>
            {/* <Modal open={openModal} onClose={()=>setModalStatus(false)}>
                <reviewAppointment closeModal={()=>setModalStatus (false)}/>
            </Modal> */}
            <div className="flex container flex-wrap">
                <div className={`col-md-12 `}>
                    <div className={`flex flex-start ${style.topBar}`}>
                        <div className="col-md-3">
                            <p className={`${style.breadcrumbs} flex `}>
                                <span className={`text-green`} >Home</span>/<Link href={`/products`}><span className={`text-green`}>Products</span></Link>/<span className={`text-black`}>{product?.name ||'' }</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'col-md-12'}>
                    <div className="flex flex-wrap">
                        <aside className={`col-md-5 side ${style.sideBar}` }>
                            <div className={style.mainImage}>
                                <img src={product?.attachments[currentImageIndex].url} alt="productview"/>
                            </div>
                            <div className={style.imagesThumb}>

                                {
                                    product?.attachments.map((itm,index)=>(
                                        <div className={`col-md-4 col-sm-4 ${style.imageThumb}` } key={index}>
                                            <img src={itm.thumbnailUrl} alt={product.name} onClick={()=>setCurrentImageIndex(index)}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </aside>
                        <div className={'col-md-7'}>
                            <div className={ `${style.productDetailsCover}`}>
                                {
                                    product?.isDeal &&
                                    <div className={`flex justify-space-between ${style.dealBadgeCover}`}>
                                        <div className={`deal-badge`}>
                                            Deals
                                        </div>

                                        <div className={`time-badge`}>
                                            <Countdown expired={product.dealExpires}/>
                                        </div>

                                    </div>

                                }
                                <h3 className={style.productName}>{product.name}</h3>
                                <p>{toCurrency(product.sellingPrice)}</p>
                                <div className={style.productDetails}>
                                    <p>
                                        {product.description}
                                    </p>
                                </div>
                                <p className={style.quantity}>
                                    Availability: 15 in stock
                                </p>
                                <div className={style.buttons}>
                                    {
                                        getButtons()
                                    }
                                </div>
                                <p>{(product._id in items)?'Item Added To Cart':''}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className={`flex flex-wrap ${style.bottomArea}`}>
                        <div className="col-md-5">
                            <div>
                                <Tab tabs={['Description','Reviews']}>
                                    <div className={style.description}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td className={style.descriptionTitle}>Year</td>
                                                <td className={style.descriptionValue}>2021</td>
                                            </tr>

                                            <tr>
                                                <td className={style.descriptionTitle}>Fuel Capacity</td>
                                                <td className={style.descriptionValue}>234 Litres</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className={style.reviews}>
                                        <div className={style.review}>
                                            <p>Fantastic Buy, Best car in town; i love the car</p>
                                            <div className={style.userDetails}><Icon path={mdiAccountCircleOutline} className={'icon'}/> Anonymous</div>
                                            <textarea rows={4}></textarea>
                                        </div>
                                    </div>
                                </Tab>
                            </div>
                        </div>
                        <div className={`col-md-7 ${style.otherProducts}`}>
                            <h3>Other Products</h3>
                            <div className="flex">
                                <ProductBox cols={6} style={{padding:'10px'}}/>
                                <ProductBox cols={6} style={{padding:'10px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export async function getServerSideProps(req){
    let product = null;
    try{
        const {id}= req.query;
        const {status,data} = await get(`https://api.tandtdeals.ng/v1/products/${id}`);
        if(status){
            product = data.data;
        }

    }catch (e) {

    }
    return {
        props:{product}
    }
}


ViewProduct.getLayout = function getLayout(page){
    return <Layouts className={`fullwidth product-page`}>
        {page}
    </Layouts>
}
export default ViewProduct;
