import { useRestaurant } from "@/hooks";
import { groupByCategory } from "@/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Item from "./item";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";

const Menu = () => {
  const {
    restaurant: { menu },
  } = useRestaurant();
  const menuByCategory = groupByCategory(menu);

  const categoryRefs = React.useRef<Record<string, HTMLButtonElement | null>>(
    {}
  );

  return (
    <Tabs defaultValue={Object.keys(menuByCategory)[0]} className="relative">
      <div className="mb-32">
        {Object.entries(menuByCategory).map(([category, items]) => (
          <TabsContent
            key={category}
            value={category}
            className="px-4 grid grid-cols-12 gap-4 mt-0"
          >
            {(items ?? []).map((item) => (
              <div
                key={item.name}
                className="xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-6"
              >
                <Item key={item.name} item={item} />
              </div>
            ))}
          </TabsContent>
        ))}
      </div>
      <TabsList className="w-full flex gap-x-4 bg-white min-h-fit px-8 fixed bottom-0 z-50 shadow-[rgba(50,50,50,0.75)_0px_10px_15px_0px] border-t py-3">
        <ScrollArea className="whitespace-nowrap w-full">
          <div className="flex gap-x-4 justify-center">
            {Object.keys(menuByCategory).map((category) => (
              <TabsTrigger
                ref={(node) => {
                  categoryRefs.current[category] = node;
                }}
                key={category}
                value={category}
                className="data-[state=active]:bg-[#BD1E2D] data-[state=active]:text-white px-4 py-2 bg-[#E5E5E5] rounded-md"
                onClick={() => {
                  const ref = categoryRefs.current[category];
                  if (ref != null) ref.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {category}
              </TabsTrigger>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </TabsList>
    </Tabs>
  );
};

export default Menu;
