import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import {
  FilterContainer,
  FilterWrapper,
  SearchCardsInput,
} from "./FilterCards.styled";

import { CardType, SearchQueryType } from "../../types";
import Text from "../../../../../components/Text/Text";

interface FilterCardsType {
  setDisplaySkeletons: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  searchQuery: SearchQueryType;
  setSearchQuery: React.Dispatch<React.SetStateAction<SearchQueryType>>;
}

const FilterCards: React.FC<FilterCardsType> = ({
  setDisplaySkeletons,
  setCards,
  data,
  searchQuery,
  setSearchQuery,
}) => {
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

  const handleClearFilter = () => {
    setSearchQuery({});
    setCards(data.data.data);
    setDisplaySkeletons(false);
  };

  return (
    <FilterWrapper>
      <FilterContainer>
        <SearchCardsInput
          value={searchQuery["name"] ? searchQuery["name"] : ""}
          onChange={(e) =>
            setSearchQuery((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
          placeholder="Name..."
        />
        <Dropdown
          className="filterByType"
          options={types}
          onChange={(value) =>
            // handleFilterCards(value.value.toLowerCase(), "types")
            setSearchQuery((prev) => ({ ...prev, types: value.value }))
          }
          placeholder="Types"
        />
        <Dropdown
          className="filterByType"
          options={rarityOptions}
          onChange={(value) => {
            setSearchQuery((prev) => ({ ...prev, rarity: value.value }));
          }}
          placeholder="Rarity"
        />
        <Dropdown
          className="filterByType"
          options={options}
          //   onChange={(values) => {
          // I am not sure how filter by Set is supposed to work since Set is an object.
          // }}
          placeholder="Set"
        />
      </FilterContainer>
      <Text
        onClick={handleClearFilter}
        textDecoration="underline"
        cursor="pointer"
        margin="1rem auto"
        style={{ width: "max-content" }}
      >
        Clear filter
      </Text>
    </FilterWrapper>
  );
};

export default FilterCards;
