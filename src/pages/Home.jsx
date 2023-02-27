import React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Work from "../components/Work";
import Pakage from "../components/Pakage";
import Template from "../components/Template";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Subscribe from "../components/Subscribe";
import Review from "../components/Review";
import Askquestion from "../components/Askquestion";
import PartnerLogo from "../components/PartnerLogo";
import AsNavFor from "../components/AsNav";

const Home = () => {
  return (
    <div className="w-full    mx-auto">
      {/* navbar */}
      <Navbar />

      <main>
        {/* hero section */}
        <Hero />
        {/* work section */}
        <Work />

        {/* service section */}
        <Services />
        {/* <Services /> */}

        {/* features section */}
        <Feature />
        {/* Contact areat */}
        <Contact />
        {/* working process */}
        <Process />

        <AsNavFor />
        {/* product */}
        <Template />
        {/* pakages section */}
        <Pakage />
        {/* client review */}
        <Review />

        {/* ask anything */}
        <Askquestion />
        {/* blog section */}
        <Blog />
        {/* email subscription */}
        <Subscribe />
        <PartnerLogo />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
