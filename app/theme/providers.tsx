"use client";

import React, {
  createContext,
  useMemo,
  useState,
  useContext,
  useEffect,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./themes";

// Create a context to store the theme mode and the function to toggle it
const ThemeContext = createContext({
  mode: "dark",
  toggleTheme: () => {},
});

// Create a custom hook to consume the context
export const useThemeContext = () => useContext(ThemeContext);

// Create a provider to wrap the app in the theme context
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // Set the initial mode based on localStorage or system preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("theme");
      setMode(savedMode ? savedMode : "dark");
      setMounted(true);
    }
  }, []);

  // Toggle the theme mode
  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  // Create the theme object based on the current mode
  const theme = useMemo(
    () => createTheme(mode === "dark" ? darkTheme : lightTheme),
    [mode]
  );

  // Return the provider with the theme context
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
