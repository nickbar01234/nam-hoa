import type { CartItem } from "@/types";
import { Label } from "@/components/ui/label";
import { useCart } from "@/hooks";
import Image from "next/image";
import { formatPriceInVnd } from "@/utils";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface CartItemProps {
  item: CartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  const { getMenuItem, addToCart } = useCart();
  const menuItem = getMenuItem(item.category, item.name);

  return (
    <div className="flex flex-col gap-y-4 px-4">
      <div className="flex justify-between transition duration-300 ease-in-out hover:bg-[#F5F5F5] focus:bg-[#E0E0E0] active:bg-[#D1D1D1]">
        <div className="flex items-center gap-x-2">
          <div className="relative h-[40px] w-[40px]">
            <Image
              src={menuItem.url}
              alt={menuItem.name}
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col">
            <Label className="font-medium text-lg">{item.name}</Label>
            <p className="flex gap-x-1 text-sm text-[#00000099] italic track-wide">
              {Object.values(item.selection)
                .flatMap((value) => value)
                .sort()
                .join(", ")}
            </p>
          </div>
        </div>
        <div>
          <span>{formatPriceInVnd(menuItem.price * item.quantity)}</span>
        </div>
      </div>
      <div className="self-end flex gap-x-4 items-center">
        <Button
          className="rounded-full h-8 w-8 bg-[#F5F5F5] border-[1px] border-[#D1D1D1] text-[#000000DE] transition duration-300 ease-in-out hover:bg-[#E0E0E0] hover:border-[#A5A5A5] focus:bg-[#E0E0E0] focus:border-[#A5A5A5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A5A5A5] disabled:bg-[#E0E0E0] disabled:border-[#B1B1B1] disabled:text-[#B1B1B1] disabled:cursor-not-allowed disabled:hover:bg-[#E0E0E0] disabled:hover:border-[#B1B1B1]"
          onClick={() => addToCart({ ...item, quantity: -1 })}
        >
          <FontAwesomeIcon icon={faMinus} color="#000000DE" />
        </Button>
        <span className="text-black font-semibold">{item.quantity}</span>
        <Button
          className="rounded-full h-8 w-8 bg-[#F5F5F5] border-[1px] border-[#D1D1D1] text-[#000000DE] transition duration-300 ease-in-out hover:bg-[#E0E0E0] hover:border-[#A5A5A5] focus:bg-[#E0E0E0] focus:border-[#A5A5A5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A5A5A5] disabled:bg-[#E0E0E0] disabled:border-[#B1B1B1] disabled:text-[#B1B1B1] disabled:cursor-not-allowed disabled:hover:bg-[#E0E0E0] disabled:hover:border-[#B1B1B1]"
          onClick={() => addToCart({ ...item, quantity: 1 })}
        >
          <FontAwesomeIcon icon={faPlus} color="#000000DE" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
