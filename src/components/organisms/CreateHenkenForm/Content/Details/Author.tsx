import clsx from "clsx";
import React from "react";

export const View: React.VFC<{
  className?: string;
  id: string;
  name: string;
}> = ({ className, id, name }) => {
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-col"], ["items-center"]],
      )}
    >
      <div className={clsx(["w-full"], ["flex-grow"], ["mt-2"])}>
        <span className={clsx([["text-base"]])}>{name}</span>
      </div>
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
