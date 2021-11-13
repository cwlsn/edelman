import { Link } from "gatsby";
import React from "react";
import { Box, Flex, Text } from "theme-ui";
import Logo from "../assets/logo-with-text.svg";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Box mx="auto" sx={{ width: 1000 }}>
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
        <Text variant="eyebrow" sx={{ position: "absolute", top: 0, right: 0 }}>
          Beta
        </Text>
      </Flex>
      <main>{children}</main>
      <footer>
        <div>
          <div>
            &copy; {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </footer>
    </Box>
  </>
);

export default Layout;
