/* eslint-disable react-hooks/rules-of-hooks */
import type { MenuItem } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatPriceInVnd } from "@/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@/components/ui/separator";
import ItemController, { useItem } from "./ItemController";
import Option from "./Option";
import React from "react";
import { useCart } from "@/hooks";

interface MenuItemProps {
  item: MenuItem;
}

const _Item = () => {
  const { summarizeCart } = useCart();
  const { item, cart, adjustQuantity, canSubmit, onSubmit, onClose } =
    useItem();
  const sheetCloseRef = React.useRef<HTMLButtonElement | null>(null);
  const { quantity } = cart;
  const { count: inCartQuantity } = summarizeCart(item);

  return (
    <Sheet
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <SheetClose className="hidden" ref={sheetCloseRef} />
      <SheetTrigger asChild>
        <Button
          className="absolute bottom-[8px] right-[8px] rounded-full h-8 w-8 bg-[#F5F5F5] border-[1px] border-[#D1D1D1] text-[#000000DE] transition duration-300 ease-in-out font-semibold"
          onTouch="hover:bg-[#E0E0E0] hover:border-[#B1B1B1] hover:text-[#B1B1B1] focus:outline-none focus:ring-2 focus:ring-[#B1B1B1] focus:ring-offset-2"
        >
          {inCartQuantity > 0 ? (
            inCartQuantity
          ) : (
            <FontAwesomeIcon icon={faPlus} color="#000000DE" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-5/6 p-0 flex flex-col [&>button:first-child]:hidden"
      >
        <ScrollArea
          className="overflow-auto hide-scrollbar pb-28"
          type="scroll"
        >
          <div className="relative md:h-[400px] h-[186px]">
            <Image src={item.url} fill alt={item.name} objectFit="cover" />
          </div>
          <div className="p-4 flex flex-col gap-y-2">
            <div>
              <SheetTitle className="text-2xl font-bold">
                {item.name}
              </SheetTitle>
              <p>{formatPriceInVnd(item.price)}</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <SheetDescription className="flex flex-col gap-y-4">
                {item.description}
              </SheetDescription>
              {item.options.map((option) => (
                <div key={option.label} className="flex flex-col gap-y-4">
                  <Option option={option} />
                  <Separator className="border-[1px] text-[#D4D4D4]" />
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
        <div className="absolute bottom-0 w-full flex flex-col gap-y-2 h-fit bg-white border-t shadow-[rgba(50,50,50,0.75)_0px_10px_15px_0px] py-3 px-6">
          <div className="flex gap-x-4 justify-center items-center">
            <Button
              className="rounded-full h-8 w-8 bg-[#F5F5F5] border-[1px] border-[#D1D1D1] text-[#000000DE] transition duration-300 ease-in-out disabled:bg-[#E0E0E0] disabled:border-[#B1B1B1] disabled:text-[#B1B1B1] disabled:cursor-not-allowed"
              onTouch="hover:bg-[#E0E0E0] hover:border-[#B1B1B1] hover:text-[#B1B1B1] focus:outline-none focus:ring-2 focus:ring-[#B1B1B1] focus:ring-offset-2"
              onClick={() => adjustQuantity(-1)}
              disabled={quantity === 1}
            >
              <FontAwesomeIcon icon={faMinus} color="#000000DE" />
            </Button>
            <span className="text-black font-semibold">{quantity}</span>
            <Button
              className="rounded-full h-8 w-8 bg-[#F5F5F5] border-[1px] border-[#D1D1D1] text-[#000000DE] transition duration-300 ease-in-out disabled:bg-[#E0E0E0] disabled:border-[#B1B1B1] disabled:text-[#B1B1B1] disabled:cursor-not-allowed"
              onTouch="hover:bg-[#E0E0E0] hover:border-[#B1B1B1] hover:text-[#B1B1B1] focus:outline-none focus:ring-2 focus:ring-[#B1B1B1] focus:ring-offset-2"
              onClick={() => adjustQuantity(1)}
            >
              <FontAwesomeIcon icon={faPlus} color="#000000DE" />
            </Button>
          </div>
          <div className="w-full flex justify-center">
            <Button
              className="bg-[#2E3A85] text-white transition duration-300 ease-in-out py-3 px-12 w-full"
              size="lg"
              disabled={!canSubmit}
              onTouch="hover:bg-[#1C2C63] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#1C2C63] focus:ring-offset-2"
              onClick={() => {
                onSubmit();
                const ref = sheetCloseRef.current;
                if (ref != null) {
                  ref.click();
                }
              }}
            >
              Thêm {quantity} vào giỏ hàng
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Item = ({ item }: MenuItemProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="relative w-full xl:h-[240px] lg:h-[200px] md:h-[180px] h-[162px] rounded-md overflow-hidden shadow-lg">
        <Image src={item.url} fill alt={item.name} />
        <ItemController item={item}>
          <_Item />
        </ItemController>
      </div>
      <div className="flex flex-col gap-x-1 color-[#000000DE]">
        <span className="font-semibold">{item.name}</span>
        <span>{formatPriceInVnd(item.price)}</span>
      </div>
    </div>
  );
};

export default Item;
