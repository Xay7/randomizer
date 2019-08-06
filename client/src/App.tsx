import React from "react";
import Header from "components/Header/Header";
import Main from "components/Main/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faGamepad, faFilm } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faGamepad, faFilm);

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;
