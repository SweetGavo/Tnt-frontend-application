import React from 'react';
import Head from "next/head";
import style from '../styles/Header.module.scss';
import globalStyle from '../styles/Global.module.scss';
import Link from "next/link";
import Icon from "@mdi/react";
import {mdiArrowRight} from "@mdi/js";

function Header(props) {
    return (
        <>
            <Head>
                <title>Tnt e-commerce</title>
                <meta name="description" content="No 1 e-commerce website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={`${style.header} container`}>

                <div className={style.logoContainer}>

                </div>
                <nav className={style.nav}>
                    <ul className={style.menu}>
                        <li  className={style.menuItems}>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li  className={style.menuItems}>
                            <Link href={'/about-us'}>About us</Link>
                        </li>
                        <li  className={style.menuItems}>
                            <Link href={'/service'}>Service</Link>
                        </li>
                        <li  className={style.menuItems}>
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className={style.sideItems}>
                    <li  className={style.menuItems}>
                        <Link href={'/login'}>Login</Link>
                    </li>
                    <a className={'btn btn-large btn-black'}>
                        Shop Now  <Icon className={'icon'} path={mdiArrowRight} />
                    </a>
                </div>
            </header>
        </>
    );
}

export default Header;