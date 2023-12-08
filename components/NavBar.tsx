import React from "react";
import { GridItem, HStack, Heading, Text } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import ColorSwitch from "./ColorSwitch";
import Link from "next/link";

function NavBar() {
  return (
    <GridItem area="nav">
      <HStack padding="10px" borderBottom="2px">
        <Text
          fontSize={{ base: "18px", md: "40px", lg: "56px" }}
          fontWeight="500"
          whiteSpace="nowrap"
        >
          <Link href={'/'}>Gamr Empire</Link>
        </Text>
        <SearchBar />
        <ColorSwitch />
      </HStack>
    </GridItem>
  );
}

export default NavBar;
