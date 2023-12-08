import { Heading } from "@chakra-ui/react";
import useGenres from "@/hooks/useGenres";
import { platform } from "os";
import usePlatforms from "@/hooks/usePlatforms";
import usePlatform from "@/hooks/usePlatform";
import useGenre from "@/hooks/useGenre";
import useGameQuery from "@/Store/GameQueryStore";



function HeadingChanger() {
  const mainGenre = useGenre();
  //specific Hook for finding Platforms
  const mainPlatform = usePlatform(); 
  const gameQuery = useGameQuery(g=>g.gameQuery);
  
  
  
  const heading = `${
    gameQuery.platformId ? mainPlatform?.map((plat) => plat?.name) : ""
  } ${gameQuery.genreId ? mainGenre?.map((genre) => genre?.name) : ""} Games`;

  return (
    <Heading as="h1" textAlign="start" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
}

export default HeadingChanger;
