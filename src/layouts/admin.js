import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

const MainContentStyled = styled.main`
  margin-left: 73px;
  padding: 1px 16px;
  height: 100vh;
  background: #0992a9;
  color: #f7f7f7;
`;
export default function AdminLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <MainContentStyled>
        <h1>Welcome To Radix Haven!</h1>
      </MainContentStyled>
    </React.Fragment>
  );
}
