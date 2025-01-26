import { cartProviderContext } from "@/context/CartProvider";
import React from "react";

export const useCart = () => React.useContext(cartProviderContext);
