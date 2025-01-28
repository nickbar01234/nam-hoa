import { useRestaurant } from "@/hooks";

interface HeaderProps {
  title?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const Header = ({ title, leftIcon }: HeaderProps) => {
  const {
    restaurant: { name },
  } = useRestaurant();

  return (
    <div className="bg-white flex justify-between shadow-lg px-4 py-2 items-center sticky top-0 z-50 min-h-12">
      <div className="justify-between flex flex-col gap-y-[1px]">
        {title != undefined ? (
          <>{title}</>
        ) : (
          <>
            <h1 className="text-2xl text-[#BD1E2D]">{name}</h1>
            <p className="text-sm italic text-[#11763D]">
              Noodles & Asian Kitchen
            </p>
          </>
        )}
      </div>
      {leftIcon ?? null}
    </div>
  );
};

export default Header;
