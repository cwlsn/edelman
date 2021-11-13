import React from "react";
import { Flex, Box, Text, Image } from "theme-ui";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

function AuthorList({ items, title }) {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Text variant="eyebrow" as="h4">
        {title}
      </Text>
      {items.map(({ author, _key }) => {
        const authorName = author && author.name;
        return (
          <Flex key={_key} sx={{ alignItems: "center", marginTop: 2 }}>
            {author && author.image && author.image.asset && (
              <Image
                sx={{ borderRadius: 999, marginRight: 2 }}
                src={imageUrlFor(buildImageObj(author.image))
                  .width(48)
                  .height(48)
                  .fit("crop")
                  .url()}
                alt=""
              />
            )}
            <Text>{authorName || <em>Missing name</em>}</Text>
          </Flex>
        );
      })}
    </Box>
  );
}

export default AuthorList;
