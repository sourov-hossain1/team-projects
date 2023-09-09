import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import rcnt from "../../../assets/recent-posts (1).svg";
import web from "../../../assets/web developement.jpg";
import code from "../../../assets/code.jpg";

const BlogBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:flex mb-16 gap-12">
      <div className="w-[40%] mt-16">
        <h2 className="text-green-500 font-bold uppercase text-lg">
          RECENT NEWS
        </h2>
        <h1 className="text-3xl mb-3 text-black font-bold">
          Stay Up To Date With Our Latest News
        </h1>
        <button className="btn-primary btn">GO TO THE BLOG</button>

        <img className="my-8 ps-4 w-80" src={rcnt} alt="" />
      </div>

      <div className="grid grid-cols-2 w-[100%] h-40 gap-4">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          showArrows={true} // Add this line to enable arrow navigation
        >
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={web} alt="Web Development" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                What is Web Bug in Coding ?
              </h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                voluptate id ut cupiditate soluta fugit. Quaerat, consequatur
              </p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={code} alt="Web Development" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                What is Web Developement?
              </h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                voluptate id ut cupiditate soluta fugit. Quaerat, consequatur
              </p>
            </div>
          </div>

          {/* Add more carousel slides here */}
        </Carousel>
      </div>
    </div>
  );
};

export default BlogBanner;
