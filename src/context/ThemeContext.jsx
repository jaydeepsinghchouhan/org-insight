import React, { createContext, useContext, useMemo, useState } from "react";
import { getItem, setItem } from "../utils/common";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

// eslint-disable-next-line react-refresh/only-export-components
export const useColorMode = () => useContext(ColorModeContext);

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => getItem("themeMode", "light"));

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          setItem("themeMode", newMode); // Persist in localStorage
          return newMode;
        });
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={{ mode, ...colorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
