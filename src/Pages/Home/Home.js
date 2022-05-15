import React from "react";
import Banner from "./Banner";
import BannerTwo from "./BannerTwo";
import Contact from "./Contact";
import Footer from "./Footer";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <div className="px-12">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <BannerTwo></BannerTwo>
      </div>
      <MakeAppointment></MakeAppointment>
      <div className="px-12">
        <Testimonials></Testimonials>
      </div>
      <Contact></Contact>
      <div className="px-12">
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
