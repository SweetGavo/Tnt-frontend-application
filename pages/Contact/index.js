import React, {} from 'react';
import Layouts from "../../layouts/layouts";
import Button from "../../components/button";
import style from "../../styles/Registration.module.scss";



function Index(props) {
    return (
        <div>

    <div className={'flex contact-container'}>

        <div className={`col-md-6`}>
            <div className={style.textContent}>
            <img  src='/images/Headphones.png' alt='headphone'/>
            
            </div>
        </div>
        <div className={`col-md-6 `}>
            <div className={style.formContainer}>
                <h1>We are always available</h1>
          <p>
             We look forward to hearing from and meeting you!
          </p>
          <p>
            <img src={'images/Vecto.png'} />  3. John Great Court Alternative Route, Chevron Drive, Lekki-Epe Expressway,Lagos
          </p>
          <p>
            <img src={'images/Vector (3).png'} />  + 234 908 301 1144
          </p>
          <p>
            <img src={'images/Vector (2).png'} /> info@tandtdeals.ng
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
    <div className= {style.map}>
     <div className={style.backgroundmap}>
     <img  src='/images/map.png' alt='map'/>

     </div>
        
    </div>
    </div>

);
}

                
                

Index.getLayout = function getLayout(page) {
return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default Index;







