import React from 'react';
import Layouts from "../../layouts/layouts";
import Style from "../../styles/order.module.scss"
import context from "react-redux/src/components/Context";
import axios from "axios";

function ViewOrder(props) {
    return(
    <div>

    </div>
    )

}

export async function getServerSideProps(req) {
    let order = null
    try {
        const {id} = req.query;
     const data = await axios.get(`${url.orders}/${id}`);

    }catch (e) {
        console.log(e.message)
    }
    return {
        order
    }
}

ViewOrder.getLayout = function getLayout(page) {
    return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default ViewOroduct;
