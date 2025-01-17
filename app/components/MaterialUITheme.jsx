"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";

import React from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props) {
  const { children } = props;

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            mode: "light",
            primary: {
              main: "#060D0D",
            },
            secondary: {
              main: "#90542F",
            },
            background: {
              default: "FDFFF5",
              paper: "#FAD6A5",
            },
            divider: "rgba(0, 0, 0, 0.12)",
            text: {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.6)",
              disabled: "rgba(0, 0, 0, 0.38)",
            },
          }
        : {
            mode: "dark",
            primary: {
              main: "#71797E",
            },
            secondary: {
              main: "#FFFFFF",
            },
            background: {
              default: "#060D0D",
              paper: "#000080",
            },
            divider: "rgba(255, 255, 255, 0.12)",
            text: {
              primary: "#fff",
              secondary: "rgba(255, 255, 255, 0.7)",
              disabled: "rgba(255, 255, 255, 0.5)",
            },
          }),
    },
  });

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
