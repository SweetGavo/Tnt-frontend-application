import Head from "next/head";
import Link from "next/link";
import NormHeader from "../../components/normHeader";
import style from "../../styles/about-us.module.scss";
import Layouts from "../../layouts/layouts";
import Button from "../../components/button";
import { mdiOpacity } from "@mdi/js";
import React from "react";

function Index(props) {
  return (
    <div className={style.about}>

      <section className={`flex ${style.aboutContent}`}>
        <div className="container ">
          <div className={`flex ${style.content}`}>
            <div className={`col-md-6 ${style.contentCover}`}>
              <h3 className={`title`}>About page</h3>
              <p >
                T & T deals market limited is a subsidiary of Miraton Matador
                group, registered and incorporated with CAC in May 1992, with
                a proven success in general trading , acquisition and re-sale
                of goods and services for individuals and organizations.
              </p>
              <p>
                Our years of experience, rich database and technical expertise
                in the market has place us well above our contemporaries. Our
                team consist of consultants and experts.
              </p>

              <p>
                In 2020, after the lockdown, we were able to grow our customer
                almost 70%, where we on-board Integrated Corporate Services,
                selling well over 40 vehicle in the midst of the covid-19
                economy crisis.
              </p>

            </div>
            <div className={`col-md-6 ${style.contentCover}`}>
              <img
                  src="/images/about us.png"
                  alt=""
              />
            </div>
          </div>
          <div className={`flex flex-reverse ${style.content}`}>
            <div className={`col-md-6 ${style.contentCover}`}>
              <p>
                We are constantly growing our customer base as well developing
                new market strategies to enable us reach various client in
                different sphere of the corporate world. Since incorporated, we
                have done business with organization like ; Rosabon financial
                services, Aquila leasing Company and also the telecommunication
                giant Globacom Nigeria.
              </p>
              <p>
                For the past years, we have generated over #6 billion naira in
                revenue across all business , we are intentional about
                fulfilment of our obligations to our customers which is to drive
                revenue and profits for both parties.
              </p>
              <Button
                  size={"sm"}
                  style={"blue"}
                  radius={5}
                  className={style.buttons}
              >
                Get in touch
              </Button>

            </div>
            <div className={`col-md-6 ${style.contentCover}`}>
              <img
                  src="/images/about us.png"
                  alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className={style.wed}>
        <div className={`container flex flex-wrap`}>
          <div className={`col-md-12 ${style.top}`}>
            <h3 className={`title`}>What we do with ease</h3>
            <p className={`text-white sub-title`}>Over the years, we have built an unbeatable trust with our clients and partners</p>
          </div>

          <div className={`${style.contentArea}`}>
            <div className="flex flex-wrap">
              <div className={`col-md-4 ${style.eachItem}`}>
                <img src="/images/trend%201valuation.png" alt=""/>
                <h3>Free valuation</h3>
                <p>Unused asset and asset with zero shelf
                  life can be uploaded to increase asset
                  turn around time in corporations. </p>
              </div>
              <div className={`col-md-4 ${style.eachItem}`}>
                <img src="/images/decision-making%201.png" alt=""/>
                <h3>Instant decision</h3>
                <p>Create up-to-date designs without writing a
                  single line of code. Build clean, minimalistic,
                  beautifully crafted websites</p>
              </div>
              <div className={`col-md-4 ${style.eachItem}`}>
                <img src="/images/web-security%201.png" alt=""/>
                <h3>24hrs Payment</h3>
                <p>Confirmation of payment in 24 hours; once
                  our terms and conditions for fees has been
                  agreed to. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.table}>
        <table className={style.table}>
          <tbody>
          <tr className={style.tableBackgroundColor}>
            <th>S/N</th>
            <th>Suppliers</th>
            <th>Buyers</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Globacom nigeria</td>
            <td>Mr Toyosi</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Rosabon Financial services</td>
            <td>Mr. Akeem Samson</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Aquilla leasing</td>
            <td>Alhaji Masibau</td>
          </tr>
          <tr>
            <td>4</td>
            <td>BT technology</td>
            <td>Alhaji Masibau</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Access bank</td>
            <td>Elder chris</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Intergrated corporate services</td>
            <td>Mr Samuel Babatunde</td>
          </tr>
          <tr>
            <td>7</td>
            <td>MTN Nigeria </td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </section>

      <section className={`${style.numbers} no-padding` }>
        <div className={style.cover}>
          <div className={`container `}>
            <h1 className={`title`}>The numbers don't lie</h1>
            <p className={`sub-title text-black`}>
              Over the years , we have built an unbeatable trust between our
              clients and partners
            </p>

            <p className={`sub-title text-center text-black ${style.caption}`}>
              Volume of transactions 2019(*
              <span className={`text-green`}>Millions</span>)
            </p>

            <div className={`flex justify-space-between`}>
              <div className={`${style.metrics}`}>
                <h4 className={`text-green title`}>56</h4>
                <p className={`text-black text-center sub-title`}>ROSABON</p>
              </div>
              <div className={`${style.metrics}`}>
                <h4 className={`text-green title`}>34</h4>
                <p className={`text-black text-center sub-title`}>AQUILA CAPITAL</p>
              </div>
              <div className={`${style.metrics}`}>
                <h4 className={`text-green title`}>102</h4>
                <p className={`text-black text-center sub-title`}>ACCESS BANK</p>
              </div>
              <div className={`${style.metrics}`}>
                <h4 className={`text-green title`}>303</h4>
                <p className={`text-black text-center sub-title`}>GLO</p>
              </div>
              <div className={`${style.metrics}`}>
                <h4 className={`text-green title`}>46</h4>
                <p className={`text-black text-center sub-title`}>ICS</p>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default Index;
