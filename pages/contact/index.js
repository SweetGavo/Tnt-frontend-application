import React, {} from 'react';
import Layouts from "../../layouts/layouts";
import Button from "../../components/button";
import style from "../../styles/contact.module.scss"


function Index(props) {
    return (
        <div className={style.contact}>
            <section className={style.addressSection}>
                <div className={'flex container'}>

                    <div className={`col-md-6`}>
                        <div className={style.imageCover}>
                            <img  src='/images/Headphones.png' alt='headphone'/>
                        </div>
                    </div>
                    <div className={`col-md-6 ${style.addressDetails}`}>
                        <div >
                            <h3 className={`title`}>We are always available</h3>
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

                            <Button
                                size={"sm"}
                                style={"blue"}
                                radius={5}
                            >
                                Get in touch
                            </Button>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className={`container`}>
                    <img  src='/images/map.png' alt='map'/>
                </div>
            </section>
    </div>

);
}

                
                

Index.getLayout = function getLayout(page) {
return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default Index;







