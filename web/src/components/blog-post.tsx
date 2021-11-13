import { differenceInDays, formatDistance, format } from "date-fns";
import { Box, Image, Flex, Text } from "theme-ui";
import AuthorList from "./author-list";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } =
    props;
  return (
    <Box as="article">
      {mainImage && mainImage.asset && (
        <Image
          sx={{ borderRadius: 2 }}
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1000)
            .height(Math.floor((9 / 16) * 1000))
            .fit("crop")
            .auto("format")
            .url()}
          alt={mainImage.alt}
        />
      )}
      <Text as="h1" variant="postTitle">
        {title}
      </Text>
      {publishedAt && (
        <Text variant="eyebrow">
          {differenceInDays(new Date(publishedAt), new Date()) > 3
            ? formatDistance(new Date(publishedAt), new Date())
            : format(new Date(publishedAt), "MMMM Mo, yyyy")}
        </Text>
      )}
      <Box>{_rawBody && <PortableText blocks={_rawBody} />}</Box>
      <Flex
        as="aside"
        sx={{
          bg: "card",
          borderRadius: 1,
          padding: 3,
          flexDirection: "column",
        }}
      >
        {authors && <AuthorList items={authors} title="Authors" />}
        {categories && (
          <Box>
            <Text as="h4" variant="eyebrow" sx={{ marginBottom: 2 }}>
              Categories
            </Text>
            {categories.map((category) => (
              <Text
                key={category._id}
                sx={{
                  bg: "primaryDark",
                  padding: 2,
                  display: "inline-block",
                  marginRight: 2,
                  borderRadius: 1,
                }}
              >
                {category.title}
              </Text>
            ))}
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default BlogPost;
