import ExpandableText from "@/components/ExpandableText";
import GameAttribs from "@/components/GameAttribs";
import GameTrailer from "@/components/GameTrailer";
import Layout from "@/components/Layout";
import useGame from "@/hooks/useGame";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const GamesDetail = () => {
  const router = useRouter();
  const gameId = router.query.id;
  const {
    data: game,
    isLoading,
    error,
  } = useGame(gameId?.toString()!, `/games`);
  if (isLoading) return <Spinner />;
  if (error) return error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem marginX={5} marginY={5}>
        <Heading marginY={5}>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttribs game={game!} />
      </GridItem>
      <GridItem>
        <Box padding={5}>
          <GameTrailer />
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default GamesDetail;

GamesDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
