import React from "react";
import "./Landpage.css";
import logo from "../../pic/logo.gif";
const LandPage = ({ history }) => {
  return (
    <div
      className="landpage"
      onChange={() => {
        history.push("/login");
      }}
      onClick={() => {
        history.push("/login");
      }}
    >
      <div className="cover">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h1>SOCiETE TUNISIENNE DE SIDERURGIE</h1>
        </div>
      </div>
    </div>
  );
};

export default LandPage;
