import React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  width: inherit;
`;

const ResultsContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: red;
`;

const SettingsContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: beige;
`;

const Movie: React.FC<Props> = () => {
  return (
    <Container>
      <ResultsContainer />
      <SettingsContainer />
    </Container>
  );
};

export default Movie;
