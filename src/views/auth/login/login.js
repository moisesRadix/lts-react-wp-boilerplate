import React from "react";
import styled from "styled-components";
import { Card } from "../../../components/cards/simpleCard";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: auto;
  position: relative;
  top: 0;
`;

export default function Login() {
  return (
    <div>
      <Card>
        <h2>Im a login card</h2>
      </Card>
    </div>
  );
}
