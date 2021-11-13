import { sage, sageDark } from "@radix-ui/colors";

const theme = {
  colors: {
    text: sage.sage12,
    background: sage.sage1,
    modes: {
      dark: {
        text: sageDark.sage12,
        background: sageDark.sage1,
      },
    },
  },
  styles: {
    root: {
      bg: "background",
      fontFamily: "'Lato', sans-serif",
    },
  },
};

export default theme;
