import useGameQuery from "@/Store/GameQueryStore";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
    const selectedSortOrder = useGameQuery(s=>s.gameQuery.sortOrder);
    const setSortOrder = useGameQuery(s=>s.setSortOrder);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find((order) => order.value === selectedSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {/* {data.map((platform) => {
                return <MenuItem onClick={() => {onSelectPlatform(platform)}} key={platform.id}>{platform.name}</MenuItem>
            })} */}
        {sortOrders.map((order) => {
            return <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>
                {order.label}
            </MenuItem>
        })}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
