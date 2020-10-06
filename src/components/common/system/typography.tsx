/** @jsx jsx */
import { jsx, SerializedStyles } from "@emotion/core";
import css from "@emotion/css/macro";
import React, { ReactText, useContext } from "react";

import { DarkMode } from "../../../context/dark_mode";

interface ContentCssProps {
  onClick?: () => void;
  children: string | number | ReactText[] | React.ReactNode;
  contentCss?: SerializedStyles | SerializedStyles[];
  targetUrl?: string;
}

const STYLES_NO_MARGINS = css`
  margin-top: 0px;
  margin-bottom: 0px;
  color: #484848;
`;

/* Headings */
/* Always use lowest one to determine spacing unless stated otherwise */

/**
 * Default padding: rawSpacing.xl / 32px
 * if separating from top: 2x / 64px
 * used for page banner / main product name
 * @param props contentCss if needed
 */
export const H2 = (props: ContentCssProps) => {
  const DarkModeState = useContext(DarkMode);
  const STYLES_FONT_COLOR = DarkModeState
    ? css`
        color: white;
      `
    : css``;
  return (
    <h2
      onClick={props.onClick}
      css={[STYLES_NO_MARGINS, STYLES_FONT_COLOR, props.contentCss]}
    >
      {props.children}
    </h2>
  );
};

/**
 * Default padding: rawSpacing.l / 24px
 * Separating from top: 2x / 48px
 * Used for section header
 * @param props contentCss if needed
 */
export const H3 = (props: ContentCssProps) => {
  const DarkModeState = useContext(DarkMode);
  const STYLES_FONT_COLOR = DarkModeState
    ? css`
        color: white;
      `
    : css``;
  return (
    <h3
      onClick={props.onClick}
      css={[STYLES_NO_MARGINS, STYLES_FONT_COLOR, props.contentCss]}
    >
      {props.children}
    </h3>
  );
};

/**
 * Default padding: rawSpacing.m / 16px
 * Separating from top: 2x / 32px
 * @param props contentCss if needed
 */
export const H4 = (props: ContentCssProps) => {
  const DarkModeState = useContext(DarkMode);
  const STYLES_FONT_COLOR = DarkModeState
    ? css`
        color: white;
      `
    : css``;
  return (
    <h4
      onClick={props.onClick}
      css={[STYLES_NO_MARGINS, STYLES_FONT_COLOR, props.contentCss]}
    >
      {props.children}
    </h4>
  );
};

/**
 * Default padding: rawSpacing.s / 8px
 * Separating from top: 2x / 16px
 * @param props contentCss if needed
 */
export const H5 = (props: ContentCssProps) => {
  const DarkModeState = useContext(DarkMode);
  const STYLES_FONT_COLOR = DarkModeState
    ? css`
        color: white;
      `
    : css``;
  return (
    <h5
      onClick={props.onClick}
      css={[STYLES_NO_MARGINS, STYLES_FONT_COLOR, props.contentCss]}
    >
      {props.children}
    </h5>
  );
};

/* Text */
const STYLES_TEXT = css`
  line-height: 1.5;
`;

/**
 * Default padding: rawSpacing.s / 8px
 * Separating from top: 2x / 16px
 * @param props contentCss if needed
 */
export const P = (props: ContentCssProps) => {
  const { contentCss, children } = props;
  const DarkModeState = useContext(DarkMode);
  const STYLES_FONT_COLOR = DarkModeState
    ? css`
        color: white;
      `
    : css``;
  return (
    <p css={[STYLES_NO_MARGINS, STYLES_TEXT, STYLES_FONT_COLOR, contentCss]}>
      {children}
    </p>
  );
};

export const A = (props: ContentCssProps) => {
  const { contentCss, children, targetUrl } = props;
  const DarkModeState = useContext(DarkMode);
  const STYLES_FONT_COLOR = DarkModeState
    ? css`
        color: white;
      `
    : css`
        color: black;
      `;

  return (
    <a
      css={[
        css`
          text-decoration: none;
          :hover {
            text-decoration: underline;
          }
        `,
        STYLES_FONT_COLOR,
        contentCss,
      ]}
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
