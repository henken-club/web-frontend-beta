import clsx from "clsx";
import React from "react";

import { Comment } from "./Comment";
import { CreateButton } from "./CreateButton";

export const Component: React.VFC<{ className?: string; }> = (
  { className, ...props },
) => {
  return (
    <div
      className={clsx(
        className,
        [["px-4"], ["py-4"]],
        [["inline-flex"], ["flex-col", "sm:flex-row"]],
        ["bg-blue-50"],
        ["border", "border-blue-400"],
        [["rounded-md"]],
      )}
    >
      <Comment className={clsx(["flex-grow"])} />
      <div
        className={clsx(
          ["mt-4", "sm:mt-0"],
          ["ml-0", "sm:ml-8"],
          ["flex", ["flex-row", "sm:flex-col"], ["justify-end"]],
        )}
      >
        <CreateButton />
      </div>
    </div>
  );
};

export const Control: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  return <Component {...props} />;
};
