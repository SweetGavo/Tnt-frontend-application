import React, {useEffect, useState} from 'react';
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


function Menu({items=()=>true,children}) {
    const [display,setDisplayStatus] = useState(false);

    function closeItem({target}){
        setDisplayStatus(false);
        removeListener(target);
    }

    function displayMenu(){
        setDisplayStatus(true);
       const body = document.querySelector('body');
       body.addEventListener('click',closeItem,true)
    }

    function removeListener(target){
        target.removeEventListener('click',closeItem);
    }
    return (
        <ul className={` ${style.menu}`} onClick={displayMenu} >
            {
                children
            } <Icon className={'icon'} path={mdiChevronDown}  />
            <ul className={`${style.menuChildren} ${display?style.menuActive:''}`}>
                {
                    items()
                }
            </ul>

        </ul>
    );
}

export default Menu;