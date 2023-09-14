import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    gender: "",
    image: null,
    number: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., sending data to a server for updating user information
    console.log("Form Data:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // Handle special case for file input
    const newValue = type === "file" ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <div>
      <div className="bg-blue-900 h-52 w-full">
        <div className="py-12 px-4 md:px-20">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Edit Profile
          </h1>

          <hr className="mt-4 opacity-30" />
          <Link to="/">
            <FaUser className="text-white text-xl mt-2" />
          </Link>
        </div>
      </div>{" "}
      <form
        className="lg:px-40 px-8 border-blue-800 border-2 py-8 "
        onSubmit={handleSubmit}
      >
        <div className="form-control ">
          <label className="label font-bold">
            <span className="text-lg">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input shadow-inner shadow-slate-300"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input shadow-inner shadow-slate-300"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg secondary-text">Date Of Birth</span>
          </label>
          <input
            type="date"
            name="date"
            className="input shadow-inner shadow-slate-300"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Gender</span>
          </label>
          <select
            className="select select-primary w-full"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg secondary-text">Profile Image</span>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Phone Number</span>
          </label>
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            className="input shadow-inner shadow-slate-300"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label font-bold">
            <span className="text-lg">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input shadow-inner shadow-slate-300"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Update Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
