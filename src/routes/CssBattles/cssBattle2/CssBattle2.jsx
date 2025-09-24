import React from "react";
import "./CssBattle2.scss";

const CssBattle2 = () => {
  return (
    <div className="stage">
      <div className="half y top"></div>
      <div className="half r top on-top"></div>
      <div className="half y bot on-top"></div>
      <div className="half r bot"></div>
    </div>
  );
};

export default CssBattle2;
