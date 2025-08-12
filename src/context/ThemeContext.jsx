import React, { createContext, useContext, useMemo, useState } from "react";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

// eslint-disable-next-line react-refresh/only-export-components
export const useColorMode = () => useContext(ColorModeContext);

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
  }), []);

  return (
    <ColorModeContext.Provider value={{ mode, ...colorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
