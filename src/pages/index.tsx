import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Aside } from "@/components/Aside";

export default function Home() {
  return (
    <>
      <Head>
        <title>PepsiCo</title>
        <meta name="description" content="Pepsi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aside />
      <main className={"main"}>
        <Navbar />

        <div className="product">
          <div className="product__wraper">
            <div className="product__text">
              <h1 className="text__title">Pepsi Classic</h1>
              <p className="text__desc">
                Carbonated Water, High Fructose, Corn Syrup, Caramel Color,
                Sugar, Phosphoric Acid, Caffeine, Citric Acid, Natural Flavour
              </p>
            </div>

            <div className="product__facts">
              <h3 className="facts__title">NUTRITIONAL FACTS</h3>
              <div className="facts__card">
                <div className="card__item">
                  <div className="card__top">
                    <p className="item__title">Sugar syrup</p>
                    <p className="item__gramm">150 cL</p>
                  </div>
                  <div className="card__bottom">
                    <p className="item__gramm2">150cL</p>
                  </div>
                </div>
                <div className="card__item">
                  <div className="card__top">
                    <p className="item__title">Sugar syrup</p>
                    <p className="item__gramm">150 cL</p>
                  </div>
                  <div className="card__bottom">
                    <p className="item__gramm2">150cL</p>
                  </div>
                </div>{" "}
                <div className="card__item">
                  <div className="card__top">
                    <p className="item__title">Sugar syrup</p>
                    <p className="item__gramm">150 cL</p>
                  </div>
                  <div className="card__bottom">
                    <p className="item__gramm2">150cL</p>
                  </div>
                </div>{" "}
                <div className="card__item">
                  <div className="card__top">
                    <p className="item__title">Sugar syrup</p>
                    <p className="item__gramm">150 cL</p>
                  </div>
                  <div className="card__bottom">
                    <p className="item__gramm2">150cL</p>
                  </div>
                </div>{" "}
                <div className="card__item">
                  <div className="card__top">
                    <p className="item__title">Sugar syrup</p>
                    <p className="item__gramm">150 cL</p>
                  </div>
                  <div className="card__bottom">
                    <p className="item__gramm2">150cL</p>
                  </div>
                </div>
              </div>
              <p className="facts__desc">
                Rich in energy, our drinks will revitalize your body and get you
                ready for the day’s activities
              </p>
            </div>

            <button className="btn">BUY NOW</button>
          </div>

          <div className="product__img">
            <img src="/images/pepsi-front.png" alt="pepsi" />
          </div>
        </div>
      </main>
    </>
  );
}
