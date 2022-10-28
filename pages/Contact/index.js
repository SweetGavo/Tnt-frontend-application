import React, {useRef, useState} from 'react';
import Layouts from "../../layouts/layouts";
import Button from "../../components/button";
import style from "../../styles/Registration.module.scss";
import {url} from "../../utils/urlHelpers";
import Alert from "../../components/alert";
import {post} from '../../utils/helperFunctions';
import {loginUser} from "../../store/reducers/auth";
import {useDispatch} from "react-redux";



function Index(props) {
    return (

    <div className={'flex contact-container'}>

        <div className={`col-md-6 ${style.sideContainer}`}>
            <img src={'images/Rectangle 5.png'}   />
            <div className={style.textContent}>
                
        </div>
        </div>
        <div className={`col-md-6`}>
            <div className={style.passwordcode}>
                <h1>We are always available</h1>
                
          <p>
              We look forward to hearing from / meeting you!
          </p>
          <p>
              3. John Great Court Alternative Route, Chevron Drive, Lekki-Epe Expressway,Lagos
          </p>
          <p>
              + 234 908 301 1144
          </p>
          <p>
              info@tandtdeals.ng
              enterprise@miratonrosematadorgroup.com
          </p>
    </div>
                

                
                
    <div className={style.btn}>
          <Button
            size={"sm"}
            style={"blue"}
            radius={5}
            className={style.buttons}
          >
            Get in touch
          </Button>
            </div>
        </div>
    </div>
);
}

Index.getLayout = function getLayout(page) {
return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default Index;







