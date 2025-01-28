"use client";

import Menu from "@/components/menu";
import { RESTAURANTS } from "@/constants/mock";
import CartProvider from "@/context/CartProvider";
import { useParams, useSearchParams } from "next/navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Cart from "@/components/cart";
import RestaurantProvider from "@/context/RestaurantProvider";
import Header from "@/components/layout/Header";
import { addOrder } from "@/db";
import { OrderStatus } from "@/types";

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const query = useSearchParams();
  const table = query.get("table");

  if (table == null) throw new Error("Table is undefined");

  return (
    <RestaurantProvider id={id}>
      <CartProvider
        table={table}
        onSubmit={(cart) =>
          addOrder({ table, cart, status: OrderStatus.PENDING })
        }
      >
        <div className="relative">
          <div className="flex flex-col gap-y-4 h-full">
            <Header leftIcon={<Cart />} />
            <Menu />
          </div>
        </div>
      </CartProvider>
    </RestaurantProvider>
  );
};

export default Page;
