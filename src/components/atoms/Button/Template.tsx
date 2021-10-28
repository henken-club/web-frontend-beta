import clsx from "clsx";
import React from "react";

export const NormalTemplate: React.VFC<{
  className?: string;
  onClick(): void;
  icon?: React.VFC<{ className?: string; }>;
  text: React.VFC<{ className?: string; }>;
  disabled?: boolean;
}> = ({ className, onClick, icon: Icon, text: Text, disabled }) => (
  <button
    type="button"
    onClick={() => onClick()}
    onKeyPress={() => onClick()}
    disabled={disabled}
    className={clsx(
      className,
      [["px-3"], ["py-1.5"]],
      ["inline-flex", ["items-center"]],
      [
        "bg-blue-500",
        ["disabled:bg-gray-600"],
      ],
      ["rounded-md"],
    )}
  >
    {Icon && <Icon className={clsx(["mr-2"], [["text-white"], ["text-base"]])} />}
    <Text className={clsx([["text-white"], ["text-base"]])} />
  </button>
);
