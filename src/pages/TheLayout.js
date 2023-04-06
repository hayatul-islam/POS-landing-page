import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Subscription from "../components/common/Subscription";
import Home from "./Home";

const TheLayout = () => {
  return (
    <div>
      <Header />
      <Home />
      <Subscription />
      <Footer />
    </div>
  );
};

export default TheLayout;
