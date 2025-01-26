export enum OptionType {
  SINGLE_CHOICE,
}

export interface Option {
  type: OptionType;
  label: string;
  choices: string[];
}

export interface MenuItem {
  category: string;
  name: string;
  price: number;
  url: string;
  description: string;
  options: Option[];
}

export type Menu = MenuItem[];

export interface Restaurant {
  name: string;
  menu: Menu;
}

export type Restaurants = Record<string, Restaurant>;
