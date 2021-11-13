import { sage, sageDark } from "@radix-ui/colors";

const theme = {
  colors: {
    text: sage.sage12,
    background: sage.sage1,
    muted: sage.sage11,
    card: sage.sage3,
    modes: {
      dark: {
        text: sageDark.sage12,
        background: sageDark.sage1,
        muted: sageDark.sage11,
        card: sageDark.sage3,
      },
    },
  },
  fonts: {
    body: '"Lato", times',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  fontWeights: {
    body: 400,
    bold: 700,
    black: 900,
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 128],
  radii: [0, 8, 16],
  a: {
    color: "red",
  },
  styles: {
    root: {
      bg: "background",
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 2,
    },
  },
  text: {
    eyebrow: {
      color: "muted",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: 1,
    },
  },
};

export default theme;
