import { useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { palette } from "../../theme/palette";
import { ThemeProvider, createTheme } from "@mui/material";

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    let newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  }

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        ...palette,
      },
    });
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        toggleMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
