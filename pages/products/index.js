import React, { useMemo } from "react";
import Layouts from "../../layouts/layouts";
import TextField from "../../components/textField";
import style from "../../styles/products.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import ProductBox from "../../components/productBox";
import Icon from "@mdi/react";
import { mdiArrowRight, mdiMagnify } from "@mdi/js";
import {get} from "../../utils/helperFunctions";
import GuardLayout from "../../layouts/guardLayout";
function Index({products}) {
  const router = useRouter();
  const path = useMemo(() => {
    const path = router.pathname.split("/");
    path.splice(0, 1);
    return path;
  }, [router.pathname]);

  return (
    <section className={style.productPageWrapper}>
      <div className="flex container flex-wrap">
        <div className={`col-md-12 col-sm-12`}>
          <div className={`flex flex-start ${style.topBar}`}>
            <div className="col-md-3 ">
              <p className={`${style.breadcrumbs} flex `}>
                <span className={`text-green`}>Home</span>
                {path.map((path, index) => (
                  <span key={index}>{`/${path}`}</span>
                ))}
              </p>
            </div>
            <div className={`col-md-6 col-sm-none`}>
              <TextField
                variant={"outline"}
                prependIcon={() => (
                  <Icon className={"icon"} path={mdiMagnify} />
                )}
                placeholder={"search products by keyword"}
                radius={50}
                className={"outline " + style.searchBar}
              />
            </div>
            <div className="col-md-3">
              <div className={style.filter + " flex flex-end"}>
                <select className={"input"}>
                  <option>Sort by</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <aside className={`col-md-3 col-sm-none side ${style.sideBar}`}>
          <section>
            <h2 className={style.sectionTitle}>Categories</h2>
            <ul className={style.sectionItems}>
              <li>
                <a href={"/"}>
                  <>
                    Cars <span>(20)</span>
                  </>
                </a>
              </li>
              <li>
                <a href={"/"}>
                  <>
                    drugs <span>(5)</span>
                  </>{" "}
                </a>
              </li>
              <li>
                <a href={"/"}>
                  {" "}
                  <>
                    phones <span>(4)</span>
                  </>{" "}
                </a>
              </li>
              <li>
                <a href={"/"}>
                  {" "}
                  <>
                    accessories <span>(0)</span>
                  </>{" "}
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className={style.sectionTitle}>Filter</h2>
            <ul className={style.sectionItems}></ul>
          </section>
        </aside>
        <div className={"col-md-9 col-sm-12"}>
          <div className={`flex flex-wrap ${style.productList}`}>
            {
              products.map(product=><ProductBox product={product} key={product._id} />)
            }
          </div>
        </div>
      </div>
    </section>
  );
}


export async function getServerSideProps(context){
  let products = [];
  try{
    const getProducts = await get('https://api.tandtdeals.ng/v1/products');
    if(getProducts.status){
      products = getProducts.data.data;
    }
  }catch (e) {
    console.log(e.message);
    console.log('there is an error getting products');
  }
  return {
    props:{products}
  }
}




Index.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export default Index;
