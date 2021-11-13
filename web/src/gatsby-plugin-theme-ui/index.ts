import { sage, sageDark, teal, tealDark } from "@radix-ui/colors";

const theme = {
  colors: {
    text: sage.sage12,
    background: sage.sage1,
    muted: sage.sage11,
    card: sage.sage3,
    primary: teal.teal9,
    primaryDark: teal.teal8,
    border: sage.sage6,
    modes: {
      dark: {
        text: sageDark.sage12,
        background: sageDark.sage1,
        muted: sageDark.sage11,
        card: sageDark.sage3,
        primary: tealDark.teal9,
        primaryDark: tealDark.teal8,
        border: sageDark.sage6,
      },
    },
  },
  fonts: {
    body: '"Lato", times',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48],
  lineHeights: [1.15, 1.5],
  fontWeights: {
    body: 400,
    bold: 700,
    black: 900,
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 128],
  radii: [0, 8, 16],
  styles: {
    root: {
      bg: "background",
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 2,
    },
  },
  text: {
    body: {
      fontSize: 3,
    },
    seeMore: {
      fontSize: 3,
      fontWeight: "black",
      textTransform: "uppercase",
      "& > a": {
        color: "text",
        textDecoration: "none",
        padding: 3,
        bg: "primary",
        borderRadius: 1,
        "&:hover": {
          bg: "primaryDark",
        },
      },
    },
    eyebrow: {
      color: "muted",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: 1,
    },
    postTitle: {
      color: "text",
      fontSize: 6,
      "& > a": {
        color: "text",
        textDecoration: "none",
        "&:hover": {
          color: "primary",
        },
      },
    },
  },
};

export default theme;
