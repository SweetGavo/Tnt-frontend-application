import React from 'react';
import Link from "next/link";
import style from '../styles/footer.module.scss';
import Icon from "@mdi/react";
import {mdiFacebook, mdiInstagram, mdiTwitter} from "@mdi/js";
function Footer(props) {
    return (
        <footer>
            <div className={style.top}>
                <Link href={'/'}>
                    <a>Home</a>
                </Link><Link href={'/about-us'}>
                    <a>About us</a>
                </Link><Link href={'/services'}>
                    <a>Service</a>
                </Link><Link href={'/contact'}>
                    <a>Contact</a>
                </Link>
            </div>
            <div className={`${style.bottom} flex justify-space-between flex-align-center`}>
                <p className={`${style.copyright}`}>
                    Copyright © 2022 TandT Deal Markets | Credits
                </p>

                <div className={`${style.icons}`}>
                    <Icon path={mdiFacebook} className={`icon`}/>
                    <Icon path={mdiInstagram} className={`icon`}/>
                    <Icon path={mdiTwitter} className={`icon`}/>
                </div>

            </div>
        </footer>
    );
}

export default Footer;