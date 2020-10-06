/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Helmet } from "react-helmet";
import { SerializedStyles } from "@emotion/css/macro";

interface HeadProps {
  pageTitle: string;
}

/**
 * React Helmet that details page meta, titles, etc
 * @param pageTitle indicated at the tab
 */
const HelmetComponent: React.FC<HeadProps> = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>{pageTitle} | Karming Chin</title>
    </Helmet>
  );
};

interface PageProps extends HeadProps {
  contentCss?: SerializedStyles;
  children?: React.ReactNode;
}
/**
 * Default page layout used throughout
 * @param contentCss additional css content if needed
 * @param children components inside the page
 * @param pageTitle react-helmet for page title meta
 */
export const DefaultPageLayout: React.FC<PageProps> = ({
  contentCss,
  children,
  pageTitle,
}) => {
  return (
    <div
      css={[
        css`
          width: 400px;

          @media only screen and (max-width: 768px) {
            width: 350px;
          }
        `,
        contentCss,
      ]}
    >
      <HelmetComponent pageTitle={pageTitle} />
      {children}
    </div>
  );
};
