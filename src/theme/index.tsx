import {
  rawSpacing,
  horizontalStackCss,
  verticalStackCss,
} from "./styles/spacing";

const palette = {
  white: "#FFFFFF",
  black: "#000000",
  secondaryBlack: "rgba(0,0,0,0.8)",
  grey10: "#fafafa",
  grey20: "#f5f5f5",
  grey30: "#eeeeee",
  grey40: "#e0e0e0",
  grey50: "#bdbdbd",
  grey60: "#9e9e9e",
  grey70: "#757575",
  grey80: "#616161",
  grey90: "#424242",
  grey100: "#212121",
  blue10: "#E3F2FD",
  blue40: "#64B5F6",
  blue60: "#2196F3",
  blue70: "#1E88E5",
  blue90: "#1565C0",
  blue100: "#0D47A1",
};

/**
 * Global theme used throughout
 */
const theme = {
  backgroundWhite: palette.white,
  backgroundBlack: palette.black,
  activeBlue: palette.blue90,
  activeGrey: palette.grey100,
  blurStrongGrey: palette.grey70,
  blurSoftGrey: palette.grey50,
  fontPrimaryGrey: palette.grey100,
  fontSecondaryGrey: palette.grey90,
  fontPrimary: palette.white,
  fontSEcondary: palette.grey90,
  buttonBgBlur: palette.grey30,
  buttonBgHover: palette.grey50,
  buttonBgActive: palette.grey100,
  outlineBlue: palette.blue60,
};

export { theme, palette, rawSpacing, horizontalStackCss, verticalStackCss };
