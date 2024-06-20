import React from "react";
import HeaderSection from "@/containers/home-page/HeaderSection";
import AboutSection from "@/containers/home-page/AboutSection";
import ServiceSection from "@/containers/home-page/ServiceSection";
import ProductSection from "@/containers/home-page/ProductSection";
import MaterialSection from "@/containers/home-page/MaterialSection";

const Home = () => {

  return (
    <>
      <HeaderSection />
      <AboutSection />
      <ServiceSection />
      <ProductSection />
      <MaterialSection />
    </>
  );
};

export default Home;
