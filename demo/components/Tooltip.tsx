import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import cx from "classnames";
import React from "react";

interface Props {}

const Tooltip = (props: Props) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger
          className={cx(
            "group",
            "radix-state-instant-open:bg-gray-100 radix-state-delayed-open:bg-gray-100 dark:radix-state-instant-open:bg-gray-900 dark:radix-state-delayed-open:bg-gray-900",
            "inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md select-none",
            "text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        >
          Hover
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          className={cx(
            "radix-side-top:animate-slide-down-fade",
            "radix-side-right:animate-slide-left-fade",
            "radix-side-bottom:animate-slide-up-fade",
            "radix-side-left:animate-slide-right-fade",
            "px-4 py-2 rounded-md",
            "bg-white dark:bg-gray-800"
          )}
        >
          <TooltipPrimitive.Arrow className="text-white fill-current dark:text-gray-800" />
          <span className="block text-xs text-gray-900 dark:text-gray-100">
            Sorry, but our princess is in another castle
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
