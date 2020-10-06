/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { H2, H3, A } from "../../common/system";
import { verticalStackCss } from "../../../theme";

import { DarkMode } from "../../../context/dark_mode";

/**
 * in progress -> under dev
 * completed -> done but not live, link github
 * live -> in production
 */

interface EntryProps {
  children?: React.ReactNode;
  title: string;
  targetUrl?: string;
}

/**
 * Entry under activities
 * @param props status, children, title and targetUrl
 */
export const Entry = (props: EntryProps) => {
  const { children, title, targetUrl } = props;
  const DarkModeState = useContext(DarkMode);
  const STYLES_FONT_COLOR = DarkModeState
    ? css`
        color: white;
      `
    : css`
        color: #484848;
      `;

  return (
    <div
      css={css`
        ${verticalStackCss.xs}
        align-items: flex-start;
      `}
    >
      <A targetUrl={targetUrl}>
        <H3>{title}</H3>
      </A>

      <div
        css={[
          css`
            font-style: italic;
          `,
          STYLES_FONT_COLOR,
        ]}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Activites section for home page
 */
export const Activities = () => {
  const entries = [
    {
      targetUrl: "https://www.every.org/join/@karmingchin",
      title: "Every.org",
      description: "Discover and support various 501(c)(3) nonprofits",
    },
    {
      targetUrl: "https://www.dragonsbeardcandy.com",
      title: "Dragon's Beard Candy",
      description: "Emperor's dessert",
    },
    {
      targetUrl: "https://www.playovernight.com",
      title: "Overnight",
      description: "Guessing simulation game",
    },
    {
      targetUrl: "https://www.resumehub.org",
      title: "ResumeHub",
      description: "Resume + resource repository of swe interns",
    },
  ];
  return (
    <section
      css={css`
        ${verticalStackCss.l}
        align-items: flex-start;
      `}
    >
      <H2>Activities</H2>
      {entries.map((entry, entryIdx) => {
        return (
          <Entry
            key={`${entryIdx}-${entry.title}`}
            targetUrl={entry.targetUrl}
            title={entry.title}
          >
            <span>{entry.description}</span>
          </Entry>
        );
      })}
    </section>
  );
};
