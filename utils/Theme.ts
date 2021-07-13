import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    toshokan: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#FC8181",
      600: "#F56565",
      700: "#F56565",
      800: "#F56565",
      900: "#F56565",
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
    NumberInput: {
      defaultProps: {
        errorBorderColor: "red.500",
        focusBorderColor: "red.300",
      },
    },
    Select: {
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
