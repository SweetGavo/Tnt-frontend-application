import React from 'react';
import Head from "next/head";
import style from '../styles/Header.module.scss';
import globalStyle from '../styles/Global.module.scss';
import Link from "next/link";
import Icon from "@mdi/react";
import {mdiArrowRight} from "@mdi/js";
import Button from "./button";

function Header({children, justify='center'}) {
    return (
        <>
            <Head>
                <title>Tnt e-commerce</title>
                <meta name="description" content="No 1 e-commerce website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={`${style.header} container flex- ${justify}`}>
                {children}
            </header>
        </>
    );
}

export default Header;