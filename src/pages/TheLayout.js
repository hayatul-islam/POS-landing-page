import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Subscription from "../components/common/Subscription";
import Home from "./Home";

const TheLayout = () => {
  return (
    <>
      <Header />
      <Home />
      <Subscription />
      <Footer />
    </>
  );
};

export default TheLayout;
