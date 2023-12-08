import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import GenreList from "@/components/GenreList";
import HeadingChanger from "@/components/HeadingChanger";
import PlatformPicker from "@/components/PlatformPicker";
import SortSelector from "@/components/sortSelector";
import GameGrid from "@/components/GameGrid";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import Layout from "@/components/Layout";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5} paddingTop={5} borderRight="2px">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={10}>
            <HeadingChanger />
            <Flex paddingTop={5}>
              <Box marginRight={5}>
                <PlatformPicker />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
