import { Game } from "@/Interfaces/IGameHub";
import { Card, CardBody, Heading,HStack, Image } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import CroppedImageSrvc from "@/pages/api/CroppedImgServc";
import Emoji from "./Emoji";
import ImageShimmer from "./ImageShimmer";
import Link from "next/link";

interface Props {
  game: Game;  
}

const GameCard = ({ game }: Props) => {

  
  return (
    <Card>
      <Image
        src={
          game &&
          game.background_image &&
          CroppedImageSrvc(game.background_image)
        }        
        loading="lazy"
        onLoad={() => {
          <ImageShimmer />;
        }}
      />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIcons
            platforms={
              game &&
              game.parent_platforms &&
              game.parent_platforms.map((p) => p.platform)
            }
          />
          <CriticScore criticscore={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link href={`/games/${game.slug}`}>{game.name}</Link> <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
