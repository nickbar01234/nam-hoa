import { cartProviderContext } from "@/context/CartProvider";
import { orderProviderContext } from "@/context/OrderProvider";
import { restaurantProviderContext } from "@/context/RestaurantProvider";
import React from "react";

export const useRestaurant = () => React.useContext(restaurantProviderContext);

export const useCart = () => React.useContext(cartProviderContext);

export const useOrders = () => React.useContext(orderProviderContext);

export const useOnMount = (effect: React.EffectCallback) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(effect, []);

export * from "./useApiThrottle";
