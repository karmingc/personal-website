/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import { horizontalStackCss, rawSpacing } from "../../../theme";
import { H2 } from "../../common/system";

import resumehub from "../../../media/photos/resumehub.png";
import every from "../../../media/photos/every.png";
import dbc from "../../../media/photos/dbc.jpg";
import overnight from "../../../media/photos/overnight.jpg";

const STYLES_MAIN = css`
  ${horizontalStackCss.xxxl};
  margin-top: ${rawSpacing.xxxxl}px;
  justify-content: flex-start;
  flex-wrap: wrap;

  > a:nth-of-type(2n) {
    margin-right: 0px;
  }

  @media only screen and (max-width: 768px) {
    ${horizontalStackCss.zero}
    > a {
      width: 100%;
      margin-right: 0px;
    }
  }
`;

const STYLES_PROJECT = ({ width }: { width: number }) => css`
  position: relative;
  width: calc(${width}% - ${rawSpacing.l}px);
  margin-bottom: ${rawSpacing.xxl}px;
  overflow: hidden;
  padding: 0px;

  :hover {
    cursor: pointer;
    > img {
      transform: scale(1.05);
    }
    > h2 {
      opacity: 1;
    }
  }
`;

const STYLES_IMG_CONTENT = css`
  width: 100%;
  transition: transform 500ms;
`;

const STYLES_IMG_HEADER = ({ color }: { color: string }) => css`
  opacity: 0;
  position: absolute;
  bottom: ${rawSpacing.m}px;
  left: ${rawSpacing.l}px;
  transition: opacity 500ms;
  color: ${color};
`;

/**
 * Activites section for home page
 */
export const Activities: React.FC = () => {
  const lists = [
    {
      name: "ResumeHub",
      description: "Resume + resource repository of swe interns",
      src: resumehub,
      width: 40,
      url: "https://www.resumehub.org",
      text: "white",
    },
    {
      name: "Every.org",
      description: "Discover and support various 501(c)(3) nonprofits",
      src: every,
      width: 60,
      url: "https://www.every.org",
      text: "black",
    },
    {
      name: "Dragon's Beard Candy",
      description: "Emperor's dessert",
      src: dbc,
      width: 60,
      url: "https://www.dragonsbeardcandy.com",
      text: "white",
    },
    {
      name: "Overnight",
      description: "Guessing simulation game",
      src: overnight,
      width: 40,
      url: "https://www.playovernight.com",
      text: "white",
    },
  ];

  return (
    <section css={STYLES_MAIN}>
      {lists.map((item) => {
        const { name, src, url, width, text } = item;
        return (
          <a
            key={name}
            css={STYLES_PROJECT({ width: width })}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img css={STYLES_IMG_CONTENT} src={src} alt={name} />
            <H2 contentCss={STYLES_IMG_HEADER({ color: text })}>{name}</H2>
          </a>
        );
      })}
    </section>
  );
};
