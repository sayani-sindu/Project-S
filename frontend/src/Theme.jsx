import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: "#2196f3",
          solidHoverBg: "#1976d2",
        },
        success: {
          solidBg: "#4caf50",
          solidHoverBg: "#388e3c",
        },
      },
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
  },
});

export default theme;
