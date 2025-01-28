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
  editable: boolean;
}

const CartItem = ({ item, editable }: CartItemProps) => {
  const { getMenuItem, addToCart } = useCart();
  const menuItem = getMenuItem(item.category, item.name);

  return (
    <div className="flex flex-col gap-y-4 px-4">
      <div className="flex justify-between transition duration-300 ease-in-out">
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
      {editable && (
        <div className="self-end flex gap-x-4 items-center">
          <Button
            className="rounded-full h-8 w-8 bg-[#F5F5F5] border-[1px] border-[#D1D1D1] text-[#000000DE] transition duration-300 ease-in-out disabled:bg-[#E0E0E0] disabled:border-[#B1B1B1] disabled:text-[#B1B1B1] disabled:cursor-not-allowed"
            onTouch="hover:bg-[#E0E0E0] hover:border-[#B1B1B1] hover:text-[#B1B1B1] focus:outline-none focus:ring-2 focus:ring-[#B1B1B1] focus:ring-offset-2"
            onClick={() => addToCart({ ...item, quantity: -1 })}
          >
            <FontAwesomeIcon icon={faMinus} color="#000000DE" />
          </Button>
          <span className="text-black font-semibold">{item.quantity}</span>
          <Button
            className="rounded-full h-8 w-8 bg-[#F5F5F5] border-[1px] border-[#D1D1D1] text-[#000000DE] transition duration-300 ease-in-out disabled:bg-[#E0E0E0] disabled:border-[#B1B1B1] disabled:text-[#B1B1B1] disabled:cursor-not-allowed"
            onTouch="hover:bg-[#E0E0E0] hover:border-[#B1B1B1] hover:text-[#B1B1B1] focus:outline-none focus:ring-2 focus:ring-[#B1B1B1] focus:ring-offset-2"
            onClick={() => addToCart({ ...item, quantity: 1 })}
          >
            <FontAwesomeIcon icon={faPlus} color="#000000DE" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
