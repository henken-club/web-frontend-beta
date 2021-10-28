import clsx from "clsx";
import React from "react";

export const View: React.VFC<{
  className?: string;
  id: string;
  title: string;
}> = ({ className, id, title }) => {
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-col"], ["items-center"]],
      )}
    >
      <div className={clsx(["w-full"], ["flex-grow"], ["mt-2"])}>
        <span className={clsx([["text-base"]])}>{title}</span>
      </div>
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
