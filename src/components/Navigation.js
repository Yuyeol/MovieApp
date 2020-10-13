import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigaton() {
  return (
    <div className="nav">
      {/* route에서는 a태그 말고 Link를 써야 이동할때 새로고침이 안됨*/}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigaton;
