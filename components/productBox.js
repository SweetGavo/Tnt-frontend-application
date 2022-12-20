import React from 'react';
import style from '../styles/ProductBox.module.scss'
import {toCurrency} from "../utils/helperFunctions";
import Link from "next/link";
function ProductBox({cols=4,product,...others}) {

    return (
        <div className={`${style.productBox} product-cover col-md-${cols} col-sm-12`} {...others} >
            <Link href={`/products/${product?._id}`}>
                <a>
                        <div className={` ${style.productImage}`}>
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
