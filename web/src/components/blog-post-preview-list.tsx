import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import { Flex, Box, Text } from "theme-ui";
import React from "react";

function BlogPostPreviewGrid(props) {
  return (
    <Box>
      {props.title && <h2>{props.title}</h2>}
      {props.nodes &&
        props.nodes.map((node) => <BlogPostPreview {...node} isInList />)}
      {props.browseMoreHref && (
        <Text
          as="p"
          variant="seeMore"
          sx={{ textAlign: "right", paddingTop: 3 }}
        >
          <Link to={props.browseMoreHref}>See more</Link>
        </Text>
      )}
    </Box>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
