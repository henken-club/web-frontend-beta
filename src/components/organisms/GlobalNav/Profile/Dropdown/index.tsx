import clsx from "clsx";
import React from "react";

export const View: React.VFC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        ["bg-white"],
        ["py-2"],
        ["inline-flex", ["flex-col"]],
        ["rounded-lg"],
        ["shadow-lg"],
      )}
    />
  );
};

export const Dropdown: React.VFC<
  { className?: string; viewer: { id: string; alias: string; displayName: string; avatar: string; }; }
> = ({ ...props }) => {
  return <View {...props} />;
};
