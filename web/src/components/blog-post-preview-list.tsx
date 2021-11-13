import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";

function BlogPostPreviewGrid(props) {
  return (
    <div>
      {props.title && <h2>{props.title}</h2>}
      {props.nodes &&
        props.nodes.map((node) => <BlogPostPreview {...node} isInList />)}
      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
