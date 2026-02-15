import React from "react";
import Banner from "./Banner";
import ProductCards from "./Products/ProductCards/ProductCards";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <ProductCards></ProductCards>
    </div>
  );
};

export default HomePage;
