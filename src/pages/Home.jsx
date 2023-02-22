import React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Chooseus from "../components/Chooseus";
// import Services from "../components/Services";
import Work from "../components/Work";
import Pakage from "../components/Pakage";
import Template from "../components/Template";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div className="w-full    mx-auto">
      {/* navbar */}
      <div className=" border-b border-[#00FFFF]">
        <Navbar />
      </div>
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
        {/* why choose us section */}
        <Chooseus />

        {/* pakages section */}
        <Pakage />
        {/* product */}
        <Template />
        {/* blog section */}
        <Blog />
        {/* email subscription */}
        <Subscribe />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
