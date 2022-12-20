import React, {useEffect} from 'react';
import Layouts from "../layouts/layouts";
import Button from "../components/button";
import {mdiArrowRight, mdiCart, mdiChevronRight} from "@mdi/js";
import Icon from "@mdi/react";
import Style from "../styles/Home.module.scss"
import Link from "next/link";
import Tab from "../components/tab";
import {toCurrency} from "../utils/helperFunctions";

function Index(props) {
    useEffect(()=>{
        if('serviceWorker' in window.navigator){
            window.navigator.serviceWorker.register('/sw.js').then(w=>{
                Notification.requestPermission().then(permission=>{
                    console.log(permission);
                });
                console.log('service worker installed');
            }).catch(e=>{
                console.log(e.message);
            })

            window.navigator.serviceWorker.ready.then(worker=>{
                console.log(window.navigator.serviceWorker);
                window.navigator.serviceWorker.controller.postMessage({message:"hello this is the message i want to send"})
            }).catch(e=>{
                console.log(e.message);
            });

            window.navigator.serviceWorker.onmessage =(event)=>{
                console.log(event.data);
            }



            window.navigator.serviceWorker.startMessages();
        }
    },[])

    return (
        <>
         <section className={`${Style.bannerArea}`}>
             <div className={`container flex ${Style.bannerCover}`}>
                 <div className={`col-sm-12 ${Style.bannerTextArea}`}>

                     <h1 className={` ${Style.bannerTitle}`}>Bringing the best deals your way</h1>
                     <p>T and T Markets Limited resale of metal scrap materials,used company items like
                         Generators, Furniture, Electrical equipment, machineries and heavy equipment.</p>
                     <Link href={"/products"}>
                         <Button className={`${Style.button}`} size={'large'} radius={5}>Shop Now
                             <Icon path={mdiArrowRight} className={'icon'}/>
                         </Button>
                     </Link>

                 </div>

                 <div className={`col-sm-12 col-md-6 ${Style.bannerImageArea}`}>
                     <div className={Style.imageCover}>
                         <img src={`/images/home banner.png`} />
                     </div>
                     <div className={`flex flex-center ${Style.navButtons}`}>
                         <span className={`${Style.navButton} ${Style.navButtonActive}`}></span>
                         <span className={`${Style.navButton}`}></span>
                         <span className={`${Style.navButton}`}></span>
                     </div>

                 </div>
             </div>
         </section>

            <section>
                <div className={`container flex flex-center`}>
                    <div className={`col-md-12 ${Style.availProd}`}>
                        <div className={`${Style.top}`}>
                            <h3 className={`text-black title`}>Available products</h3>
                            <hr/>
                        </div>
                        <div className={`${Style.content}`}>
                            <Tab tabs={['vehincles','phones','drugs','accessories']}>
                                <div className={`flex flex-wrap ${Style.productsContainer}`}>
                                    <div className={`col-md-6 ${Style.item}`}>
                                        <article>
                                            <div className={`${Style.imageCover}`}>
                                                <img src="/images/2016-Toyota-C-HR-exterior-static-8-e1479105090829-1200x630-removebg-preview%201display.png" alt="tnt-product"/>
                                            </div>
                                            <div className={`flex justify-space-between ${Style.productsCover}`}>

                                                <div className={`${Style.productDetails}`}>
                                                    <h4 className={`no-margin`}>Toyota Camry</h4>
                                                    <p className={`no-margin`}>{toCurrency(2400)}</p>
                                                </div>
                                                <Button variant={'outline'} className={`${Style.cartButton}`} >
                                                    Add to Cart <Icon path={mdiCart} className={'icon'} />
                                                </Button>
                                            </div>
                                        </article>

                                    </div>
                                    <div className={`col-md-6 ${Style.item}`}>
                                        <article>
                                            <div className={`${Style.imageCover}`}>
                                                <img src="/images/2016-Toyota-C-HR-exterior-static-8-e1479105090829-1200x630-removebg-preview%201display.png" alt="tnt-product"/>
                                            </div>
                                            <div className={`flex justify-space-between`}>

                                                <div className={`${Style.productDetails}`}>
                                                    <h4 className={`no-margin`}>Toyota Camry</h4>
                                                    <p className={`no-margin`}>{toCurrency(2400)}</p>
                                                </div>
                                                <Button variant={'outline'} className={`${Style.cartButton}`} >
                                                    Add to Cart <Icon path={mdiCart} className={'icon'} />
                                                </Button>
                                            </div>
                                        </article>

                                    </div>
                                    <div className={`col-md-6 ${Style.item}`}>
                                        <article>
                                            <div className={`${Style.imageCover}`}>
                                                <img src="/images/2016-Toyota-C-HR-exterior-static-8-e1479105090829-1200x630-removebg-preview%201display.png" alt="tnt-product"/>
                                            </div>
                                            <div className={`flex justify-space-between`}>

                                                <div className={`${Style.productDetails}`}>
                                                    <h4 className={`no-margin`}>Toyota Camry</h4>
                                                    <p className={`no-margin`}>{toCurrency(2400)}</p>
                                                </div>
                                                <Button variant={'outline'} className={`${Style.cartButton} cart-button`} >
                                                    Add to Cart <Icon path={mdiCart} className={'icon'} />
                                                </Button>
                                            </div>
                                        </article>

                                    </div>
                                    <div className={`col-md-6 flex flex-align-center justify-center ${Style.item}`}>
                                        <Link href={"/products"}>
                                            <Button className={`shopNowButton ${Style.button}`} style={'blue'} size={'large'} radius={5}>Shop Now
                                                <Icon path={mdiArrowRight} className={'icon'}/>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`flex flex-wrap ${Style.productsContainer}`}>
                                    <div className={`col-md-6 ${Style.item}`}>

                                    </div>
                                    <div className={`col-md-6 ${Style.item}`}>

                                    </div>
                                    <div className={`col-md-6 ${Style.item}`}>

                                    </div>
                                </div>
                                <div className={`flex flex-wrap ${Style.productsContainer}`}>
                                    <div className={`col-md-6 ${Style.item}`}>

                                    </div>
                                    <div className={`col-md-6 ${Style.item}`}>

                                    </div>
                                    <div className={`col-md-6 ${Style.item}`}>

                                    </div>
                                </div>
                                <div className={`flex  flex-wrap ${Style.productsContainer}`}>
                                    <div className={`col-md-6 ${Style.item}`}>

                                    </div>
                                    <div className={`col-md-6 ${Style.item}`}>

                                    </div>
                                    <div className={`col-md-6 ${Style.item}`}>

                                    </div>
                                </div>

                            </Tab>
                        </div>


                    </div>

                </div>
            </section>

            <section className={``}>
                <div className={`container flex flex-center `}>
                    <div className={`col-md-12 text-center ${Style.wtc}`}>
                            <h3 className={`black`}>Reasons to use TandT deals</h3>
                            <p className={`black`}>
                                T and T Markets Limited resale of metal scrap materials,used company
                                items like Generators, Furniture, Electrical equipment, machineries and
                                heavy equipment.
                            </p>
                    </div>
                </div>
            </section>

            <section className={`${Style.servicesSection}`}>
                <div className={`container flex flex-wrap`}>
                    <div className={`col-md-6 flex content-center column ${Style.textContainer}`}>
                        <h3>A range of products</h3>
                        <p className={`black`} style={{lineHeight:'30px'}}>T and T Markets Limited resale of metal scrap materials,used
                            company items like Generators, Furniture, Electrical equipment,
                            machineries and heavy equipment.
                        </p>
                        <Link href={"/products"}>
                            <Button className={`shopNowButton ${Style.button}`} style={'blue'} size={'large'} radius={5}>Shop Now
                                <Icon path={mdiArrowRight} className={'icon'}/>
                            </Button>
                        </Link>

                    </div>

                    <div className={`col-md-6`}>
                        <img src="/images/range products.jpg" />
                    </div>
                </div>
            </section>
            <section className={`${Style.servicesSection}`}>
                <div className={`container flex flex-wrap`}>
                    <div className={`col-md-6 flex content-center column ${Style.textContainer}`}>
                        <h3>Order from anywhere</h3>
                        <p className={`black`} style={{lineHeight:'30px'}}>T and T Markets Limited resale of metal scrap materials,used
                            company items like Generators, Furniture, Electrical equipment,
                            machineries and heavy equipment.
                        </p>
                        <Link href={"/products"}>
                            <Button className={`shopNowButton ${Style.button}`} style={'blue'} size={'large'} radius={5}>Shop Now
                                <Icon path={mdiArrowRight} className={'icon'}/>
                            </Button>
                        </Link>

                    </div>

                    <div className={`col-md-6`}>
                        <img src="/images/order anywhere.jpg" />
                    </div>
                </div>
            </section>

            <section className={Style.wed}>
                <div className={`container flex flex-wrap`}>
                    <div className={`col-md-12 ${Style.top}`}>
                        <h3>What we do with ease</h3>
                        <hr/>
                    </div>

                    <div className={`${Style.contentArea}`}>
                        <div className="flex flex-wrap">
                            <div className={`col-md-4 ${Style.eachItem}`}>
                                <img src="/images/trend%201valuation.png" alt=""/>
                                <h3>Free valuation</h3>
                                <p>Unused asset and asset with zero shelf
                                    life can be uploaded to increase asset
                                    turn around time in corporations. </p>
                            </div>
                            <div className={`col-md-4 ${Style.eachItem}`}>
                                <img src="/images/decision-making%201.png" alt=""/>
                                <h3>Instant decision</h3>
                                <p>Create up-to-date designs without writing a
                                    single line of code. Build clean, minimalistic,
                                    beautifully crafted websites</p>
                            </div>
                            <div className={`col-md-4 ${Style.eachItem}`}>
                                <img src="/images/web-security%201.png" alt=""/>
                                <h3>24hrs Payment</h3>
                                <p>Confirmation of payment in 24 hours; once
                                    our terms and conditions for fees has been
                                    agreed to. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={Style.testimonials}>
                    <div className={`container flex flex-wrap`}>
                        <div className={`col-md-12 ${Style.top}`}>
                            <h3>Testimonials</h3>
                            <p>Feedbacks are the backbone of a business. We listen to our customers, you should do likewise</p>
                        </div>

                        <div className={`flex flex-wrap col-md-12 ${Style.content}`}>
                            <div className={`col-md-6 col-sm-12`}>
                                    <div className={`${Style.testimonialsList} flex flex-end flex-wrap`}>
                                            <div className={`${Style.testimonial} ${Style.active} flex`}>
                                                <div className={`${Style.profileImage}`}>
                                                    <img src="/images/Ellipse%201.jpg" alt=""/>
                                                </div>
                                                <div className={`${Style.testimonialDetails} flex column content-center`}>
                                                    <h5>Adewole Balogun</h5>
                                                    <p>Ass. Operations manager, GTBank</p>
                                                </div>
                                            </div>
                                            <div className={`${Style.testimonial} flex `}>
                                                <div className={`${Style.profileImage}`}>
                                                    <img src="/images/Ellipse%201.jpg" alt=""/>
                                                </div>
                                                <div className={`${Style.testimonialDetails} flex column content-center`}>
                                                    <h5>Busolami Adefoluke</h5>
                                                    <p>Sales manager, Vermal Cars</p>
                                                </div>
                                            </div>
                                            <div className={`${Style.testimonial} flex `}>
                                                <div className={`${Style.profileImage}`}>
                                                    <img src="/images/Ellipse%201.jpg" alt=""/>
                                                </div>
                                                <div className={`${Style.testimonialDetails} flex column content-center`}>
                                                    <h5>Paulina Stevens</h5>
                                                    <p>Sales manager, Vermal Cars</p>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                            <div className={`col-md-6 col-sm-12`}>
                                <div className={`${Style.testimony}`}>
                                    <h3 className={`title`}>Great Experience</h3>
                                    <img src="/images/rating.png" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque fermentum suscipit arcu enim
                                        vestibulum, donec.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque fermentum suscipit arcu enim
                                        vestibulum, donec.</p>
                                </div>

                            </div>
                        </div>
                    </div>
            </section>

            <section className={`${Style.aun}`}>
                <div className={`flex flex-center flex-align-center ${Style.contentContainer}`}>
                    <div className={`col-md-12 text-center ${Style.wtc}`}>
                        <h3 className={`text-white`}>One market with all you need</h3>
                        <p className={`text-white`}>
                            T and T Markets Limited resale of metal scrap materials,used company
                            items like Generators, Furniture, Electrical equipment, machineries and
                            heavy equipment.
                        </p>
                        <Link href={'/products'}>
                            <Button className={`${Style.button}`} size={'large'} radius={5}>Shop Now
                                <Icon path={mdiArrowRight} className={'icon'}/>
                            </Button>
                        </Link>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;

Index.getLayout = function getLayout(page){
    return <Layouts className={`home`}>
        {page}
    </Layouts>
}
