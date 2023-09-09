import React from "react";
import Banner from "../Banner/Banner";
import QuestionBanner from "../QuestionBanner/QuestionBanner";
import ReputationBanner from "../ReputationBanner/ReputationBanner";

const Home = () => {
  return (
    <div>
      <Banner />
      <QuestionBanner />
      <ReputationBanner />
    </div>
  );
};

export default Home;
