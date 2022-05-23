import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        {/* <img className="home__image" src="https://m.media-amazon.com/images/I/612AqhqwllL._SX3000_.jpg" /> */}
        {/* <img className="home__image" src="https://m.media-amazon.com/images/I/61yuQvDrMdL._SX3000_.jpg" /> */}
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        {/* Product id, title, price, rating, image */}
        <div className="home__row">

        <Product
        id="5452659"
        title="Trading in the Zone: Master the Market with Confidence, Discipline and a Winning Attitude"
        price={1800}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/A1mGPw7HhYL.jpg"
        />
        <Product
        id="5452661"
        title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 1TB) - Silver (3rd Generation)"
        price={85000}
        rating={4}
        image="https://m.media-amazon.com/images/I/817doxCSq7S._SX679_.jpg"
        />
        </div>

        <div className="home__row">
        <Product
        id="5452662"
        title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black) "
        price={2399}
        rating={3}
        image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
        />
        <Product
        id="5452663"
        title="Crossbeats Ignite Pro smartwatch with Body Temperature Sensor, 1.7” HD 500 Nits Brightness Display )"
        price={2599}
        rating={4}
        image="https://m.media-amazon.com/images/I/61Z-uRKnCsL._SX522_.jpg"
        />
        <Product
        id="5452664"
        title="boAt Rockerz 370 Bluetooth Wireless On Ear Headphone with Mic (Buoyant Black)"
        price={1199}
        rating={2}
        image="https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY218_.jpg"
        />
        </div>

        <div className="home__row">
        <Product
        id="5452665"
        title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
        price={139990}
        rating={5}
        image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
        />
        </div>
        
        {/* Product */}
    </div>
  );
}

export default Home;