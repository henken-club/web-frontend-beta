import clsx from "clsx";
import React from "react";

import { AuthorSmallBadge } from "~/components/ContentBadge";

export const View: React.VFC<{
  className?: string;
  id: string;
  name: string;
}> = ({ className, id, name }) => {
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-col", "sm:flex-row"]],
      )}
    >
      <p className={clsx(["break-words"])}>
        <AuthorSmallBadge className={clsx()} />
        <span
          className={clsx(["ml-2"], [["text-sm"]])}
        >
          {name}
        </span>
      </p>
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
