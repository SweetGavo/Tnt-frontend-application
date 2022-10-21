import React, {memo, useMemo, useState} from 'react';
import style from '../styles/Tab.module.scss';

function Tab({tabs,children=[]}) {
    const [currentTab,setCurrentTab]  = useState(0);

    const tabView = useMemo(()=>{
     return (
         tabs.map((tab,index)=><a className={`${style.tab} ${(currentTab===index)?style.active:''}`} key={index} onClick={()=>setCurrentTab(index)}>{tab}</a>)
     )
    },[tabs,currentTab,setCurrentTab])
    return (
        <div className={style.tabsCover}>
            <div className={style.tabs}>
                {
                    tabView
                }
            </div>
            <div className={style.tabContent}>
                {
                    children[currentTab] || ''
                }
            </div>
        </div>
    );
}

export default memo(Tab);