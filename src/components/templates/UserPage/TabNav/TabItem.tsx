import clsx from "clsx";
import React from "react";

export const TabItem: React.VFC<
  { className?: string; selected: boolean; Link: React.FC; Text: React.VFC<{ className?: string; }>; }
> = ({ className, selected, Link, Text }) => {
  return (
    <Link>
      <a
        className={clsx(
          className,
          ["block"],
          ["px-4", "sm:px-4"],
          ["py-2", "sm:py-1"],
          [
            ["border-l-4", "sm:border-l-0"],
            ["border-b-0", "sm:border-b-4"],
            {
              "border-blue-400": selected,
              "border-gray-100": !selected,
            },
          ],
        )}
      >
        <Text className={clsx(["text-center"], ["text-xs", "sm:text-sm"])} />
      </a>
    </Link>
  );
};
