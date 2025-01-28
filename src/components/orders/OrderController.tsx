import { IdentifiableOrder, OrderStatus } from "@/types";
import {
  faArrowRight,
  faMagnifyingGlass,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartProvider from "@/context/CartProvider";
import Menu from "@/components/menu";
import Header from "@/components/layout/Header";
import Cart from "@/components/cart";
import { setOrder } from "@/db";
import React from "react";
import { useToast } from "@/hooks/use-toast";

interface OrderControllerProps {
  order: IdentifiableOrder;
}

const InProgressOrderController = ({ order }: OrderControllerProps) => {
  const { cart } = order;
  const { toast } = useToast();

  return (
    <CartProvider
      cart={cart}
      onSubmit={(cart) => {
        setOrder({ ...order, status: OrderStatus.DONE, cart });
        toast({
          className:
            "fixed m-auto inset-0 h-fit w-fit bg-[#11763D] text-white flex justify-center text-2xl",
          description: "Bạn đã xác nhận món thành công!",
          duration: 2000,
        });
      }}
    >
      <div className="relative">
        <div className="flex flex-col gap-y-4 h-full">
          <Header
            title={<h1 className="text-2xl">{`Bàn ${order.table}`}</h1>}
            leftIcon={
              <Cart
                submitLabel="Xác nhận đơn"
                leftIcon={
                  <p className="text-lg italic text-[#00000099]">{`Bàn ${order.table}`}</p>
                }
              />
            }
          />
          <Menu />
        </div>
      </div>
    </CartProvider>
  );
};

const DetailViewOrderController = ({ order }: OrderControllerProps) => {
  const { cart } = order;
  const sheetOpenRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <p
        className="text-[#2E3A85] text-bold flex gap-x-2 items-center"
        onClick={() => {
          if (sheetOpenRef.current != null) sheetOpenRef.current.click();
        }}
      >
        <span>Xem chi tiết</span>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </p>
      <div className="hidden">
        <CartProvider cart={cart} onSubmit={(_cart) => Promise.resolve()}>
          <Cart
            submitLabel="Xác nhận đơn"
            leftIcon={
              <p className="text-lg italic text-[#00000099]">{`Bàn ${order.table}`}</p>
            }
            editable={false}
            sheetOpenRef={sheetOpenRef}
          />
        </CartProvider>
      </div>
    </>
  );
};
const OrderController = ({ order }: OrderControllerProps) => {
  return order.status === OrderStatus.IN_PROGRESS ? (
    <Sheet>
      <SheetClose className="hidden" />
      <SheetTrigger asChild>
        <p className="text-[#2E3A85] text-bold flex gap-x-2 items-center">
          <span>Sửa đơn</span>
          <FontAwesomeIcon icon={faPencil} />
        </p>
      </SheetTrigger>
      <SheetTitle className="hidden">Order</SheetTitle>
      <SheetContent
        side="bottom"
        className="h-5/6 p-0 flex flex-col gap-y-4 [&>button:first-child]:hidden"
      >
        <InProgressOrderController order={order} />
      </SheetContent>
    </Sheet>
  ) : (
    <DetailViewOrderController order={order} />
  );
};

export default OrderController;
