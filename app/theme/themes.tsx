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
      main: "#fff",
      dark: "#357a38",
      contrastText: "#f9fbff",
    },
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
    // tag1: {
      // fontSize: '1rem',
      // color: '#fff'
    // }
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
      light: "#c5b485",
      main: "#f9fbff",
      dark: "#ccc",
      contrastText: "#111",
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
