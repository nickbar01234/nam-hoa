import { useCart } from "@/hooks";
import { CartItem, MenuItem, OptionType } from "@/types";
import { groupByOptionType } from "@/utils";
import React from "react";

interface ItemProviderProps {
  children: React.ReactNode;
  item: MenuItem;
}

interface ItemProviderContext {
  item: MenuItem;
  cart: CartItem;

  canSubmit: boolean;

  getSelectedOptions: (label: string) => string[];
  selectOption: (label: string, choice: string) => void;

  adjustQuantity: (increment: number) => void;

  onSubmit: () => void;
  onClose: () => void;
}

const itemProviderContext = React.createContext({} as ItemProviderContext);
const Provider = itemProviderContext.Provider;

const ItemController = ({ children, item }: ItemProviderProps) => {
  const { addToCart } = useCart();
  const [cart, setCart] = React.useState<CartItem>({
    category: item.category,
    name: item.name,
    quantity: 1,
    selection: {},
  });
  const [canSubmit, setCanSubmit] = React.useState(false);

  const labelToType = groupByOptionType(item.options);

  const getSelectedOptions = (label: string) => cart.selection[label] ?? [];

  const selectOption = (label: string, choice: string) => {
    if (labelToType[label] == undefined) {
      throw new Error(`Unmapped ${label}. Most likely a bug`);
    } else if (labelToType[label] == OptionType.SINGLE_CHOICE) {
      setCart((prev) => ({
        ...prev,
        selection: { ...prev.selection, [label]: [choice] },
      }));
    } else {
      throw new Error(`Unsupported ${label} with type ${labelToType[label]}`);
    }
  };

  const adjustQuantity = (increment: number) =>
    setCart((prev) => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + increment),
    }));

  const onClose = () =>
    setCart((prev) => ({ ...prev, quantity: 1, selection: {} }));

  const onSubmit = () => addToCart(cart);

  React.useEffect(() => {
    setCanSubmit(() =>
      item.options
        .map((option) => option.label)
        .every((option) => {
          const selection = cart.selection[option] ?? [];
          return (
            labelToType[option] === OptionType.SINGLE_CHOICE &&
            selection.length > 0
          );
        })
    );
  }, [cart, labelToType, item]);

  return (
    <Provider
      value={{
        item,
        cart,
        canSubmit,
        getSelectedOptions,
        selectOption,
        adjustQuantity,
        onSubmit,
        onClose,
      }}
    >
      {children}
    </Provider>
  );
};

export default ItemController;
export const useItem = () => React.useContext(itemProviderContext);
