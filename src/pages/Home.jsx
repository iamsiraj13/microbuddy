import React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Chooseus from "../components/Chooseus";
// import Services from "../components/Services";
import Work from "../components/Work";

const Home = () => {
  return (
    <div className="max-w-xl lg:max-w-7xl   mx-auto">
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
        {/* <Services /> */}

        {/* features section */}
        <Feature />
        {/* working process */}
        <Process />
        {/* why choose us section */}
        <Chooseus />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
