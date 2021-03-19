import React from "react";
import styled from "styled-components";
import "../../../assets/extra/loginbg.scss";

const BackgroundLogin = styled.div``;

const BackgroundSpace = (props) => {
  return (
    <BackgroundLogin id="stars-container">
      <div className="page-bg"></div>
      <div className="animation-wrapper">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      {props.children}
    </BackgroundLogin>
  );
};

export default BackgroundSpace;
