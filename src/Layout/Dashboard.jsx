import React from "react";
import {
  FaBook,
  FaHome,
  FaMoneyBill,
  FaOpencart,
  FaPersonBooth,
  FaSave,
  FaSchool,
  FaUniversity,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts/useCarts";
import UseAdmin from "../Hooks/UseAdmin";
import UseInstructor from "../Hooks/UseInstuctor";

const DashBoard = () => {
  const [cart] = useCarts();
  const [isAdmin] = UseAdmin();
  const [isInstructor] = UseInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-outline drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-indigo-300 font-bold">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full">
          {/* Admin */}
          <>
            <li>
              <NavLink to="adminDashBoard">
                <FaSave /> Admin DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink to="manageClasses">
                <FaUniversity /> Manage Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="manageUsers">
                <FaUser /> Manage Users
              </NavLink>
            </li>
            <li></li>
          </>
          {/* Instructor */}
          <>
            <li>
              <NavLink to="instructorDashBoard">
                <FaSave /> Instructor DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink to="addClass">
                <FaBook /> Add Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="myclasses">
                <FaBook /> My Classes
              </NavLink>
            </li>
          </>
          {/* Student */}
          <>
            <li>
              <NavLink to="studentDashBoard">
                <FaSave /> Student DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink to="MySelectedClass">
                <FaSave /> My Selected Classes
                <span className="badge badge-outline bg-indigo-500 text-white p-4">
                  +{cart?.length || 0}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="MyEnrolledClass">
                <FaBook /> My Enrolled Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="PaymentHistory">
                <FaMoneyBill /> Payment History
              </NavLink>
            </li>
          </>
          <div className="divider"></div>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instuctors">
              <FaPersonBooth /> Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FaSchool /> Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
