import { Menu } from "@/types";
import React from "react";

interface CartProviderProps {
  children?: React.ReactNode;
  menu: Menu;
}

interface CartProviderContext {
  cart: unknown[];
  menu: Menu;
}

const cartProviderContext = React.createContext({} as CartProviderContext);

const Provider = cartProviderContext.Provider;
const CartProvider = ({ children, menu }: CartProviderProps) => {
  return <Provider value={{ cart: [], menu }}>{children}</Provider>;
};

export default CartProvider;
export { cartProviderContext };
