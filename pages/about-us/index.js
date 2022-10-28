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
            <span>About us</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in
              nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              Varius sit amet mattis vulputate enim nulla. Sollicitudin nibh sit
              amet commodo nulla facilisi. Posuere urna nec tincidunt praesent
              semper feugiat. Sit amet cursus sit amet dictum sit. Et malesuada
              fames ac turpis egestas integer eget. Vulputate dignissim
              suspendisse in est suspendisse.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in
              nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              Varius sit amet mattis vulputate enim nulla. Sollicitudin nibh sit
              amet commodo nulla facilisi. Posuere urna nec tincidunt praesent
              semper feugiat. Sit amet cursus sit amet dictum sit. Et malesuada
              fames ac turpis egestas integer eget. Vulputate dignissim
              suspendisse in est ante in nibh mauris. Ac tortor vitae purus
              faucibus ornare suspendisse.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in
              nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              Varius sit amet mattis vulputate enim nulla. Sollicitudin nibh sit
              amet commodo nulla facilisi. Posuere urna nec tincidunt praesent
              semper feugiat. Sit amet cursus sit amet dictum sit. Et malesuada
              fames ac turpis egestas integer eget. Vulputate dignissim
              suspendisse in est ante in nibh mauris. Ac tortor vitae purus
              faucibus ornare suspendisse.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in
              nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              Varius sit amet mattis vulputate enim nulla. Sollicitudin nibh sit
              amet commodo nulla facilisi. Posuere urna nec tincidunt praesent
              semper feugiat. Sit amet cursus sit amet dictum sit. Et malesuada
              fames ac turpis egestas integer eget. Vulputate dignissim
              suspendisse in est ante in nibh mauris. Ac tortor vitae purus
              faucibus ornare suspendisse.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in
              nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              Varius sit amet mattis vulputate enim nulla. Sollicitudin nibh sit
              amet commodo nulla facilisi. Posuere urna nec tincidunt praesent
              semper Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              Varius sit amet mattis vulputate enim nulla. Sollicitudin nibh sit
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi in
              nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              Varius sit amet mattis vulputate enim nulla. Sollicitudin nibh sit
              amet commodo nulla facilisi. Posuere urna nec tincidunt praesent
              semper feugiat. Sit amet cursus sit amet dictum sit. Et malesuada
              fames ac turpis egestas integer eget. Vulputate dignissim
              suspendisse in est ante in nibh mauris. Ac tortor vitae purus
              faucibus ornare suspendisse.
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
              <td className={style.bor}>4</td>
              <td className={style.bor}></td>
              <td className={style.bor}></td>
            </tr>
          </table>
        </div>
      </section>
      <section>
        <div className={style.greenback}>
          <p>What we do with ease</p>
          <div className={style.whitesectionBack}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                in nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                in nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi
                in nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </p>
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
