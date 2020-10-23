/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

import { verticalStackCss } from "../../../theme";

const STYLES_MAIN = css`
  border: 1px dotted white;
`;
/**
 * Activites section for home page
 */
export const Activities: React.FC = () => {
  // const entries = [
  //   {
  //     targetUrl: "https://www.every.org/join/@karmingchin",
  //     title: "Every.org",
  //     description: "Discover and support various 501(c)(3) nonprofits",
  //   },
  //   {
  //     targetUrl: "https://www.dragonsbeardcandy.com",
  //     title: "Dragon's Beard Candy",
  //     description: "Emperor's dessert",
  //   },
  //   {
  //     targetUrl: "https://www.playovernight.com",
  //     title: "Overnight",
  //     description: "Guessing simulation game",
  //   },
  //   {
  //     targetUrl: "https://www.resumehub.org",
  //     title: "ResumeHub",
  //     description: "Resume + resource repository of swe interns",
  //   },
  // ];
  return (
    <section css={STYLES_MAIN}>
      <h2>Activities</h2>
    </section>
  );
};
