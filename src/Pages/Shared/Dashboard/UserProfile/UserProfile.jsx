import { useEffect, useState } from "react";
import { BiLike } from "react-icons/Bi";
import { AiTwotoneLike } from "react-icons/ai";
import { CgSmileMouthOpen } from "react-icons/cg";
import {
  FaCalendar,
  FaChartLine,
  FaDotCircle,
  FaEye,
  FaFacebook,
  FaFile,
  FaFileAlt,
  FaFootballBall,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMap,
  FaPersonBooth,
  FaPhone,
  FaQuestion,
  FaQuestionCircle,
  FaSign,
  FaTwitter,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { TiMessages } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const { email } = useParams();
  console.log(email);
  useEffect(() => {
    fetch("https://run-the-stack-server-delta.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  const filteredUsers = users.filter((user) => user.email === email);

  return (
    <div>
      {filteredUsers.map((user) => (
        <div key={user._id}>
          <div className="mb-8">
            <div className="bg-blue-900 h-52 w-full">
              <div className="py-12 px-4 md:px-20">
                <h1 className="text-white font-bold text-3xl md:text-5xl flex gap-4">
                  <FaUser className="" /> {user.userName}
                </h1>

                <hr className="mt-4 opacity-30" />
                <Link to="/questions">
                  <FaQuestion className="text-white text-xl mt-2" />
                </Link>
              </div>
            </div>
            {/* users */}
            <div className="max-w-screen-2xl mx-auto">
              <div className="lg:flex">
                {/* users about section */}
                <div className="border-2 lg:w-[30%] mx-auto text-center">
                  <div className="avatar mt-4">
                    <div className="w-24 rounded-full">
                      <img src={user.userImage} alt="Avatar" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold">{user.userName}</h2>
                  <p className="text-sm">Doctor</p>
                  <p className="text-sm lg:px-4">
                    A passionate specialist at couples therapy with over 10
                    years of experience
                  </p>

                  <div className="flex justify-center gap-4">
                    <div className="my-4">
                      <a
                        href="#_"
                        className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                      >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative">Ask</span>
                      </a>
                    </div>
                    <button className="btn btn-primary my-auto">Follow</button>
                  </div>
                  <div className="divider mx-4"></div>

                  <div className="grid lg:grid-cols-1 sm:grid-cols-2 gap-12">
                    {/* user statistic */}
                    <div>
                      <h2 className="text-start ms-4 flex gap-2 font-semibold">
                        {" "}
                        <FaChartLine /> User Statistics
                      </h2>

                      <div className="my-4">
                        {/* visit */}
                        <a
                          href="#_"
                          class="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                        >
                          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                            <svg
                              class="w-40 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span class="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaEye />{" "}
                            <span className="ms-2">
                              Visits <span className="ms-60">5</span>{" "}
                            </span>
                          </span>
                          <span class="relative invisible">Button Text</span>
                        </a>
                      </div>
                      {/*  */}
                      <div className="my-4">
                        {/* question */}
                        <a
                          href="#_"
                          class="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                        >
                          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-400 group-hover:translate-x-0 ease">
                            <svg
                              class="w-40 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaQuestionCircle />{" "}
                            <span className="ms-2">
                              Question <span className="ms-60">5</span>{" "}
                            </span>
                          </span>
                          <span class="relative invisible">Button Text</span>
                        </a>
                      </div>
                      {/* Answer */}

                      <div className="my-4">
                        {/* Answer */}
                        <a
                          href="#_"
                          class="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                        >
                          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-600 group-hover:translate-x-0 ease">
                            <svg
                              class="w-40 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span class="absolute flex items-center justify-center w-full h-full text-green-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaSign />{" "}
                            <span className="ms-2">
                              Answer <span className="ms-60">5</span>{" "}
                            </span>
                          </span>
                          <span class="relative invisible">Button Text</span>
                        </a>
                      </div>
                      {/* Follower */}

                      <div className="my-4">
                        {/* Follower */}
                        <a
                          href="#_"
                          class="relative inline-flex items-center justify-center p-4 w-96 px-6 py-3 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-base-500 rounded-full shadow-md group"
                        >
                          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-600 group-hover:translate-x-0 ease">
                            <svg
                              class="w-40 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </span>
                          <span class="absolute flex items-center justify-center w-full h-full text-orange-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaUsers />{" "}
                            <span className="ms-2">
                              Follower <span className="ms-60">5</span>{" "}
                            </span>
                          </span>
                          <span class="relative invisible">Button Text</span>
                        </a>
                      </div>

                      {/* social */}
                    </div>

                    {/* user info
                     */}
                    <div className="sm:my-auto">
                      <h2 className="text-start ms-4 flex gap-2 font-semibold">
                        {" "}
                        <FaUser /> User Info
                      </h2>
                      <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                        {" "}
                        <FaDotCircle /> Psychiatrist
                      </p>
                      <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                        {" "}
                        <FaPhone /> {user.userNumber}
                      </p>
                      <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                        {" "}
                        <FaUsers /> {user.userGender}
                      </p>
                      <p className="text-start text-sm my-2 ms-4 flex gap-2 font-semibold opacity-60">
                        {" "}
                        <FaCalendar /> {user.userDate}
                      </p>
                    </div>
                    {/* social */}
                    <div>
                      <h2 className="text-start ms-4 flex gap-2 font-semibold">
                        {" "}
                        <FaFootballBall /> Social
                      </h2>

                      <div className="grid grid-cols-3 gap-2 mx-4 pb-8 mt-2">
                        <button className="btn btn-sm  bg-blue-600 text-white ">
                          <FaFacebook /> Facebook
                        </button>

                        <button className="btn btn-sm btn-secondary ">
                          <FaInstagram className="" /> Instragam
                        </button>
                        <button className="btn btn-sm  bg-blue-500 text-white">
                          <FaTwitter /> Twitter
                        </button>
                        <button className="btn btn-sm bg-blue-700 text-white">
                          <FaLinkedin /> LinkdIn
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="divider lg:divider-horizontal"></div>

                <div className="w-[93%] mx-auto lg:w-[70%] border-black">
                  {/* user question */}
                  <div className="py-4">
                    <div className="bg-slate-50 rounded px-5 py-6 lg:w-full border-2 border-s-2 border-s-red-600 h-full">
                      <div className=" "></div>
                      <div className="flex gap-3 mb-3">
                        <div>
                          <img
                            className="rounded-full"
                            src={user.userImage}
                            alt="man"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>
                          <a
                            className="text-pink-500 font-bold hover:text-slate-600"
                            href=""
                          >
                            Sophie Taylor
                          </a>
                        </div>
                        <div>
                          <p className="bg-blue-600 px-2 text-white rounded">
                            Enlightened
                          </p>
                        </div>
                        <div>
                          <p>
                            Asked:{" "}
                            <a
                              className="text-slate-600 hover:text-slate-900"
                              href=""
                            >
                              January 4, 2022
                            </a>
                          </p>
                        </div>
                        <div>
                          <a className="hover:text-sky-600" href="">
                            Comic Books
                          </a>
                        </div>
                      </div>
                      <a
                        className="text-2xl font-bold hover:text-pink-500"
                        href=""
                      >
                        What five Marvel characters do you choose to ensure your
                        safety?
                      </a>
                      <p className="mt-3 mb-3">
                        The entire DC Universe is out to assassinate you. What
                        five Marvel characters do you choose to ensure your
                        safety and why? The entire DC Universe? OK, I’m going to
                        need some heavy hitters here.
                      </p>
                      <div className="flex gap-3 mb-5">
                        <a
                          className="bg-slate-200 hover:border-black hover:border-2 px-2 rounded"
                          href=""
                        >
                          Education
                        </a>
                        <a
                          className="bg-slate-200 hover:border-black hover:border-2 px-2 rounded"
                          href=""
                        >
                          Science
                        </a>
                      </div>
                      <hr />
                      <div className="lg:flex justify-between items-center gap-3 mt-5">
                        <div className="flex gap-3">
                          <div className="border-2 p-2 rounded-full h-full">
                            <AiTwotoneLike
                              className="text-slate-900 bg-white "
                              size={20}
                            />
                          </div>
                          <div className="border-s-2 "></div>
                          <div className="ms-2 flex items-center">
                            <BiLike
                              className="bg-blue-600 rounded-full text-white"
                              size={20}
                            />
                            <FcLike
                              className="text-slate-50 bg-red-200 rounded-full"
                              size={20}
                            />
                            <CgSmileMouthOpen
                              className="bg-yellow-300 rounded-full"
                              size={20}
                            />
                            <p className="ms-2">130 users</p>
                            <div className="ms-2 flex">
                              <div className="flex gap-2 border-2 py-2 px-3 h-full text-blue-500">
                                <a href="">
                                  <TiMessages size={20} />
                                </a>
                                <span>2</span>
                              </div>
                              <div className="flex gap-2 items-center ms-3 border-2 py-2 px-3 h-full">
                                <FaEye />
                                <p>6K Views</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <button className="bg-black text-white font-bold hover:bg-pink-500 px-5 py-1 rounded">
                            Answer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
