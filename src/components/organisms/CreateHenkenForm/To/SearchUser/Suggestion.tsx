import clsx from "clsx";
import React from "react";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { useTranslation } from "~/i18n/useTranslation";

export const Suggestion: React.VFC<
  {
    className?: string;
    user: { id: string; displayName: string; alias: string; avatar: string; };
    onSelect(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
  }
> = ({ className, user, onSelect }) => {
  const { LL } = useTranslation();
  return (
    <div
      onClick={() => onSelect(user)}
      onKeyPress={() => onSelect(user)}
      className={clsx(
        className,
        [["px-4"], ["py-2"]],
        ["cursor-pointer"],
        ["flex", ["items-center"]],
        ["bg-white", "hover:bg-blue-50"],
      )}
    >
      <div className={clsx([["w-8"], ["h-8"]])}>
        <AvatarSmall user={{ alias: user.alias, avatar: user.avatar }} />
      </div>
      <div className={clsx(["ml-4"], ["flex", "flex-col"])}>
        <span className={clsx(["text-gray-900"], ["text-sm"], ["select-all"])}>
          {user.displayName}
        </span>
        <span className={clsx(["text-gray-500"], ["mt-1"], ["text-xs"], ["select-all"])}>
          {LL.Format.Alias({ alias: user.alias })}
        </span>
      </div>
    </div>
  );
};
