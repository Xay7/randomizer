import React from "react";
import Header from "components/Header/Header";
import ItemsList from "components/ItemsList/ItemsList";
import Movie from "components/ItemsPages/Movie/Movie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faGamepad, faFilm } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

library.add(faSearch, faGamepad, faFilm);

const Main = styled.main`
  margin: 0 auto;
  margin-top: 48px;
  height: auto;
  width: 960px;
  background-color: white;
`;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={ItemsList} />
          <Route exact path="/movie" component={Movie} />
        </Switch>
      </Main>
    </React.Fragment>
  );
};

export default App;
