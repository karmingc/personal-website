/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/pages/home";
import { Header } from "./components/common/header/";
import { DarkMode } from "./context/dark_mode";
import { Footer } from "./components/common/footer";

export const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const setDarKModeOn = () => {
    setDarkMode(true);
  };
  const setDarkModeOff = () => {
    setDarkMode(false);
  };

  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: ${isDarkMode ? "#0c0c0c" : "#fffefc"};
            transition-timing-function: ease-in;
            transition: 0.75s;
            /* font-family: 'Crimson Text', serif; */
          }
        `}
      />
      <DarkMode.Provider value={isDarkMode}>
        <Router>
          <Header
            setDarkModeOn={setDarKModeOn}
            setDarkModeOff={setDarkModeOff}
            isDarkMode={isDarkMode}
          />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Footer />
        </Router>
      </DarkMode.Provider>
    </div>
  );
};
