/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import {
  horizontalStackCss,
  rawSpacing,
  verticalStackCss,
} from "../../../theme";
import { A, H1, H3, P } from "../../common/system/";

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
  const contacts = [
    { source: "linkedin", url: "https://www.linkedin.com/in/karmingc" },
    { source: "github", url: "https://www.github.com/karmingc" },
    { source: "instagram", url: "https://www.instagram.com/karmingcharming/" },
    { source: "email", url: "mailto:karming.chin@mail.mcgill.ca" },
  ];

  return (
    <DefaultPageLayout pageTitle={"Home"} contentCss={STYLES_MAIN}>
      <header
        css={css`
          ${verticalStackCss.xl};
          margin-top: ${rawSpacing.xxxxl}px;
          align-items: flex-start;
        `}
      >
        <H1>Karming Chin</H1>
        <P>Dipping my toes here and there.</P>
      </header>
      <Activities />
      <footer
        css={css`
          ${horizontalStackCss.xxxl};
          padding-bottom: ${rawSpacing.xxxxl}px;
        `}
      >
        {contacts.map((contact) => {
          const { source, url } = contact;
          return (
            <H3 key={source}>
              <A targetUrl={url}>
                {source.charAt(0).toUpperCase() + source.slice(1)}
              </A>
            </H3>
          );
        })}
      </footer>
    </DefaultPageLayout>
  );
};
