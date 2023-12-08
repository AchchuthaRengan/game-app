import bullsEye from "../public/Assets/bulls-eye.webp";
import thumbsUp from "../public/Assets/thumbs-up.webp";
import meh from "../public/Assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: meh.src,
      alt: "meh",
      boxSize:'25px'
    },
    4: {
      src: thumbsUp.src,
      alt: "recommended",
      boxSize:'25px'
    },
    5: {
      src: bullsEye.src,
      alt: "Exceptional",
      boxSize:'35px'
    },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
}

export default Emoji;
