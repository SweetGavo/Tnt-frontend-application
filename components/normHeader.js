import React from 'react';
import Header from "./header";
import style from "../styles/Header.module.scss";
import Link from "next/link";
import Button from "./button";
import Icon from "@mdi/react";
import {mdiArrowRight} from "@mdi/js";

function NormHeader(props) {
    return (
        <Header>
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
                <Button radius={5}  size={'large'}>
                    Shop Now  <Icon className={'icon'} path={mdiArrowRight} />
                </Button>
            </div>
        </Header>
    );
}

export default NormHeader;