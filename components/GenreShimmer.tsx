import {  
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import React from "react";

function GenreShimmer() {
  return (
    <List>
      <ListItem paddingY="15px" paddingX="15px">
        <Skeleton boxSize="32px" borderRadius={8}/>
        <Stack>
          <SkeletonText />
        </Stack>
      </ListItem>
    </List>
  );
}

export default GenreShimmer;
