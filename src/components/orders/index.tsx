import { OrderStatus } from "@/types";
import React from "react";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useOrders } from "@/hooks";
import { groupByOrderStatus } from "@/utils";
import Order from "./Order";
import { STATUSES } from "@/constants";

const Orders = () => {
  const { orders } = useOrders();
  const ordersByStatus = groupByOrderStatus(orders);
  const statueRefs = React.useRef<
    Record<OrderStatus, HTMLButtonElement | null>
  >({
    [OrderStatus.PENDING]: null,
    [OrderStatus.IN_PROGRESS]: null,
    [OrderStatus.DONE]: null,
  });

  return (
    <Tabs defaultValue={Object.keys(STATUSES)[0]} className="relative">
      <div className="mb-32">
        {Object.keys(STATUSES).map((key) => (
          <TabsContent
            key={key}
            value={key}
            className="px-4 flex flex-col gap-4 mt-0"
          >
            {(ordersByStatus[Number(key) as OrderStatus] ?? []).map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </TabsContent>
        ))}
      </div>
      <TabsList className="w-full flex gap-x-4 bg-white min-h-fit px-8 fixed bottom-0 z-50 shadow-[rgba(50,50,50,0.75)_0px_10px_15px_0px] border-t py-3">
        <ScrollArea className="whitespace-nowrap w-full">
          <div className="flex gap-x-4 justify-center">
            {Object.keys(STATUSES).map((status) => {
              const key = Number(status) as OrderStatus;
              return (
                <TabsTrigger
                  ref={(node) => {
                    statueRefs.current[key] = node;
                  }}
                  key={status}
                  value={status}
                  className="data-[state=active]:bg-[#BD1E2D] data-[state=active]:text-white px-4 py-2 bg-[#E5E5E5] rounded-md"
                  onClick={() => {
                    const ref = statueRefs.current[key];
                    if (ref != null) ref.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {STATUSES[key]}
                </TabsTrigger>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </TabsList>
    </Tabs>
  );
};

export default Orders;
