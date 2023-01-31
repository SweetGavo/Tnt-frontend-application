import React from 'react';
import Layouts from "../../layouts/layouts";
import axios from "axios";
import style from '../../styles/Order.module.scss';

import {url} from "../../utils/urlHelpers";
import products from "../products";
import {toCurrency} from "../../utils/helperFunctions";

function ViewOrder({
                       order : {
                           user,
                           email,
                           orderId,
                           total,
                           status,
                           paid,
                           items
                       } = {}
}) {
    return(
    <div className={`container ${style.OrderContainer}`}>

        <h1 className={'title'}>Order Details</h1>

        <div className={`card`}>
            <div className={'card-title'}>
                <h2>Customer Details</h2>
            </div>
            <div className={'card-content'}>
                <h3>Name</h3>
                <p className={'text-capitalize'}>{user?.firstName} {user?.lastName}</p>

                <h3>Email</h3>
                <p>{email}</p>
            </div>
        </div>

        <div className={`card`}>
            <div className={'card-title'}>
                <h2>Products</h2>
            </div>
            <div className={`card-content ${style.orderItems}`}>
                {
                    items?.map(({product,quantity})=>(
                        <div className={`${style.orderItem} flex`}>
                            <div className={style.imageCover}>
                                <img src={product?.attachments[0].url} alt={product?.name} />
                            </div>
                            <div className={` ${style.productDescriptions}`}>
                                    <h3>{product?.name}</h3>
                                    <p>{product.description}</p>
                            </div>
                            <div className={`flex justify-space-between ${style.priceDetails}`}>
                                <p>X {quantity}</p>
                                <p>{toCurrency(product?.price)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={`card-footer flex flex-end`}>
                <p className={'flex'}>Total  <span>{toCurrency(total)}</span></p>
            </div>
        </div>

        <div className={`card ${style.orderDetails}`}>
            <div className={`card-title`}>
                <h2>Order Details</h2>
            </div>
            <div className={'card-content'}>
                <h3>Order Id</h3>
                 <p>{orderId}</p>
                <h3>Total</h3>
                <p>{toCurrency(total)}</p>
                <h3>Status</h3>
                <p className={'paymentStatus flex text-capitalize'}>{status}  <span className={`${paid?'text-green':'text-black'}`}> {(paid)?'complete':'incomplete'}</span></p>
            </div>
        </div>

    </div>
    )

}

export async function getServerSideProps(req) {
    let order = null
    try {
        const {id} = req.query;
        const response = await axios.get(`${url.ordersUrl}/${id}`);
        order = response?.data?.data || null
    }catch (e) {
        console.log(e.message)
    }
    return {
        props:{
            order
        }
    }
}

ViewOrder.getLayout = function getLayout(page) {
    return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default ViewOrder;
