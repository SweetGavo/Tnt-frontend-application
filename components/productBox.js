import React from 'react';
import style from '../styles/ProductBox.module.scss'
import {toCurrency} from "../utils/helperFunctions";
import Link from "next/link";
import Countdown from "./countdown";
function ProductBox({cols=4,product,...others}) {

    return (
        <div className={`${style.productBox} product-cover col-md-${cols} col-sm-12`} {...others} >
            <Link href={`/products/${product?._id}`}>
                <a>
                        <div className={` ${style.productImage}`}>
                            {
                                product?.isDeal &&
                                <div>
                                    <div className={`deal-badge`}>
                                        Deals
                                    </div>

                                    <div className={`time-badge`}>
                                        <Countdown expired={product.dealExpires}/>
                                    </div>

                                </div>

                            }

                            <img src={product?.attachments[0].url} alt=""/>
                        </div>

                        <div className={style.productInfo}>
                            <p className={style.productName}>{product?.name}</p>
                            <h4 className={style.productPrice}> {toCurrency(product?.sellingPrice||0)}</h4>
                        </div>
                </a>

            </Link>

        </div>
    );
}

export default ProductBox;
