import React from "react";
import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  background-color: rebeccapurple;
`;

const Header: React.FC = () => {
  return <Container />;
};

export default Header;
