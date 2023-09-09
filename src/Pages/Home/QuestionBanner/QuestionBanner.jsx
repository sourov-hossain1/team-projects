import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/Bi";
import { FaCalendar, FaEye, FaHome } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router-dom";
import img from "../../../assets/answer-questions.png";

const QuestionBanner = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/question")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex">
        <div>
          <div className="divider divider-horizontal ">OR</div>{" "}
        </div>
        <div>
          {questions.map((question) => (
            <div className="">
              {/* colum 1 */}
              <div key={question._id} className=" border-2  bg-white">
                <table className="table">
                  {/* head */}

                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-4 justify-between">
                          <div className="flex gap-4">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <Link to={`/questionAnswer/${question._id}`}>
                                  <img
                                    src={question.userImage}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </Link>
                              </div>
                            </div>

                            <div className="">
                              <Link to={`/questionAnswer/${question._id}`}>
                                <Link to={`/userProfile/${question.email}`}>
                                  {" "}
                                  <h2 className="font-bold text-blue-900">
                                    {question.userName}
                                  </h2>
                                </Link>
                                <div className="font-bold text-lg">
                                  {question.title}
                                </div>
                              </Link>

                              <div className="lg:flex justify-between gap-3 mt-1 ">
                                <div className="">
                                  <div className="flex gap-4 ">
                                    <div>
                                      <span className="btn btn-outline text-lg btn-sm rounded-2xl">
                                        <BiLike />
                                      </span>
                                      <span className=" opacity-80 font-semibold ms-2">
                                        100Like
                                      </span>
                                    </div>
                                    <div className="btn btn-sm bg-white text-blue-800">
                                      <Link to="">
                                        <TiMessages size={23} />
                                      </Link>
                                      <span>1</span>
                                    </div>
                                    <div className="flex gap-2 my-2">
                                      <span className="  text-lg rounded-2xl opacity-70">
                                        <FaEye />
                                      </span>
                                      <span className=" opacity-80 font-semibold ">
                                        600views
                                      </span>
                                    </div>

                                    <div className="flex gap-2 my-2">
                                      <span className="  text-lg rounded-2xl opacity-70">
                                        <FaCalendar />
                                      </span>
                                      <span className=" opacity-60 font-semibold ">
                                        {question.date}
                                      </span>
                                    </div>
                                  </div>
                                  <span></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr />
              </div>
            </div>
          ))}
        </div>
        <div>
          <img className="w-80" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuestionBanner;
