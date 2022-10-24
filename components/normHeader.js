import React from 'react';
import Header from "./header";
import style from "../styles/Header.module.scss";
import Link from "next/link";
import Button from "./button";
import Icon from "@mdi/react";
import {mdiArrowRight, mdiCartOutline, mdiChevronDown} from "@mdi/js";
import {useDispatch, useSelector} from "react-redux";
import Menu, {MenuItem} from "./menu";
import {logoutUser} from "../store/reducers/auth";

function NormHeader(props) {
    const dispatch = useDispatch();
    const {auth:{isLogin,user},cart:{itemsId}} = useSelector(s=>s);
    function logout(){
        dispatch(logoutUser());
    }
    function sideHeader(){
        if (isLogin){
            return (
                <>
                    <Link href={'/cart'}><a className={style.cartIcon} cartNumber={itemsId.length}><Icon className={'icon'} path={mdiCartOutline} /></a></Link>
                    <a className={`${style.profilePhoto}`}>


                        <Menu items={()=>{
                            return (
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            )
                        }}>
                            <img src="/images/profile.png" alt="profile image" className={'profile-image'}/>

                        </Menu>

                    </a>
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