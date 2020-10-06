/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useContext } from "react";

import { horizontalStackCss, verticalStackCss } from "../../../theme";
import { P } from "../../common/system";

import { DefaultPageLayout } from "../../common/layout/DefaultPageLayout";
import { Activities } from "./activities";
import { DarkMode } from "../../../context/dark_mode";

const STYLES_PROFILE_PHOTO = css`
  height: 250px;
  animation: fade 7.5s;
  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const Separator = styled.div`
  width: 100%;
  border: 0.5px solid #e0e0e7;
`;

export const HomePage = () => {
  const DarkModeState = useContext(DarkMode);

  const contacts = [
    { source: "linkedin", url: "https://www.linkedin.com/in/karmingc" },
    { source: "github", url: "https://www.github.com/karmingc" },
    { source: "instagram", url: "https://www.instagram.com/karmingcharming/" },
    { source: "email", url: "mailto:karming.chin@mail.mcgill.ca" },
  ];

  return (
    <DefaultPageLayout
      pageTitle={"Home"}
      contentCss={css`
        ${verticalStackCss.xl}
        margin: auto;

        > :last-child {
          margin-right: auto;
        }
      `}
    >
      <section
        css={css`
          ${verticalStackCss.m}
        `}
      >
        <img
          key={DarkModeState.toString()}
          css={STYLES_PROFILE_PHOTO}
          src={require(`../../../medias/photos/${
            DarkModeState ? "sketch_dark" : "sketch_day"
          }.jpg`)}
          alt="profile media"
        />
        <div
          css={css`
            ${horizontalStackCss.s}
          `}
        >
          {contacts.map((contact, contactIdx) => {
            return (
              <a
                key={`${contactIdx}-${contact.source}`}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  css={css`
                    width: 20px;
                    height: 20px;
                    padding: 0px 7px 7px 7px;
                    transition-timing-function: ease-in;
                    transition: 0.5s;
                    filter: ${DarkModeState
                      ? "grayscale(75%)"
                      : "grayscale(100%)"};
                    :hover {
                      filter: none;
                    }
                  `}
                  src={require(`../../../medias/icons/${contact.source}.svg`)}
                  alt={contact.source}
                />
              </a>
            );
          })}
        </div>
        <P
          css={css`
            text-align: center;
          `}
        >
          Hey all, my name is Karming. If you're curious about me, feel free to
          message me anytime - I'm always interested in exploring new topics.
        </P>
      </section>
      <Separator />
      <Activities />
    </DefaultPageLayout>
  );
};
