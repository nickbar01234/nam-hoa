import { deleteOrders, listenForOrders, setOrder } from "@/db";
import { useOnMount } from "@/hooks";
import { IdentifiableOrders, Menu, Order, OrderStatus } from "@/types";
import { mergeCarts } from "@/utils";
import React from "react";

interface OrderProviderProps {
  children: React.ReactNode;
}

interface OrderProviderContext {
  orders: IdentifiableOrders;
  updateOrderStatus: (id: string, status: OrderStatus) => Promise<void>;
}

const orderProviderContext = React.createContext({} as OrderProviderContext);
const Provider = orderProviderContext.Provider;

const OrderProvider = ({ children }: OrderProviderProps) => {
  // todo: remove unexpired
  const [orders, setOrders] = React.useState<IdentifiableOrders>([]);
  const ordersRef = React.useRef(orders);

  React.useEffect(() => {
    ordersRef.current = orders;
  }, [orders]);

  useOnMount(() => {
    const matcher = (query: Order) => (existed: Order) =>
      query.table === existed.table && existed.status != OrderStatus.DONE;

    const unsubscribe = listenForOrders((snapshot) =>
      snapshot.docChanges().forEach((change) => {
        const id = change.doc.id;
        const data = change.doc.data();
        console.log("Type", change.type, id, data);
        setOrders((prev) => {
          if (change.type === "removed") {
            return prev.filter((order) => order.id !== id);
          } else if (change.type === "modified") {
            const idx = prev.findIndex((order) => order.id === id);
            if (idx >= 0) {
              prev[idx] = { id, ...data };
            }
            return [...prev];
          } else {
            // 1. This document is added for the first time
            // 2. There's a matching table, but we would only like to modify if its either in progress or pending. If
            // a order is completed, there's nothing to do.
            const merge = prev.filter(matcher(data));
            if (merge.length === 0) {
              return [...prev, { id, ...data }];
            } else {
              // Get the first index to merge
              const idx = prev.findIndex(matcher(data));
              // Shouldn't be possible on setState callback, but doesn't hurt to be safe
              if (idx >= 0) {
                prev[idx] = {
                  ...prev[idx],
                  cart: mergeCarts([
                    data.cart,
                    ...merge.map((order) => order.cart),
                  ]),
                };
              }
              const ids = merge.map((order) => order.id).slice(1);
              deleteOrders([...ids, id]);
              return prev.filter((order) => !ids.includes(order.id));
            }
          }
        });
      })
    );

    return () => unsubscribe();
  });

  const updateOrderStatus = async (id: string, status: OrderStatus) => {
    const order = orders.find((order) => order.id === id);
    if (order != undefined) await setOrder({ ...order, status });
  };

  return <Provider value={{ orders, updateOrderStatus }}>{children}</Provider>;
};

export default OrderProvider;
export { orderProviderContext };
