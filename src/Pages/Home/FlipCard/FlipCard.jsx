import React from "react";
import ReactFlipCard from "reactjs-flip-card";
import answer from "../../../assets/answer.png";
import { FaQuestion, FaQuestionCircle, FaThumbsUp } from "react-icons/fa";

const FlipCard = () => {
  const styles = {
    card: { color: "black" },
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mx-auto md:mx-5 mt-5  grid md:grid-cols-4 gap-14 md:gap-2  ">
        {/* First FlipCard */}
        <div className="relative">
          <ReactFlipCard
            containerCss="min-w-min h-[100%] mx-auto "
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="bg-[#92C0DA] rounded-tl-[120px] flex items-end justify-end pl-16 ">
                <h4 className="vertical-lr pb-10  text-4xl uppercase font-bold">
                  ask question
                </h4>
                <img className="h-[380px]" src={answer} alt="" />
              </div>
            }
            backComponent={
              <div className="bg-[#92C0DA] rounded-bl-[120px] py-5 px-10 min-h-max">
                <p className="text-3xl py-2 font-bold">
                  <span>Get Help</span> <br />
                  <span>From</span> <br />
                  <span>Professionals</span>
                </p>
                <br />
                <p>
                  Etiam congue, sem id vulputate condimentum, nibh arcu lobortis
                  massa, et posuere lacus...
                </p>
                <button className="btn btn-primary my-6 ms-8">
                  Ask A Question
                </button>
              </div>
            }
          />
          <div className="text-center mx-auto absolute right-[38%] -bottom-10 ">
            <FaQuestion className="w-20 h-20 rounded-full p-2 text-center mx-auto bg-white"></FaQuestion>
          </div>
        </div>

        {/* Second FlipCard */}
        <div className="relative">
          <ReactFlipCard
            containerCss="min-w-min h-[100%] mx-auto "
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="bg-[#92C0DA] flex items-end justify-end pl-16 ">
                <h4 className="vertical-lr pb-10  text-4xl uppercase font-bold">
                  ask question
                </h4>
                <img className="h-[380px]" src={answer} alt="" />
              </div>
            }
            backComponent={
              <div className="bg-[#92C0DA] rounded-bl-[120px] py-5 px-10 min-h-max">
                <p className="text-3xl py-2 font-bold">
                  <span>Get Help</span> <br />
                  <span>From</span> <br />
                  <span>Professionals</span>
                </p>
                <br />
                <p>
                  Etiam congue, sem id vulputate condimentum, nibh arcu lobortis
                  massa, et posuere lacus...
                </p>
                <button className="btn btn-primary my-6 ms-8">
                  Ask A Question
                </button>
              </div>
            }
          />
          <div className="text-center mx-auto absolute right-[38%] -bottom-10 ">
            <FaThumbsUp className="w-20 h-20 rounded-full p-2 text-center mx-auto bg-white"></FaThumbsUp>
          </div>
        </div>

        {/* Third FlipCard */}
        <div className="relative">
          <ReactFlipCard
            containerCss="min-w-min h-[100%] mx-auto "
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="bg-[#92C0DA] flex items-end justify-end pl-16 ">
                <h4 className="vertical-lr pb-10  text-4xl uppercase font-bold">
                  ask question
                </h4>
                <img className="h-[380px]" src={answer} alt="" />
              </div>
            }
            backComponent={
              <div className="bg-[#92C0DA] rounded-bl-[120px] py-5 px-10 min-h-max">
                <p className="text-3xl py-2 font-bold">
                  <span>Get Help</span> <br />
                  <span>From</span> <br />
                  <span>Professionals</span>
                </p>
                <br />
                <p>
                  Etiam congue, sem id vulputate condimentum, nibh arcu lobortis
                  massa, et posuere lacus...
                </p>
                <button className="btn btn-primary my-6 ms-8">
                  Ask A Question
                </button>
              </div>
            }
          />
          <div className="text-center mx-auto absolute right-[38%] -bottom-10 ">
            <FaThumbsUp className="w-20 h-20 rounded-full p-2 text-center mx-auto bg-white"></FaThumbsUp>
          </div>
        </div>
        {/* Fourth FlipCard */}
        <div className="relative">
          <ReactFlipCard
            containerCss="min-w-min h-[100%] mx-auto "
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="bg-[#92C0DA] rounded-br-[120px] flex items-end justify-end pl-16 ">
                <h4 className="vertical-lr pb-10  text-4xl uppercase font-bold">
                  ask question
                </h4>
                <img className="h-[380px]" src={answer} alt="" />
              </div>
            }
            backComponent={
              <div className="bg-[#92C0DA] rounded-tr-[120px] py-5 px-10 min-h-max">
                <p className="text-3xl py-2 font-bold">
                  <span>Get Help</span> <br />
                  <span>From</span> <br />
                  <span>Professionals</span>
                </p>
                <br />
                <p>
                  Etiam congue, sem id vulputate condimentum, nibh arcu lobortis
                  massa, et posuere lacus...
                </p>
                <button className="btn btn-primary my-6 ms-8">
                  Ask A Question
                </button>
              </div>
            }
          />
          <div className="text-center mx-auto absolute right-[38%] -bottom-10 ">
            <FaThumbsUp className="w-20 h-20 rounded-full p-2 text-center mx-auto bg-white"></FaThumbsUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;