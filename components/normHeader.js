import React from 'react';
import Header from "./header";
import style from "../styles/Header.module.scss";
import Link from "next/link";
import Button from "./button";
import Icon from "@mdi/react";
import {mdiArrowRight, mdiCartOutline, mdiChevronDown} from "@mdi/js";
import {useSelector} from "react-redux";

function NormHeader(props) {
    const {isLogin,user} = useSelector(s=>s.auth);
    function sideHeader(){
        if (isLogin){
            return (
                <>
                    <Icon className={'icon'} path={mdiCartOutline} />
                    <img src="/images/profile.png" alt="profile image" className={'profile-image'}/>
                    <Icon className={'icon'} path={mdiChevronDown} />
                </>
            )
        }

        return (
            <>
                <li  className={style.menuItems}>
                    <Link href={'/login'}>Login</Link>
                </li>
                <Button  size={'large'}>
                    Shop Now  <Icon className={'icon'} path={mdiArrowRight} />
                </Button>
            </>
        )
    }
    
    return (
        <Header>
            <div className={style.logoContainer}>
            </div>
            <div className={'col-md-3'}>
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
            <div className={style.sideItems+' col-md-3'}>
                {sideHeader()}
            </div>
        </Header>
    );
}

export default NormHeader;