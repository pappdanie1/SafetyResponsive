import React from "react";
import Carousel from "../components/Carousel";
import CardContainer from "../components/CardContainer";
import About from "../components/About";
import Contact from "../components/Contact";
import References from "../components/References";

const Home = () => {

    return (
        <>
            <Carousel />
            <CardContainer />
            <About />
            <Contact />
            <References />
        </>

    )
}

export default Home