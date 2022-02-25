import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return <div className="profile"></div>;
};

export default Profile;
