import { MenuItem, OptionType } from "@/types";
import { groupByOptionType } from "@/utils";
import React from "react";

interface ItemProviderProps {
  children: React.ReactNode;
  item: MenuItem;
}

interface ItemProviderContext {
  item: MenuItem;

  canSubmit: boolean;

  getSelectedOptions: (label: string) => string[];
  selectOption: (label: string, choice: string) => void;

  quantity: number;
  adjustQuantity: (increment: number) => void;

  onSubmit: () => void;
}

const itemProviderContext = React.createContext({} as ItemProviderContext);
const Provider = itemProviderContext.Provider;

const ItemController = ({ children, item }: ItemProviderProps) => {
  const [selected, setSelected] = React.useState<Record<string, string[]>>({});
  const [quantity, setQuantity] = React.useState(1);
  const [canSubmit, setCanSubmit] = React.useState(false);

  const labelToType = groupByOptionType(item.options);

  const getSelectedOptions = (label: string) => selected[label] ?? [];

  const selectOption = (label: string, choice: string) => {
    if (labelToType[label] == undefined) {
      throw new Error(`Unmapped ${label}. Most likely a bug`);
    } else if (labelToType[label] == OptionType.SINGLE_CHOICE) {
      setSelected((prev) => ({ ...prev, [label]: [choice] }));
    } else {
      throw new Error(`Unsupported ${label} with type ${labelToType[label]}`);
    }
  };

  const adjustQuantity = (increment: number) =>
    setQuantity((prev) => Math.max(1, prev + increment));

  const onSubmit = () => {
    setSelected({});
    setQuantity(1);
  };

  React.useEffect(() => {
    setCanSubmit(() =>
      item.options
        .map((option) => option.label)
        .every((option) => {
          const selection = selected[option] ?? [];
          return (
            labelToType[option] === OptionType.SINGLE_CHOICE &&
            selection.length > 0
          );
        })
    );
  }, [selected, labelToType, item]);

  return (
    <Provider
      value={{
        item,
        canSubmit,
        getSelectedOptions,
        selectOption,
        quantity,
        adjustQuantity,
        onSubmit,
      }}
    >
      {children}
    </Provider>
  );
};

export default ItemController;
export const useItem = () => React.useContext(itemProviderContext);
