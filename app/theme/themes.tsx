"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#005C5C",
      main: "#0C2C56",
      dark: "#4556c5",
      contrastText: "#fff",
    },
    secondary: {
      light: "#6fbf73",
      main: "#fff",
      dark: "#357a38",
      contrastText: "#fff",
    },
  },
  components: {
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
      color: '#fff'
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
      color: '#fff'
    },
    body2: {
      fontSize: '1rem',
      color: '#fff'
    }
  }
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           color: "#f5f5f5",
//         },
//       },
//     },
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#333",
//         },
//       },
//     },
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           color: "#fff",
//           textDecorationColor: "#fff"
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//             borderColor: "#fff",
//           },
//         },
//         input: {
//           '&:-webkit-autofill': {
//             '-webkit-box-shadow': '0 0 0 100px rgba(69, 69, 69) inset',
//             '-webkit-text-fill-color': '#fff',
//           },
//         },
//       },
//     },
//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           '&.Mui-focused': {
//             color: '#fff'
//           },
//         },
//       },
//     },
//   },
});
darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#3f50b5",
      main: "#3f50b5",
      dark: "#3f50b5",
      contrastText: "#000",
    },
    secondary: {
      light: "#6fbf73",
      main: "#4caf50",
      dark: "#357a38",
      contrastText: "#000",
    },
    background: {
      default: "#EEE7DA",
    },
  },
});
lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme };
