import { Genres } from "@/Interfaces/IGameHub";
import useGenres from "@/hooks/useGenres";
// import useGenres from "@/hooks/useGenres";
import useGameQuery from "@/Store/GameQueryStore";
import CroppedImageSrvc from "@/pages/api/CroppedImgServc";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
// import GenreShimmer from "./GenreShimmer";


function GenreList() {
  const { data, error, isLoading } = useGenres();  
  const setGenreId = useGameQuery(g=>g.setGenreId);
  const selectedGenreId = useGameQuery(s=>s.gameQuery.genreId);
  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) {
    return null;
  }
  

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {/* Spinner - Chakra */}
        {isLoading && <Spinner />}
        {/* or */}
        {/* Shimmer - Skeleton */}
        {/* {isLoading && skeletons.map((skeleton) => <GenreShimmer key={skeleton}/>)} */}
        {data?.pages.map((page,index) => (
          <React.Fragment key={index}>
            {page.results.map((genre:Genres) => {
              return (
                <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    objectFit="cover"
                    src={CroppedImageSrvc(genre.image_background)}
                    alt={genre.name}
                    boxSize="32px"
                    borderRadius={8}
                  />
                  <Button
                    fontWeight={
                      genre.id === selectedGenreId ? "bold" : "normal"
                    }
                    onClick={() => setGenreId(genre.id)}
                    size="lg"
                    variant="link"
                    whiteSpace="normal"
                    textAlign="left"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
              )
            })}
          </React.Fragment>
        ))}        
      </List>      
    </>
  );
}

export default GenreList;




