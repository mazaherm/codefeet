import React from "react";
import { ThemeProvider } from "styled-components";

// TEXT
const textPrimary = "#2f3640";
const textSecondary = "#7158e2";
const textSecondary2 = "#757575";
const textTertiary = "#f5f6fa";
// BG
const backgroundPrimary = "#f5f6fa";

const theme = {
  palette: {
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      secondary2: textSecondary2,
      tertiary: textTertiary,
    },
    background: {
      primary: backgroundPrimary,
    },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
