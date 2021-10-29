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
          ["px-4"],
          ["py-1"],
          [{ "border-b-4": selected }, ["border-blue-400"]],
        )}
      >
        <Text />
      </a>
    </Link>
  );
};
