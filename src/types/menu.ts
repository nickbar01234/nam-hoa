import { Timestamp } from "firebase/firestore";

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

export interface CartItem extends Pick<MenuItem, "category" | "name"> {
  quantity: number;
  selection: Record<string, string[]>;
}

export type Cart = CartItem[];

export type Menu = MenuItem[];

export interface Restaurant {
  name: string;
  menu: Menu;
}

export type Restaurants = Record<string, Restaurant>;

export enum OrderStatus {
  PENDING,
  IN_PROGRESS,
  DONE,
}

export interface Order {
  table: string;
  status: OrderStatus;
  cart: Cart;
  timestamp?: Timestamp;
}

export type Orders = Order[];
