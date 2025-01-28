import { addOrder } from "@/db";
import { useApiThrottle, useRestaurant } from "@/hooks";
import { Cart, CartItem, Menu, MenuItem, Order, OrderStatus } from "@/types";
import {
  isSameCartItem,
  getMenuItem as getMenuItemImpl,
  summarizeCart as summarizeCartImpl,
} from "@/utils";
import React from "react";

interface CartProviderProps {
  children?: React.ReactNode;
  table: string;
  cart?: Cart;
  onSubmit: (cart: Cart) => void;
}

interface CartProviderContext {
  cart: Cart;
  order: () => void;
  getMenuItem: (category: string, name: string) => MenuItem;
  addToCart: (item: CartItem) => void;
  summarizeCart: (item?: MenuItem) => { count: number; total: number };
}

const cartProviderContext = React.createContext({} as CartProviderContext);

const Provider = cartProviderContext.Provider;
const CartProvider = ({
  children,
  table,
  cart: providedCart,
  onSubmit,
}: CartProviderProps) => {
  const {
    restaurant: { menu },
  } = useRestaurant();
  const [cart, setCart] = React.useState<Cart>(providedCart ?? []);
  const { fn: order } = useApiThrottle({
    fn: async () => {
      onSubmit(cart);
      setCart([]);
    },
  });

  const getMenuItem = (category: string, name: string) =>
    getMenuItemImpl(menu, category, name);

  const addToCart = (item: CartItem) =>
    setCart((prev) => {
      if (
        prev.find((c) => isSameCartItem(item, c)) == undefined &&
        item.quantity > 0
      ) {
        return [...prev, item];
      } else {
        return prev
          .map((c) =>
            isSameCartItem(item, c)
              ? { ...c, quantity: c.quantity + item.quantity }
              : c
          )
          .filter((c) => c.quantity > 0);
      }
    });

  const summarizeCart = (item?: MenuItem) =>
    summarizeCartImpl(menu, cart, item);

  return (
    <Provider
      value={{
        cart,
        addToCart,
        getMenuItem,
        summarizeCart,
        order,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
export { cartProviderContext };
