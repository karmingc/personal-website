/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { verticalStackCss } from "../../../theme";

import { DefaultPageLayout } from "../../common/layout/DefaultPageLayout";
import { Activities } from "./activities";

const STYLES_MAIN = css`
  ${verticalStackCss.xl}
  align-items: flex-start;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }

  @media only screen and (min-width: 769px) {
    width: 85%;
  }
`;

export const HomePage: React.FC = () => {
  // const contacts = [
  //   { source: "linkedin", url: "https://www.linkedin.com/in/karmingc" },
  //   { source: "github", url: "https://www.github.com/karmingc" },
  //   { source: "instagram", url: "https://www.instagram.com/karmingcharming/" },
  //   { source: "email", url: "mailto:karming.chin@mail.mcgill.ca" },
  // ];

  return (
    <DefaultPageLayout pageTitle={"Home"} contentCss={STYLES_MAIN}>
      <header
        css={css`
          border: 1px dotted white;
        `}
      >
        <h1>Karming Chin</h1>
        <p>Tipping my toes everywhere.</p>
      </header>
      <Activities />
      <footer></footer>
    </DefaultPageLayout>
  );
};
