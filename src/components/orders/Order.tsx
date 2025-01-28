import { IdentifiableOrder, OrderStatus } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { STATUSES } from "@/constants";
import { useOrders, useRestaurant } from "@/hooks";
import { formatPriceInVnd, summarizeCart } from "@/utils";
import OrderController from "./OrderController";

interface OrderProps {
  order: IdentifiableOrder;
}

const Order = ({ order }: OrderProps) => {
  const {
    restaurant: { menu },
  } = useRestaurant();
  const { updateOrderStatus } = useOrders();
  const { count, total } = summarizeCart(menu, order.cart);
  return (
    <div className="flex flex-col gap-y-4 bg-white shadow-lg p-4">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Bàn {order.table}</h2>
          {order.timestamp && (
            <p className="text-[#00000099] italic">
              {order.timestamp.toDate().toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              })}
            </p>
          )}
        </div>
        <p className="text-[#00000099] flex items-center gap-x-1">
          <span>{count} món</span>
          <span className="inline-block bg-[#A3A3A3] w-[6px] h-[6px] rounded-full" />
          <span>{formatPriceInVnd(total)}</span>
        </p>
      </div>
      <div className="flex justify-between items-center">
        <Select defaultValue={order.status.toString()}>
          <SelectTrigger className="w-3/6">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent className="px-2">
            {Object.entries(STATUSES).map(([status, label]) => (
              <SelectItem
                key={status}
                value={status}
                onClick={() =>
                  updateOrderStatus(order.id, Number(status) as OrderStatus)
                }
              >
                {label}
              </SelectItem>
            ))}
          </SelectContent>
          <OrderController order={order} />
        </Select>
      </div>
    </div>
  );
};

export default Order;
