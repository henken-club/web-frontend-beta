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
        ["disabled:bg-gray-400"],
      ],
      ["text-white", ["disabled:text-gray-300"]],
      ["rounded-md"],
    )}
  >
    {Icon && <Icon className={clsx(["mr-2"], [["text-base"]])} />}
    <Text className={clsx([["text-base"]])} />
  </button>
);

export const SkeltonTemplate: React.VFC<{
  className?: string;
  onClick(): void;
  icon?: React.VFC<{ className?: string; }>;
  text: React.VFC<{ className?: string; }>;
}> = ({ className, onClick, icon: Icon, text: Text }) => (
  <button
    type="button"
    onClick={() => onClick()}
    onKeyPress={() => onClick()}
    className={clsx(
      className,
      [["px-3"], ["py-1.5"]],
      ["inline-flex", ["items-center"]],
      ["border", "border-white"],
      ["text-white"],
      ["rounded-md"],
    )}
  >
    {Icon && <Icon className={clsx(["mr-2"], [["text-base"]])} />}
    <Text className={clsx([["text-base"]])} />
  </button>
);
