import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { OptionType, type Option } from "@/types";
import { useItem } from "./ItemController";
import { cn } from "@/lib/utils";

interface OptionProps {
  option: Option;
}

const SingleChoiceOption = ({ option }: OptionProps) => {
  const { getSelectedOptions, selectOption } = useItem();
  const selected = getSelectedOptions(option.label)[0];

  return (
    <div className="flex flex-col gap-y-2">
      <Label className="text-lg font-medium">{option.label}</Label>
      <div className="flex gap-x-4">
        {option.choices.map((choice) => (
          <Button
            key={choice}
            onClick={() => selectOption(option.label, choice)}
            className={cn({
              "text-white px-4 py-2 rounded transition duration-300 ease-in-out bg-[#2E3A85]":
                selected === choice,
              "bg-white border-[1px] border-[#A3A3A3] text-[#000000DE] px-4 py-2 rounded transition duration-300 ease-in-out":
                selected !== choice,
            })}
            onTouch="hover:bg-[#1C2C63] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#1C2C63] focus:ring-offset-2 text-white"
          >
            {choice}
          </Button>
        ))}
      </div>
    </div>
  );
};

const Option = ({ option }: OptionProps) => {
  switch (option.type) {
    case OptionType.SINGLE_CHOICE:
      return <SingleChoiceOption option={option} />;

    default:
      throw new Error(`Unsupported option ${option.type}`);
  }
};

export default Option;
