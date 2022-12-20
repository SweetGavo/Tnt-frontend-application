import React, {useEffect, useRef, useState} from 'react';
import style from '../styles/menu.module.scss';
import {mdiChevronDown} from "@mdi/js";
import Icon from "@mdi/react";

export function MenuItem({className='',children,...others}){
    return (
        <li className={`${style.menuItem} ${className}`} {...others}>
        {
            children
        }
    </li>);
}


function Menu({items=()=>true,children,className}) {
    const [display,setDisplayStatus] = useState(false);
    const currentDisplay = useRef("")
    function closeItem({target}){
        setDisplayStatus(false);
        removeListener(target);
    }


    function displayMenu(){
        const body = document.querySelector('body');
        if(currentDisplay.current){
            setDisplayStatus(false)
            currentDisplay.current = false;
            removeListener(body)
        }else {
            setDisplayStatus(true)
            currentDisplay.current = true;
            body.addEventListener('click',closeItem,true)
        }
    }

    function removeListener(target){
        target.removeEventListener('click',closeItem);
    }

    return (
        <ul className={` ${style.menu} ${className}`} onClick={displayMenu} >
            {
                children
            } <Icon className={'icon'} path={mdiChevronDown}  />
            <ul className={`${style.menuChildren} ${display?style.menuActive:''}`} >
                {
                    items()
                }
            </ul>

        </ul>
    );
}

export default Menu;
