import { HStack,useColorMode,Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function ColorSwitch() {

    const {toggleColorMode,colorMode} = useColorMode();

  return (
    <HStack>
         <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    </HStack>
  )
}

export default ColorSwitch