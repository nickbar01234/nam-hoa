"use client";

import Header from "@/components/layout/Header";
import Orders from "@/components/orders";
import OrderProvider from "@/context/OrderProvider";
import RestaurantProvider from "@/context/RestaurantProvider";
import React from "react";

const Page = () => {
  return (
    <RestaurantProvider id="nam-hoa">
      <div className="relative">
        <div className="flex flex-col gap-y-4 h-full">
          <Header />
          <OrderProvider>
            <Orders />
          </OrderProvider>
        </div>
      </div>
    </RestaurantProvider>
  );
};

export default Page;
