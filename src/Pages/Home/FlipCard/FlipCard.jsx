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
                <h4 className="vertical-lr pb-10  text-2xl font-serif uppercase font-bold">
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
                <div className="text-center">
                  <button className="btn btn-primary my-6 ">
                    Ask A Question
                  </button>
                </div>
              </div>
            }
          />
          <div className="text-center mx-auto absolute right-[38%] -bottom-10 w-20 h-20 p-3 rounded-full bg-[#EFEAE6]">
            <FaQuestion className="w-10 h-10 rounded-full p-2 text-center mx-auto bg-transparent"></FaQuestion>
          </div>
        </div>

        {/* Second FlipCard */}
        <div className="relative">
          <ReactFlipCard
            containerCss="min-w-min h-[100%] mx-auto "
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="bg-[#f09641] flex items-end justify-end pl-16 ">
                <h4 className="vertical-lr pb-10  text-2xl font-serif uppercase font-bold">
                  ask question
                </h4>
                <img className="h-[380px]" src={answer} alt="" />
              </div>
            }
            backComponent={
              <div className="bg-[#92C0DA]  py-5 px-10 min-h-max">
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
                <div className="text-center">
                  <button className="btn btn-primary my-6 ">
                    Ask A Question
                  </button>
                </div>
              </div>
            }
          />
          <div className="text-center mx-auto absolute right-[38%] -bottom-10 w-20 h-20 p-3 rounded-full bg-[#EFEAE6]">
            <FaThumbsUp className="w-10 h-10  text-center mx-auto bg-transparent"></FaThumbsUp>
          </div>
        </div>

        {/* Third FlipCard */}
        <div className="relative">
          <ReactFlipCard
            containerCss="min-w-min h-[100%] mx-auto "
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="bg-[#e5f049] flex items-end justify-end pl-16 ">
                <h4 className="vertical-lr pb-10  text-2xl font-serif uppercase font-bold">
                  ask question
                </h4>
                <img className="h-[380px]" src={answer} alt="" />
              </div>
            }
            backComponent={
              <div className="bg-[#92C0DA]  py-5 px-10 min-h-max">
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
                <div className="text-center">
                  <button className="btn btn-primary my-6 ">
                    Ask A Question
                  </button>
                </div>
              </div>
            }
          />
          <div className="text-center mx-auto absolute right-[38%] -bottom-10 w-20 h-20 p-3 rounded-full bg-[#EFEAE6]">
            <FaThumbsUp className="w-10 h-10 text-center mx-auto bg-transparent"></FaThumbsUp>
          </div>
        </div>
        {/* Fourth FlipCard */}
        <div className="relative">
          <ReactFlipCard
            containerCss="min-w-min h-[100%] mx-auto "
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={
              <div className="bg-[#b43ef4] rounded-br-[120px] flex items-end justify-end pl-16 ">
                <h4 className="vertical-lr pb-10  text-2xl font-serif uppercase font-bold">
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
                <div className="text-center">
                  <button className="btn btn-primary my-6 ">
                    Ask A Question
                  </button>
                </div>
              </div>
            }
          />
          <div className="text-center mx-auto absolute right-[38%] -bottom-10 w-20 h-20 p-3 rounded-full bg-[#EFEAE6]">
            <FaThumbsUp className="w-10 h-10 text-center mx-auto bg-transparent"></FaThumbsUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
