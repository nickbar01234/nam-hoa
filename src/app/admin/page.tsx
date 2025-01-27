"use client";

import Orders from "@/components/orders";
import OrderProvider from "@/context/OrderProvider";
import React from "react";

const Page = () => {
  return (
    <div className="relative h-full bg-white">
      <div className="flex flex-col gap-y-4 h-full">
        <div className="bg-white flex justify-between shadow-lg px-4 py-2 items-center sticky top-0 z-50">
          <div className="justify-between flex flex-col gap-y-[1px]">
            <h1 className="text-2xl text-[#BD1E2D]">Nam Hoa</h1>
            <p className="text-sm italic text-[#11763D]">
              Noodles & Asian Kitchen
            </p>
          </div>
        </div>
        <OrderProvider>
          <Orders />
        </OrderProvider>
      </div>
    </div>
  );
};

export default Page;
