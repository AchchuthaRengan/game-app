import { Badge } from "@chakra-ui/react";

interface Props {
    criticscore:number
}

function CriticScore({criticscore}:Props) {

  const colorScheme = {
    good:'green',
    average:'yellow',
    bad:'red'
  }

  return (
    <>
      <Badge
        colorScheme={criticscore > 90 ? colorScheme.good : criticscore > 50 ? colorScheme.average : colorScheme.bad}
        fontSize={15}
        paddingX="5px"
        borderRadius="4px"
      >
        {criticscore}
      </Badge>
    </>
  );
}

export default CriticScore;
