/** @jsx jsx */
import { Global, jsx, css } from "@emotion/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomePage } from "./components/pages/home";

import { theme } from "./theme";

export const App = () => {
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: ${theme.backgroundBlack};

            font-family: "Noto Sans KR", sans-serif;

            h1 {
              font-size: 48px;
            }

            p {
              font-size: 24px;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            p {
              color: ${theme.fontPrimary};
            }
          }
        `}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};
