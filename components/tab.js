import React, {memo, useMemo, useState} from 'react';
import style from '../styles/Tab.module.scss';

function Tab({tabs,children=[],className}) {
    const [currentTab,setCurrentTab]  = useState(0);

    const tabView = useMemo(()=>{
     return (
         tabs.map((tab,index)=><a className={`${style.tab} ${(currentTab===index)?'active':''}`} key={index} onClick={()=>setCurrentTab(index)}>{tab}</a>)
     )
    },[tabs,currentTab,setCurrentTab])
    return (
        <div className={style.tabsCover+' tabs-cover'}>
            <div className={style.tabs+' tabs'}>
                {
                    tabView
                }
            </div>
            <div className={style.tabContent+' tabs-content'}>
                {
                    children[currentTab] || ''
                }
            </div>
        </div>
    );
}

export default memo(Tab);