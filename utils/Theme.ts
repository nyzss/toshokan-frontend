import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    toshokan: {
      100: "#colorhere", // fuck i forgot colors
      200: "#colorhere",
      300: "#colorhere",
      400: "#colorhere",
      500: "#colorhere",
      600: "#colorhere",
      700: "#colorhere",
      800: "#colorhere",
      900: "#colorhere",
    },
    dark: {
      100: "#686864",
      200: "#5E5E5A",
      300: "#535350",
      400: "#494946",
      500: "#3E3E3C",
      600: "#343432",
      700: "#2A2A28",
      800: "#242423",
      900: "#1F1F1E",
    },
    gray: {
      500: "#3E3E3C",
      600: "#343432",
      700: "#2A2A28",
      800: "#242423",
      900: "#1F1F1E",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "sm",
      },
    },
    Input: {
      baseStyle: {},
      sizes: {
        md: {
          field: {
            borderRadius: "sm",
          },
        },
      },
      defaultProps: {
        errorBorderColor: "red.500",
        focusBorderColor: "red.300",
      },
    },
    Textarea: {
      defaultProps: {
        errorBorderColor: "red.500",
        focusBorderColor: "red.300",
      },
    },
  },
  fonts: {
    body: "Montserrat",
  },
});

export default Theme;
