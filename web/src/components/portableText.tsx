import React from "react";
import clientConfig from "../../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers";
import { Box } from "theme-ui";

const PortableText = ({ blocks }) => (
  <Box
    sx={{
      p: {
        fontSize: 3,
        lineHeight: 1,
        fontWeight: "body",
        marginBottom: 4,
      },
      a: {
        color: "primary",
        textDecoration: "none",
        "&:hover": {
          color: "text",
        },
      },
      li: {
        fontSize: 3,
        marginBottom: 1,
      },
    }}
  >
    <BasePortableText
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  </Box>
);

export default PortableText;
