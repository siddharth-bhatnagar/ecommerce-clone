import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._Cb=B428684220_.jpg"
          alt="home-bg"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903580"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, One Size"
            price={149.99}
            image="https://www.bhphotovideo.com/images/images1000x1000/fitbit_fb417byby_charge_4_health_1552639.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7twI8CCDDRb-uK-KNNj9H8-7xapgBTMCTw&usqp=CAU"
            rating={5}
          />
          <Product
            id="32545453"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-silver-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583551106639"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 32.9'' Curved QLED Gaming Monitor"
            price={1094.98}
            image="https://cdn.shopify.com/s/files/1/0286/6960/8020/products/71_Qph9E_RL._AC_SL1500_1024x1024@2x.jpg?v=1594467906"
            rating={4}
          />
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
