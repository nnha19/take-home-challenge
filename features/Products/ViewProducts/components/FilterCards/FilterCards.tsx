import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import {
  FilterContainer,
  FilterWrapper,
  SearchCardsInput,
} from "./FilterCards.styled";

import { CardType } from "../../types";

interface FilterCardsType {
  handleSearchCards: (query: string) => void;
  setDisplaySkeletons: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  setFilteredResult: React.Dispatch<React.SetStateAction<boolean>>;
  handleFilterCards: (selectedOption: string, type: string) => void;
  setSearchQuery: React.Dispatch<
    React.SetStateAction<{
      name: string;
      rarity: string;
      types: string;
    }>
  >;
}

const FilterCards: React.FC<FilterCardsType> = ({
  handleSearchCards,
  setDisplaySkeletons,
  setCards,
  data,
  handleFilterCards,
  setFilteredResult,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = ({ target: { value } }: any) => {
    setSearchQuery(value);
  };

  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    //   Wait for 600 milisec before calling the api to see if user continues typing
    setDisplaySkeletons(true);
    if (searchQuery !== "") {
      if (timer) {
        clearTimeout(timer);
      }
      const clearTimer = setTimeout(() => {
        handleSearchCards(searchQuery);
        setFilteredResult(true);
      }, 2000);
      setTimer(clearTimer);
    } else {
      if (timer) clearTimeout(timer);
      setDisplaySkeletons(false);
      setCards(data.data.data);
      setFilteredResult(false);
    }
  }, [searchQuery]);

  const options = ["opt1", "opt2", "opt3", "opt4"];

  const types = [
    "Colorless",
    "Darkness",
    "Dragon",
    "Fairy",
    "Fighting",
    "Fire",
    "Grass",
    "Lightning",
    "Metal",
    "Psychic",
    "Water",
  ];

  const rarityOptions = [
    "Amazing Rare",
    "Common",
    "LEGEND",
    "Promo",
    "Rare",
    "Rare ACE",
    "Rare BREAK",
    "Rare Holo",
    "Rare Holo EX",
    "Rare Holo GX",
    "Rare Holo LV.X",
    "Rare Holo Star",
    "Rare Holo V",
    "Rare Holo VMAX",
    "Rare Prime",
    "Rare Prism Star",
    "Rare Rainbow",
    "Rare Secret",
    "Rare Shining",
    "Rare Shiny",
    "Rare Shiny GX",
    "Rare Ultra",
    "Uncommon",
  ];

  return (
    <FilterWrapper>
      <FilterContainer>
        <SearchCardsInput
          value={searchQuery}
          onChange={handleChange}
          type="text"
          placeholder="Name..."
        />
        <Dropdown
          className="filterByType"
          options={types}
          onChange={(value) =>
            handleFilterCards(value.value.toLowerCase(), "types")
          }
          placeholder="Types"
        />
        <Dropdown
          className="filterByType"
          options={rarityOptions}
          onChange={(value) => {
            handleFilterCards(value.value.toLowerCase(), "rarity");
          }}
          placeholder="Rarity"
        />
        <Dropdown
          className="filterByType"
          options={options}
          onChange={(values) => {}}
          placeholder="Set"
        />
      </FilterContainer>
    </FilterWrapper>
  );
};

export default FilterCards;
