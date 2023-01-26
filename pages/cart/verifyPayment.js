import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {get} from "../../utils/helperFunctions";
import {url} from "../../utils/urlHelpers";
import Layouts from "../../layouts/layouts";
import {useDispatch} from "react-redux";
import {clearCart} from "../../store/reducers/cart";
import Link from "next/link";
import Button from "../../components/button";
import Style from "../../styles/Home.module.scss";
import Icon from "@mdi/react";
import {mdiArrowRight} from "@mdi/js";

function VerifyPayment(props) {
    const router = useRouter();
    const dispatch = useDispatch();

    const [response,setResponse] = useState({
        type: 'info',
        message: "verifying Payment Status"
    })

    useEffect(()=>{

        get(`${url.verifyPaymentUrl}?reference=${router?.query?.reference}`)
            .then((resp)=>{
                if(resp?.data?.data?.status?.toLowerCase() === 'success' ) {
                    setResponse({
                        type: 'success',
                        message:  "Payment was successful"
                    })

                    dispatch(clearCart())
                }
            }).catch((err)=>{
            const message = err?.response?.data?.message || err.message

            setResponse(v => ({ type: 'error',message}));
        });
    },[]);

    return (
        <div className={'verifyPayment'}>
                <p className={`text-${response.type}`}>
                    {response.message}
                </p>

            <Link href={"/products"}>
                <Button className={`${Style.button}`} size={'large'} radius={5}>
                    Go Back To Shopping
                </Button>
            </Link>
        </div>
    );
}

VerifyPayment.getInitialProps = ()=>{
    return {}
}


VerifyPayment.getLayout = function getLayout(page) {
    return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default VerifyPayment;
