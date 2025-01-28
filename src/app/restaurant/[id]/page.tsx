"use client";

import Menu from "@/components/menu";
import CartProvider from "@/context/CartProvider";
import { useParams, useSearchParams } from "next/navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Cart from "@/components/cart";
import RestaurantProvider from "@/context/RestaurantProvider";
import Header from "@/components/layout/Header";
import { addOrder } from "@/db";
import { OrderStatus } from "@/types";
import { useToast } from "@/hooks/use-toast";

const Page = () => {
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const query = useSearchParams();
  const table = query.get("table");

  if (table == null) throw new Error("Table is undefined");

  return (
    <RestaurantProvider id={id}>
      <CartProvider
        onSubmit={(cart) => {
          addOrder({ table, cart, status: OrderStatus.PENDING });
          toast({
            className:
              "fixed m-auto inset-0 h-fit w-fit bg-[#11763D] text-white flex justify-center text-2xl",
            description: "Bạn đã đặt món thành công! Chúc bạn ăn ngon miệng.",
            duration: 2000,
          });
        }}
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
