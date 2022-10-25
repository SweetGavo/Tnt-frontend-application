import React,{useMemo} from 'react';
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
import {get} from "../../utils/helperFunctions";


function ViewProduct(props) {
    const router = useRouter();
    const path = useMemo(()=>{
        const path = router.pathname.split('/');
        path.splice(0,1);
        return path;
    },[router.pathname])
    return (
            <section className={style.productPageWrapper}>

                <div className="flex container flex-wrap">
                    <div className={`col-md-12 `}>
                        <div className={`flex flex-start ${style.topBar}`}>
                            <div className="col-md-3">
                                <p className={`${style.breadcrumbs} flex `}>
                                    <span >Home</span>{
                                    path.map((path,index) =>(
                                        <span  key={index}>
                                  {`/${path}`}
                              </span>
                                    ))
                                }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-12'}>
                        <div className="flex flex-wrap">
                            <aside className={`col-md-5 side ${style.sideBar}` }>
                                <div className={style.mainImage}>
                                    <img src="/images/product view.png" alt="productview"/>
                                </div>
                                <div className={style.imagesThumb}>
                                    <div className={`col-md-4 ${style.imageThumb}` }>
                                        <img src="/images/product-thumb.png" alt="productthumb"/>
                                    </div>
                                    <div className={`col-md-4 ${style.imageThumb}` }>
                                        <img src="/images/product-thumb.png" alt="productthumb"/>
                                    </div>
                                    <div className={`col-md-4 ${style.imageThumb}` }>
                                        <img src="/images/product-thumb.png" alt="productthumb"/>
                                    </div>
                                    <div className={`col-md-4 ${style.imageThumb}` }>
                                        <img src="/images/product-thumb.png" alt="productthumb"/>
                                    </div>
                                </div>
                            </aside>
                            <div className={'col-md-7'}>
                                <div className={ `${style.productDetailsCover}`}>
                                    <h3 className={style.productName}>Toyota Camry 2021</h3>
                                    <div className={style.productDetails}>
                                        <p>
                                            Ashok Leyland is often considered to be a pioneer in the bus and vans
                                            range. Ideal to transport a group of people whether medium or big,
                                            the armored Ashok Leyland bus is the vehicle of choice for many
                                            companies dealing in security measures.
                                        </p>
                                        <p>
                                            Ashok Leyland is often considered to be a pioneer in the bus and vans
                                            range. Ideal to transport a group of people whether medium or big,
                                            the armored Ashok Leyland bus is the vehicle of choice for many
                                            companies dealing in security measures.
                                        </p>
                                    </div>
                                    <p className={style.quantity}>
                                        Availability: 15 in stock
                                    </p>
                                    <div className={style.buttons}>
                                        <Button style={'blue'} size={'large'} radius={5}>Add to Cart</Button>
                                        <Button variant={'outline'}  style={'blue'} size={'large'} radius={5}>Book an inspection</Button>
                                    </div>
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
                                                {/* <p>"Fantastic Buy, Best car in town; i love the car"</p> */}
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



ViewProduct.getLayout = function getLayout(page){
    return <Layouts className={`fullwidth product-page`}>
        {page}
    </Layouts>
}
export default ViewProduct;