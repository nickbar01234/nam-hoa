import { Cart, CartItem, Menu, MenuItem } from "@/types";
import { isSameCartItem } from "@/utils";
import React from "react";

interface CartProviderProps {
  children?: React.ReactNode;
  menu: Menu;
}

interface CartProviderContext {
  cart: Cart;
  menu: Menu;
  getMenuItem: (category: string, name: string) => MenuItem;
  addToCart: (item: CartItem) => void;
  summarizeCart: (item?: MenuItem) => { count: number; total: number };
}

const cartProviderContext = React.createContext({} as CartProviderContext);

const Provider = cartProviderContext.Provider;
const CartProvider = ({ children, menu }: CartProviderProps) => {
  const [cart, setCart] = React.useState<Cart>([]);

  const getMenuItem = (category: string, name: string) => {
    const maybeMenuItem = menu.find(
      (item) => item.category === category && item.name === name
    );
    if (maybeMenuItem == undefined)
      throw new Error(`Can't find ${category}-${name} from ${menu}`);
    return maybeMenuItem;
  };

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

  const summarizeCart = (item?: MenuItem) => {
    const cartForItem = cart.filter((c) =>
      item == undefined
        ? true
        : item.category === c.category && item.name === c.name
    );
    const count = cartForItem
      .map((c) => c.quantity)
      .reduce((acc, quantity) => acc + quantity, 0);
    const total = cartForItem.reduce((acc, c) => {
      const item = getMenuItem(c.category, c.name);
      return acc + item.price * c.quantity;
    }, 0);
    return { count, total };
  };

  return (
    <Provider
      value={{
        cart,
        addToCart,
        menu,
        getMenuItem,
        summarizeCart,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
export { cartProviderContext };
