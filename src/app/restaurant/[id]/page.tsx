"use client";

import Menu from "@/components/menu";
import { RESTAURANTS } from "@/constants/mock";
import CartProvider from "@/context/CartProvider";
import { useParams } from "next/navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Cart from "@/components/cart";

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = RESTAURANTS[id];
  if (restaurant == undefined) throw new Error("Restaurant is undefined");

  return (
    <CartProvider menu={restaurant.menu}>
      <div className="relative">
        <div className="flex flex-col gap-y-4 h-full">
          <div className="bg-white flex justify-between shadow-lg px-4 py-2 items-center sticky top-0 z-50">
            <div className="justify-between flex flex-col gap-y-[1px]">
              <h1 className="text-2xl text-[#BD1E2D]">{restaurant.name}</h1>
              <p className="text-sm italic text-[#11763D]">
                Noodles & Asian Kitchen
              </p>
            </div>
            <Cart />
          </div>
          <Menu />
        </div>
      </div>
    </CartProvider>
  );
};

export default Page;
