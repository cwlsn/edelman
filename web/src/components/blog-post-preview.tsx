import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { Box, Flex, Text, Image } from "theme-ui";
import { imageUrlFor } from "../lib/image-url";

function BlogPostPreview(props) {
  return (
    <Flex bg="card" sx={{ borderRadius: 1, padding: 3, marginBottom: 3 }}>
      {props.mainImage && props.mainImage.asset && (
        <Box sx={{ width: 400 }}>
          <Image
            sx={{
              borderRadius: 1,
              width: 400,
              height: 225,
              objectFit: "cover",
            }}
            src={imageUrlFor(buildImageObj(props.mainImage))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
          />
        </Box>
      )}
      <Box sx={{ pl: 3, width: 600 }}>
        <Text as="h2" variant="postTitle">
          <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
            {props.title}
          </Link>
        </Text>
        <Box>
          <Text variant="eyebrow">
            {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
          </Text>
        </Box>
        {props._rawExcerpt && (
          <Box>
            <PortableText blocks={props._rawExcerpt} />
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default BlogPostPreview;
