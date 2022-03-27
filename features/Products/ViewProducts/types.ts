export interface CardType {
  name: string;
  types: string[];
  rarity: string;
  cardmarket: { prices: { averageSellPrice: string } };
  id: string;
  images: { small: string; large: string };
  set: { total: number };
}

export interface CartItemType extends CardType {
  pickedQty: number;
}

export interface SearchQueryType {
  name?: string;
  types?: string;
  rarity?: string;
}
