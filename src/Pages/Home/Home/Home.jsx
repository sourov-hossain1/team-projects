import React from "react";
import Banner from "../Banner/Banner";
import QuestionBanner from "../QuestionBanner/QuestionBanner";
import ReputationBanner from "../ReputationBanner/ReputationBanner";
import BlogBanner from "../BlogBanner/BlogBanner";
import FlipCard from "../FlipCard/FlipCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <QuestionBanner />
      <ReputationBanner />
      <BlogBanner />
    </div>
  );
};

export default Home;
