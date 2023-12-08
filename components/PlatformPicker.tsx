import { Platform } from "@/Interfaces/IGameHub";
import useGameQuery from "@/Store/GameQueryStore";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { platform } from "os";
import React from "react";
import { BsChevronDown } from "react-icons/bs";


function PlatformPicker() {
  const { data, error, isLoading } = usePlatforms();  
  const selectedPlatformId = useGameQuery(p=>p.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);
  const setPlatformId = useGameQuery(s=>s.setPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformId
          ? selectedPlatform?.map((plat) => plat?.name)
          : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((platform: Platform) => {
              return (
                <MenuItem
                  onClick={() => {
                    setPlatformId(platform.id);
                  }}
                  key={platform.id}
                >
                  {platform.name}
                </MenuItem>
              );
            })}
          </React.Fragment>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformPicker;
