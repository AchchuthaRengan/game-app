import useTrailers from "@/hooks/useTrailers";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function GameTrailer() {
  const router = useRouter();
  const gameId = router.query.id;
  const { data, error, isLoading } = useTrailers(gameId?.toString()!, "/games");
  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (data)
    return (
      <>
        <Box marginY={5}>
          <Heading marginY={5}>Trailer</Heading>
          <Box style={{borderRadius:'10px', overflow:'hidden'}} width={{base:'250px',md:'500px',xs:'150px'}}>
          <video
            src={data?.results[0]?.data[480]}
            poster={data?.preview}
            controls            
          />
          </Box>
        </Box>
      </>
    );
  return <Text>No Trailers Found</Text>;
}

export default GameTrailer;
