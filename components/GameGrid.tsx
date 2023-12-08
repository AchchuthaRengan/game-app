import React, { useState } from "react";
import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "@/components/GameCard";
import CardShimmer from "@/components/CardShimmer";
import CardWrapper from "@/components/CardWrapper";
import { Game, Genres, Platform } from "@/Interfaces/IGameHub";
import useGames from "@/hooks/useGames";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQuery from "@/Store/GameQueryStore";
//import { GameQuery } from "./HomeLayout";



function GameGrid() {
  //useGames Hook
  const gameQuery = useGameQuery(g=>g.gameQuery);
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (error) {
    return <Text>{error ? <p>Something Went Wrong</p> : ""}</Text>;
  }

  const fetchedLength = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  ) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedLength}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <div style={{ textAlign: "center" }}>
            <p>You Caught All Games up!</p>
          </div>
        }
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding={10}
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <CardWrapper key={skeleton}>
                <CardShimmer key={skeleton} />
              </CardWrapper>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <CardWrapper key={game.id}>
                  <GameCard key={game.id} game={game} />
                </CardWrapper>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
        {/* {hasNextPage && (
        <Button
          size="md"
          variant="solid"
          onClick={() => fetchNextPage()}
          marginX="10"
          marginY="3"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
