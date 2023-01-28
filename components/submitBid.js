import React, {useRef, useState} from 'react';
import BidForm from "./bidForm";
import {post} from "../utils/helperFunctions";
import {url} from "../utils/urlHelpers";
import Alert from "./alert";
import {mdiClose} from "@mdi/js";
import style from "../styles/Global.module.scss";
import Icon from "@mdi/react";
import ReviewBooking from "./reviewBooking";
const initialData= {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    amount: '',
}
function SubmitBid({product,closeModal}) {
    const [currentView,setCurrentView] = useState('form')
    const [form,setFormField] = useState(initialData)
    const [response,setResponse] = useState({
        type:'error',
        message:""
    })

    const alertRef = useRef()

    function submitBid(){
        const {amount,email,...tail} = form;
        const data = {
            product: product._id,
            email,
            amount,
             user:{...tail,email},
            callbackUrl: `${window.location.origin}/cart/verifyPayment`
        }
        if(form.amount > product.sellingPrice){
            post(url.submitBid,data)
                .then(({
                           data: {
                               data : {
                                   authorization_url
                               } = {}
                           } = {}
                       })=>{

                    setCurrentView('review')

                    if (authorization_url) {
                        setTimeout(()=> {
                            window.location.href = authorization_url;
                        },3000);
                    }
                })
                .catch ( err=>{
                    const message = err?.response?.data?.message || err.message
                    setResponse(v => ({ type: 'error',message}));
                    alertRef.current.scrollIntoView();
                });
        }
    }

    function hideModal() {
        setCurrentView('form');
        closeModal();
    }

    function setData(e){
        const {name,value} = e.target;
        setFormField((v)=>({...v,[name]:value}));
    }

    function closeAlert(){
        setResponse(v =>({...v, message:''}))
    }

    const views = {
        form : <BidForm setData={setData} form={form} submitBid={submitBid} />,
        review: <ReviewBooking
            done={hideModal}
            title={"Bidding Successfully Submitted"}
            text={"Bid booked successfully you will be redirected to make payment in 5 seconds"}
        />
    }

    return (
        <div className={style.bookInspection}>
            <div>
                <Icon
                    path={mdiClose}
                    className={`icon ${style.closeIcon}`}
                    onClick={hideModal}
                />
                <div ref={alertRef}>
                    <Alert  type={response.type} message={response.message} closeAlert={closeAlert} />
                </div>
                {
                    views[currentView]
                }
            </div>
        </div>
    );
}

export default SubmitBid;
