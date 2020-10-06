/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { rawSpacing, verticalStackCss } from "../../../theme";
import { P } from "../system";

export const Footer: React.FC = () => {
  return (
    <section
      css={css`
        ${verticalStackCss.xs}
        width: 400px;
        margin: ${rawSpacing.xxxl}px auto;

        @media only screen and (max-width: 768px) {
          width: 300px;
        }
      `}
    >
      <P>End</P>
      <P>Oct 6, 2020.</P>
    </section>
  );
};
