import React from "react";
import styled from "styled-components";

const buttonColor = {
  success: `linear-gradient(to right, #0075ff, #2fb7f1)`,
  warning: `background-image: linear-gradient(to right, #ff6600, #ffffff 148%)`,
  primary: `linear-gradient(to right, #1100ff,#ffffff 148%)`,
  danger: `linear-gradient(to right, #ff0059,#ffffff 148%)`,
};

const ButtonCore = styled.button`
  background-image: ${(props) => buttonColor[props.ButtonType]};
  color: white;
  transition: all 0.3s;
  box-shadow: none !important;
  font-weight: 600;
  font-size: 0.8571em;
  line-height: 1.35em;
  border: none;
  margin: 10px 1px;
  border-radius: 3px;
  padding: 11px 22px;
  cursor: pointer;
`;

const ButtonTypes = {
  success: (props) => (
    <ButtonCore onClick={props.action} type={props.type} ButtonType="success">
      {props.children}
    </ButtonCore>
  ),
  warning: (props) => (
    <ButtonCore onClick={props.action} type={props.type} ButtonType="warning">
      {props.children}
    </ButtonCore>
  ),
  primary: (props) => (
    <ButtonCore onClick={props.action} type={props.type} ButtonType="primary">
      {props.children}
    </ButtonCore>
  ),
  danger: (props) => (
    <ButtonCore onClick={props.action} type={props.type} ButtonType="danger">
      {props.children}
    </ButtonCore>
  ),
};

export default function Button({ buttonType, type, action, children }) {
  return (
    <>
      {React.createElement(ButtonTypes[buttonType], { type, action, children })}
    </>
  );
}
