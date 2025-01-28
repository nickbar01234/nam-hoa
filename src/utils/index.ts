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

export const getMenuItem = (menu: Menu, category: string, name: string) => {
  const maybeMenuItem = menu.find(
    (item) => item.category === category && item.name === name
  );
  if (maybeMenuItem == undefined)
    throw new Error(`Can't find ${category}-${name} from ${menu}`);
  return maybeMenuItem;
};

export const summarizeCart = (menu: Menu, cart: Cart, item?: MenuItem) => {
  const cartForItem = cart.filter((c) =>
    item == undefined
      ? true
      : item.category === c.category && item.name === c.name
  );
  const count = cartForItem
    .map((c) => c.quantity)
    .reduce((acc, quantity) => acc + quantity, 0);
  const total = cartForItem.reduce((acc, c) => {
    const item = getMenuItem(menu, c.category, c.name);
    return acc + item.price * c.quantity;
  }, 0);
  return { count, total };
};
