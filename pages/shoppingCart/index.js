import React from "react";
import AuthLayout from "../../layouts/authLayout";
import Head from "next/head";
import style from "../../styles/shoppingCart.module.scss";
import Alert from "../../components/alert";
import TextField from "../../components/textField";
import Link from "next/link";
import Button from "../../components/button";
import Header from "../../components/header";
import profile from "../../public/images/profile.png";
import styles from "../../styles/products.module.scss";
import Layouts from "../../layouts/layouts";



function Index(props) {
  return (
    <>
      
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default Index;
