import React from 'react';
import Layouts from "../../layouts/layouts";
import style from "../../styles/services.module.scss"
import Button from "../../components/button";

function Index(props) {
    return (
        <div className={`${style.services}`}>
            <section className={`${style.intro}`}>
                <div className={`container`}>
                    <h3 className={`title`}>
                        What we do
                    </h3>
                    <p>
                        T and T Markets Limited; a subsidiary of Miraton Matador Group started out in 1992 as a chain of
                        auctioneers involved in General trading; resale of metal scrap materials, used company items
                        like
                        Generators, Furniture, Electrical equipment, machineries and heavy equipment.
                    </p>

                    <Button style={`blue`} radius={5}>
                        Learn more
                    </Button>
                </div>
            </section>
            <section className={`${style.service}`}>
                <div className={`container`}>
                    <div className={`flex ${style.serviceDescription}`}>
                        <div className={style.underlay}></div>
                        <div className={`col-md-6`}>
                            <div className={style.textCover}>
                                <h3>Assets Buying</h3>
                                <p>T and T Markets Limited; a subsidiary of Miraton Matador Group
                                    started out in 1992 as a chain of auctioneers involved in General
                                    trading; resale of metal scrap materials, used company items like
                                    Generators, Furniture, Electrical equipment, machineries and
                                    heavy equipment.

                                </p>
                            </div>

                        </div>
                        <div className={`col-md-6`}>
                            <img src="/images/Rectangle 2729asset.png" alt=""/>
                        </div>
                    </div>
                    <div className={`${style.serviceLists}`}>
                        <h3>Assets we are involved in</h3>
                        <div className={`flex ${style.lists}`}>
                            <div className={`col-md-4 ${style.item}`}>
                                <p className={`text-black`}><img src="/images/Group%207275assetsicon.png" alt=""/> Used generators</p>
                                <img src="/images/Rectangle%202used%20generators.png" alt=""/>
                            </div>
                            <div className={`col-md-4 ${style.item}`}>
                                <p className={`text-black`}><img src="/images/Group%207275assetsicon.png" alt=""/> Used cars</p>
                                <img src="/images/Rectangle%203used%20cars.png" alt=""/>
                            </div>
                            <div className={`col-md-4 ${style.item}`}>
                                <p className={`text-black`}><img src="/images/Group%207275assetsicon.png" alt=""/> Used air conditioning units</p>
                                <img src="/images/Rectangle%204air%20condition.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.service}`}>
                <div className={`container`}>
                    <div className={`flex ${style.serviceDescription} ${style.reverseDescription}`}>
                        <div className={style.underlay}></div>
                        <div className={`col-md-6`}>
                            <div className={style.textCover}>
                                <h3>Sales of items</h3>
                                <p>T and T Markets Limited; a subsidiary of Miraton Matador Group
                                    started out in 1992 as a chain of auctioneers involved in General
                                    trading; resale of metal scrap materials, used company items like
                                    Generators, Furniture, Electrical equipment, machineries and
                                    heavy equipment.
                                </p>
                            </div>

                        </div>
                        <div className={`col-md-6`}>
                            <img src="/images/Rectangle 2729asset.png" alt=""/>
                        </div>
                    </div>
                    <div className={`${style.serviceLists}`}>
                        <h3>Assets we are involved in</h3>
                        <div className={`flex ${style.lists}`}>
                            <div className={`col-md-4 ${style.item}`}>
                                <p className={`text-black`}><img src="/images/Group%207275assetsicon.png" alt=""/> Metal scraps</p>
                                <img src="/images/recycle.png" alt=""/>
                            </div>
                            <div className={`col-md-4 ${style.item}`}>
                                <p className={`text-black`}><img src="/images/Group%207275assetsicon.png" alt=""/>Used office furniture</p>
                                <img src="/images/office furniture.png" alt=""/>
                            </div>
                            <div className={`col-md-4 ${style.item}`}>
                                <p className={`text-black`}><img src="/images/Group%207275assetsicon.png" alt=""/> Used household items</p>
                                <img src="/images/kitchen.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${style.service}`}>
                <div className={`container`}>
                    <div className={`flex ${style.serviceDescription}`}>
                        <div className={style.underlay}></div>
                        <div className={`col-md-6`}>
                            <div className={style.textCover}>
                                <h3>Assets Disposal</h3>
                                <p>T and T Markets Limited; a subsidiary of Miraton Matador Group
                                    started out in 1992 as a chain of auctioneers involved in General
                                    trading; resale of metal scrap materials, used company items like
                                    Generators, Furniture, Electrical equipment, machineries and
                                    heavy equipment.
                                </p>
                            </div>

                        </div>
                        <div className={`col-md-6`}>
                            <img src="/images/asset disposal.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

Index.getLayout = function getLayout(page){
    return <Layouts>{page}</Layouts>
}

export default Index;