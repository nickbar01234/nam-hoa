import { Menu, MenuItem, OptionType } from "@/types";

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
