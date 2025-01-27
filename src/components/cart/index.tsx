import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks";
import CartItem from "./CartItem";
import { formatPriceInVnd, stringifyCartItem } from "@/utils";
import React from "react";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cart, summarizeCart } = useCart();
  const { count, total } = summarizeCart();
  const sheetCloseRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (count === 0 && sheetCloseRef.current != null)
      sheetCloseRef.current.click();
  }, [count]);

  return (
    <Sheet>
      <SheetClose className="hidden" ref={sheetCloseRef} />
      <SheetTrigger
        disabled={count === 0}
        className="text-black disabled:text-[#00000099]"
      >
        <div className="relative flex justify-center">
          <div className="absolute -top-3 -right-3 z-50 bg-[#BD1E2D] text-white rounded-full h-6 w-6 text-sm flex items-center justify-center p-1">
            {count}
          </div>
          <FontAwesomeIcon icon={faShoppingCart} size="xl" />
        </div>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-5/6 p-0 flex flex-col gap-y-4 [&>button:first-child]:hidden"
      >
        <SheetTitle className="text-2xl shadow-xl py-3 px-4 text-[#171717] font-medium">
          Giỏ Hàng
        </SheetTitle>
        <ScrollArea
          className="overflow-auto hide-scrollbar pb-24"
          type="scroll"
        >
          <div className="flex flex-col gap-y-4">
            {cart.map((item) => (
              <div
                key={stringifyCartItem(item)}
                className="flex flex-col gap-y-4"
              >
                <CartItem item={item} />
                <Separator className="border-[1px] text-[#D4D4D4]" />
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="absolute bottom-0 w-full flex flex-col gap-y-2 h-fit bg-white border-t shadow-[rgba(50,50,50,0.75)_0px_10px_15px_0px] py-3 px-6">
          <div className="flex justify-between font-medium">
            <p>Tổng: {count} món</p>
            <p>{formatPriceInVnd(total)}</p>
          </div>
          <div className="w-full flex justify-center">
            <Button
              className="bg-[#2E3A85] text-white transition duration-300 ease-in-out hover:bg-[#405F9A] focus:bg-[#405F9A] focus:ring-2 focus:ring-offset-2 focus:ring-[#405F9A] py-3 px-12 w-full"
              onTouch="hover:bg-[#1C2C63] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#1C2C63] focus:ring-offset-2"
              size="lg"
            >
              Gọi món
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
