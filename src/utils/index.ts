import {
  Cart,
  CartItem,
  IdentifiableOrders,
  Menu,
  MenuItem,
  OptionType,
  OrderStatus,
} from "@/types";

const formatter = new Intl.NumberFormat("en-US", {
  currency: "VND",
  style: "currency",
});

export const groupByCategory = (menu: Menu) => {
  return Object.groupBy(menu, (item) => item.category);
};

export const formatPriceInVnd = (price: number) => {
  return formatter.format(price).slice(1) + " đ";
};

export const groupByOptionType = (options: MenuItem["options"]) =>
  options.reduce<Record<string, OptionType>>(
    (acc, option) => ({ ...acc, [option.label]: option.type }),
    {}
  );

export const groupByOrderStatus = (orders: IdentifiableOrders) =>
  orders.reduce((acc, order) => {
    acc[order.status] = [...(acc[order.status] ?? []), order];
    return acc;
  }, {} as Record<OrderStatus, IdentifiableOrders>);

export const stringifyCartItem = (item: CartItem) => {
  const stringifySelection = (selection: CartItem["selection"]) => {
    return Object.keys(selection)
      .sort()
      .map((type) => {
        const choices = selection[type] ?? [];
        return `${type}[${choices.sort().join(",")}]`;
      })
      .join("-");
  };
  return `${item.category}-${item.name}-${stringifySelection(item.selection)}`;
};

export const isSameCartItem = (item1: CartItem, item2: CartItem) =>
  stringifyCartItem(item1) === stringifyCartItem(item2);

export const mergeCarts = (carts: Cart[]) => {
  return carts
    .flatMap((cart) => cart)
    .reduce((acc, cart) => {
      const idx = acc.findIndex((c) => isSameCartItem(c, cart));
      if (idx >= 0) {
        acc[idx] = { ...acc[idx], quantity: acc[idx].quantity + cart.quantity };
        return acc;
      } else {
        return [...acc, cart];
      }
    }, [] as Cart);
};
