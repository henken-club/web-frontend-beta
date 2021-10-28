import clsx from "clsx";
import React from "react";

import { BookSeriesSmallBadge } from "~/components/atoms/ContentBadge";

export const View: React.VFC<{
  className?: string;
  id: string;
  title: string;
}> = ({ className, id, title }) => {
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-row"], ["items-start"]],
      )}
    >
      <BookSeriesSmallBadge className={clsx()} />
      <span
        className={clsx(
          ["ml-2"],
          [["text-sm"]],
        )}
      >
        {title}
      </span>
    </div>
  );
};

export const BookSeries: React.VFC<{
  className?: string;
  bookSeries: { id: string; title: string; };
}> = ({ bookSeries, ...props }) => {
  return (
    <View
      {...bookSeries}
      {...props}
    />
  );
};
