import React from "react";
import SearchFilterBox from "./searchFilterBox";
import Slider from "./slider";

const Hero = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-x-10 gap-y-10">
        <SearchFilterBox />
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
