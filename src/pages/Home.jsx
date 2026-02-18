import React from "react";
import Carousel from "../components/Carousel";
import CardContainer from "../components/CardContainer";
import About from "../components/About";
import Contact from "../components/Contact";
import References from "../components/References";
import { Helmet } from "react-helmet-async";
import img1 from '/src/assets/img1.jpg'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>EHS Szolgáltatás</title>
                <meta name="description" content="Munkavédelem, tűzvédelem, környezetvédelem és energiahatékonyság, 30 év tapasztalattal támogatjuk cége biztonságát és hosszú távú sikerét." />
                <meta property="og:image" content={new URL(img1, "https://ehs-szolgaltatas.com").href} />
            </Helmet>
            <Carousel />
            <CardContainer />
            <About />
            <Contact />
            <References />
        </>

    )
}

export default Home