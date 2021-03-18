import React from "react";
import styled from "styled-components";
import "../../../assets/extra/loginbg.scss";

const BackgroundLogin = styled.div``;

const BackgroundSpace = (props) => {
  return (
    <BackgroundLogin id="stars-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {props.children}
    </BackgroundLogin>
  );
};

export default BackgroundSpace;
