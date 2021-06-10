import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://s3.us-east-2.amazonaws.com/cdn.platform.capitalc.co/media/10470/conversions/vb2clr3io2c6j5s2__AdobeStock_93382125-1800.jpg"
          //https://s3.us-east-2.amazonaws.com/cdn.platform.capitalc.co/media/10470/conversions/vb2clr3io2c6j5s2__AdobeStock_93382125-1800.jpg
          //https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="
            Artscroll Schottenstein Daf Yomi Talmud Bavli 73 Volumes Set"
            price={2599}
            rating={5}
            image="https://cdn.shopeichlers.com/media/22566/conversions/Daf-Yomi-English-large.jpg"
          />
          <Product
            id="49538094"
            title="Zohar Masok Midvash 23 Volume Set"
            price={274.99}
            rating={4}
            image="https://cdn.shopeichlers.com/media/36054/conversions/Zohar-large.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Baal Shem Tov Hashalem - 5 Volume Set"
            price={104.99}
            rating={3}
            image="https://cdn.shopeichlers.com/media/19206/conversions/36558-2-large.jpg"
          />
          <Product
            id="23445930"
            title="Sefer Kedushas Levi Hemevoar - 3 Volumes"
            price={34.99}
            rating={5}
            image="https://cdn.shopeichlers.com/media/6861/conversions/hss17578-2-large.jpg"
          />
          <Product
            id="3254354345"
            title="Meor Einayim Hamevuar 3 Volume Set"
            price={59.99}
            rating={4}
            image="https://cdn.shopeichlers.com/media/33146/conversions/20200128-1-large.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Machon Pe'er Mikdoshim"
            price={0.99}
            rating={4}
            image="//cdn.shopify.com/s/files/1/0112/6590/0644/collections/a6cf0618b4565a522dbcfefb576220ed_1170x.jpg?v=1546013314"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
