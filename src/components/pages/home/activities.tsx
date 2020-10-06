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
export enum EntryStatus {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  LIVE = "LIVE",
}

interface EntryProps {
  status: EntryStatus.COMPLETED | EntryStatus.COMPLETED;
  children?: React.ReactNode;
  title: string;
  targetUrl?: string;
}

/**
 * Entry under activities
 * @param props status, children, title and targetUrl
 */
export const Entry = (props: EntryProps) => {
  const { status, children, title, targetUrl } = props;
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
      {status === EntryStatus.COMPLETED || status === EntryStatus.LIVE ? (
        <A targetUrl={targetUrl}>
          <H3>{title}</H3>
        </A>
      ) : (
        <H3>{title}</H3>
      )}
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
  return (
    <section
      css={css`
        ${verticalStackCss.l}
        align-items: flex-start;
      `}
    >
      <H2>Activities</H2>
      <Entry
        status={EntryStatus.COMPLETED}
        targetUrl={"https://www.every.org/join/@karmingchin"}
        title={"Every.org"}
      >
        <span>Discover and support various 501(c)(3) nonprofits</span>
      </Entry>
      <Entry
        status={EntryStatus.COMPLETED}
        targetUrl={"https://www.dragonsbeardcandy.com"}
        title={"Dragon's Beard Candy"}
      >
        <span>Emperor's dessert</span>
      </Entry>
      <Entry
        status={EntryStatus.COMPLETED}
        targetUrl={"https://www.playovernight.com"}
        title={"Overnight"}
      >
        <span>Guessing simulation game</span>
      </Entry>
      <Entry
        status={EntryStatus.COMPLETED}
        targetUrl={"https://www.resumehub.org"}
        title={"ResumeHub"}
      >
        <span>Resume + resource repository of swe interns</span>
      </Entry>
    </section>
  );
};
