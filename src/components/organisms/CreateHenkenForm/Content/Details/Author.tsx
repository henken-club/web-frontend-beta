import clsx from "clsx";
import React from "react";

import { AuthorSmallBadge } from "~/components/atoms/ContentBadge";

export const View: React.VFC<{
  className?: string;
  id: string;
  name: string;
}> = ({ className, id, name }) => {
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-row"], ["items-center"]],
      )}
    >
      <AuthorSmallBadge className={clsx()} />
      <span
        className={clsx(
          ["ml-2"],
          [["text-sm"]],
        )}
      >
        {name}
      </span>
    </div>
  );
};

export const Author: React.VFC<{
  className?: string;
  author: { id: string; name: string; };
}> = ({ author, ...props }) => {
  return (
    <View
      {...author}
      {...props}
    />
  );
};
