"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#c5b485",
      main: "#222",
      dark: "#111",
      contrastText: "#f9fbff",
    },
    secondary: {
      light: "#6fbf73",
      main: "#22222288",
      dark: "#357a38",
      contrastText: "#777",
    },
    background: {
      default: '#222'
    }
  },
  components: {
  MuiInputLabel: {
    styleOverrides: {
      root: {
        "&.Mui-focused": {
          color: '#f9fbff'
        }
      }
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        fontSize: 1
      },
    },
  },
  CarouselElement: {
    styleOverrides: {
      left: {
        left: -40,
      },
      right: {
        right: -40,
      }
    },
  },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#f9fbff'
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.5rem',
      color: '#C4CED4'
    },
    body1: {
      fontSize: '1.5rem',
      color: '#f9fbff'
    },
    body2: {
      fontSize: '1rem',
      color: '#f9fbff'
    },
  }
});
darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#c5b485",
      main: "#f9fbff",
      dark: "#ccc",
      contrastText: "#111",
    },
    secondary: {
      light: "#6fbf73",
      main: "#f9fbffcc",
      dark: "#357a38",
      contrastText: "#777",
    },
    background: {
      default: '#f9fbff'
    }
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#111'
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.5rem',
      color: '#C4CED4'
    },
    body1: {
      fontSize: '1.5rem',
      color: '#000'
    },
    body2: {
      fontSize: '1rem',
      color: '#000'
    },
  }
  
});
lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme };
