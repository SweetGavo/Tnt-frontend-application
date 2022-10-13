import React, {useMemo} from 'react';
import Layouts from "../../layouts/layouts";
import TextField from "../../components/textField";
import style from "../../styles/products.module.scss";
import {useRouter} from "next/router";
function Index(props) {
    const router = useRouter();
    const path = useMemo(()=>{
        const path = router.pathname.split('/');
        path.splice(0,1);
        return path;
    },[router.pathname])

    return (
        <section className={'flex container flex-wrap'}>
            <div className={`col-md-12 `}>
                <div className={`flex flex-start ${style.topBar}`}>
                    <div className="col-md-3">
                        <p className={`${style.breadcrumbs} flex `}>
                            <span >Home</span>{
                            path.map((path,index) =>(
                              <span  key={index}>
                                  {`/${path}`}
                              </span>
                            ))
                        }
                        </p>
                    </div>
                    <div className={ `col-md-6`}>
                                <TextField placeholder={'search products by keyword'} radius={50} className={'outline '+style.searchBar}  />
                    </div>
                    <div className="col-md-3" >
                        <div className={style.filter+' flex flex-end'}>
                            <select className={'input'}>
                                <option>Sort by</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
            <aside className="col-md-3 side">
                    <h2 className="title">

                    </h2>

            </aside>
            <div className={'col-md-9'}>

            </div>
        </section>
    );
}

Index.getLayout = function getLayout(page){
    return (<Layouts className={`fullwidth product-page`}>
        {
            page
        }
    </Layouts>)
}

export default Index;

