import { Button, Text } from "@chakra-ui/react";
import React, { ReactElement, useState } from "react";

interface Props {
  children: any;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if(!children) return <Text>Something Went Wrong :(</Text>

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.substring(0, limit) + '...';

  return (
    <Text>
      {summary}{" "}
      <Button
        colorScheme="yellow"
        size="xs"
        marginLeft={1}
        fontWeight={"bold"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
