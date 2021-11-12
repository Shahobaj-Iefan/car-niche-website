import React from "react";
import Reviews from "../../Reviews/Reviews/Reviews";
import Services from "../../Services/Services";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
