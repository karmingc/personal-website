/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { horizontalStackCss, rawSpacing } from "../../../theme";

interface ModeProps {
  key: string;
  isDarkMode?: boolean;
}

const IconMode = styled.img<ModeProps>`
  opacity: ${(props: ModeProps) => (props.isDarkMode === true ? "1" : "0.5")};
  width: 30px;
  border-radius: 15px;
  transition-timing-function: ease-in;
  transition: 0.75s;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

interface HeaderProps {
  setDarkModeOn: () => void;
  setDarkModeOff: () => void;
  isDarkMode: boolean;
}
/**
 * Header used throughout the web app, includes the mode view
 * @param setDarkModeOn
 * @param setDarkModeOff
 * @param isDarkMode
 */
export const Header: React.FC<HeaderProps> = ({
  setDarkModeOn,
  setDarkModeOff,
  isDarkMode,
}) => {
  const modes = [
    {
      mode: isDarkMode,
      action: setDarkModeOn,
      mediaSrc: "moon.svg",
      alt: "dark mode icon",
    },
    {
      mode: !isDarkMode,
      action: setDarkModeOff,
      mediaSrc: "sun.svg",
      alt: "day mode icon",
    },
  ];

  return (
    <section
      css={css`
        ${horizontalStackCss.xs}
        width: 400px;
        margin: ${rawSpacing.xxxl}px auto auto auto;
        justify-content: flex-end;

        @media only screen and (max-width: 768px) {
          width: 300px;
        }
      `}
    >
      {modes.map((mode, modeIdx) => {
        return (
          <IconMode
            key={`${modeIdx}-${mode.alt}`}
            onClick={mode.action}
            isDarkMode={mode.mode}
            src={require(`../../../medias/icons/${mode.mediaSrc}`)}
            alt={mode.alt}
          />
        );
      })}
    </section>
  );
};
