import { RESTAURANTS } from "@/constants/mock";
import { Restaurant } from "@/types";
import React from "react";

interface RestaurantProviderProps {
  children: React.ReactNode;
  id: string;
}

interface RestaurantProviderContext {
  restaurant: Restaurant;
}

const restaurantProviderContext = React.createContext(
  {} as RestaurantProviderContext
);
const Provider = restaurantProviderContext.Provider;
const RestaurantProvider = ({ children, id }: RestaurantProviderProps) => {
  const restaurant = RESTAURANTS[id];
  if (restaurant == undefined)
    throw new Error(`Restaurant ${restaurant} not found`);
  return <Provider value={{ restaurant }}>{children}</Provider>;
};

export default RestaurantProvider;
export { restaurantProviderContext };
