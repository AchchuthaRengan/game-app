import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import classes from '../styles/Home.module.css';
import useGameQuery from "@/Store/GameQueryStore";

function SearchBar() {
  const setSearchText = useGameQuery(s=>s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      //onSearch(ref.current.value);
      setSearchText(ref.current.value);
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="search"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
