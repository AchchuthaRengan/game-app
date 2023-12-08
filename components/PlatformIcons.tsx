import { Platform } from "@/Interfaces/IGameHub";
import { Text, Icon, HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

function PlatformIcons({ platforms }: Props) {
  const icons:{[key:string]:IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms && platforms.map((platform) => (
        <Icon key={platform.id} as={icons[platform.slug]} color={"gray.500"}/>
      ))}      
    </HStack>
  );
}

export default PlatformIcons;
