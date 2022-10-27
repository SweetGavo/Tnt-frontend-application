import Head from "next/head";
import Link from "next/link";
import NormHeader from "../../components/normHeader";
import style from "../../styles/about-us.module.scss";
import Layouts from "../../layouts/layouts";
import Button from "../../components/button";

function Index(props) {
  return (
    <div className={`col-md-12 ${style.container}`}>
      <div className={style.main}>
        <section>
          <div>
            <h1>About page</h1>
            <p>
              T & T deals market limited is a subsidiary of Miraton Matador
              group, registered and incorporated with CAC in May 1992, with a
              proven success in general trading , acquisition and re-sale of
              goods and services for individuals and organizations.
            </p>
            <p>
              Our years of experience, rich database and technical expertise in
              the market has place us well above our contemporaries. Our team
              consist of consultants and experts.
            </p>

            <p>
              In 2020, after the lockdown, we were able to grow our customer
              almost 70%, where we on-board Integrated Corporate Services,
              selling well over 40 vehicle in the midst of the covid-19 economy
              crisis.
            </p>
            <div>
              <img
                src="/images/harry-cunningham-7qCeFo19r24-unsplash.jpeg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <img
              src="/images/harry-cunningham-7qCeFo19r24-unsplash.jpeg"
              alt=""
            />
          </div>
          <div>
            <p>
              We are constantly growing our customer base as well developing new
              market strategies to enable us reach various client in different
              sphere of the corporate world. Since incorporated, we have done
              business with organization like ; Rosabon financial services,
              Aquila leasing Company and also the telecommunication giant
              Globacom Nigeria.
            </p>
            <p>
              For the past years, we have generated over #6 billion naira in
              revenue across all business , we are intentional about fulfilment
              of our obligations to our customers which is to drive revenue and
              profits for both parties.
            </p>

            <div className={style.btn}>
              <Button
                size={"sm"}
                style={"blue"}
                radius={5}
                className={style.buttons}
              >
                Get in touch
              </Button>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className={style.tableDiv}>
          <table className={style.table}>
            <tr className={style.tableBackgroundColor}>
              <th>S/N</th>
              <th>Suppliers</th>
              <th>Buyers</th>
            </tr>
            <tr>
              <td className={style.bor}>1</td>
              <td className={style.bor}></td>
              <td className={style.bor}></td>
            </tr>
            <tr>
              <td className={style.bor}>2</td>
              <td className={style.bor}></td>
              <td className={style.bor}></td>
            </tr>
            <tr>
              <td className={style.bor}>3</td>
              <td className={style.bor}></td>
              <td className={style.bor}></td>
            </tr>
            <tr>
              <td className={style.bor}>5</td>
              <td className={style.bor}></td>
              <td className={style.bor}></td>
            </tr>
            <tr>
              <td className={style.bor}>6</td>
              <td className={style.bor}></td>
              <td className={style.bor}></td>
            </tr>
            <tr>
              <td className={style.bor}>7</td>
              <td className={style.bor}></td>
              <td className={style.bor}></td>
            </tr>
            <tr>
              <td className={style.bor}>8</td>
              <td className={style.bor}></td>
              <td className={style.bor}></td>
            </tr>
          </table>
        </div>
      </section>
      <section>
        <div className={style.greenback}>
          <div>
            <h1 style={{ color: "white" }} className={style.bold}>
              What we do with ease
              <p style={{ color: "white" }}>
                Over the years , we have built an unbeatable trust between our
                clients and partners
              </p>
            </h1>
          </div>
          <div className={style.whitesectionBack}>
            <div className={style.innerSecDivs}>
              <img src="background: url(trend.png)" />
              <h3>Free valuation</h3>
              <p>
                Unused asset and asset with zero shelf life can be uploaded to
                increase asset turn around time in corporations.
              </p>
            </div>

            <div className={style.innerSecDivs}>
              <img src="background: url(trend.png)" />

              <h3>Instant decision</h3>
              <p>
                Create up-to-date designs without writing a single line of code.
                Build clean, minimalistic, beautifully crafted websites
              </p>
            </div>
            <div className={style.innerSecDivs}>
              <img src="background: url(trend.png)" />

              <h3>24hrs Payment</h3>
              <p>
                Confirmation of payment in 24 hours; once our terms and
                conditions for fees has been agreed to.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={style.blurback}>
        <div className={style.blur}>
          <p className={style.bold}>
            <h1>The numbers don't lie</h1>
            Over the years , we have built an unbeatable trust between our
            clients and partners
          </p>
          <p style={{ color: "black", marginLeft: "50vh" }}>
            <h2>
              Volume of transactions 2019(*
              <span style={{ color: "#B0D235" }}>Millions</span>){" "}
            </h2>
          </p>
          <section>
            <div className={style.volumes}>
              <h3>ROSABON</h3>
              <h3>AQUILA CAPITAL</h3>
              <h3>ACCESS BANK</h3>
              <h3>GLO</h3>
              <h3>ICS</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layouts className={`fullwidth product-page`}>{page}</Layouts>;
};

export default Index;
