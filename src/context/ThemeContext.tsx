import React, { useState } from "react";
import { Theme, ThemeContext } from "../types";
export const themeContext = React.createContext<ThemeContext | null>(null);
const ThemeContextProvider: React.FC = ({ children }) => {
  const { Provider } = themeContext;
  const [theme, setTheme] = useState<Theme | null>({
    color: "var(--salmon-orange)",
  });
  const context = { theme, setTheme };
  return <Provider value={context}>{children}</Provider>;
};
export default ThemeContextProvider;
