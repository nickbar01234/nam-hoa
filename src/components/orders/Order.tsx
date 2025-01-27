import { IdentifiableOrder } from "@/types";

interface OrderProps {
  order: IdentifiableOrder;
}

const Order = ({ order }: OrderProps) => {
  return (
    <div className="flex flex-col gap-y-4 bg-white shadow-lg p-4">
      <h2 className="text-lg">Bàn {order.table}</h2>
      <div>hi</div>
    </div>
  );
};

export default Order;
