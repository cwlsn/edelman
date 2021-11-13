import { Link } from "gatsby";
import React from "react";
import { Box, Flex, Text } from "theme-ui";
import Logo from "../assets/logo-with-text.svg";

const Layout = ({ children }) => (
  <>
    <Box
      mx="auto"
      sx={{ width: ["100%", null, null, 960], paddingX: [3, null, null, 0] }}
    >
      <Flex
        as="header"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          py: 3,
          position: "relative",
        }}
      >
        <Link to="/">
          <img src={Logo} width="300" alt="Yards to Gain" />
        </Link>
        <Text variant="eyebrow" sx={{ position: "absolute", top: 2, right: 0 }}>
          Beta
        </Text>
      </Flex>
      <main>{children}</main>
      <Flex
        as="footer"
        sx={{
          color: "muted",
          padding: 3,
          marginTop: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        &copy; Yards to Gain
      </Flex>
    </Box>
  </>
);

export default Layout;
