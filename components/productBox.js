import React from 'react';
import style from '../styles/ProductBox.module.scss'
import {toCurrency} from "../utils/helperFunctions";
function ProductBox(props) {
    return (
        <div className={`${style.productBox} col-md-4`}>
            <div className={` ${style.productImage}`}>
                <img src="/images/Rectangle 2.png" alt=""/>
            </div>
            <div className={style.productInfo}>
                <p className={style.productName}>Black Mercedes C350 2018</p>
                <h4 className={style.productPrice}> {toCurrency(35000000)}</h4>
            </div>
        </div>
    );
}

export default ProductBox;