import clsx from "clsx";
import React from "react";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  {
    className?: string;
    displayName: string;
    alias: string;
    avatar: string;
    onSelect(): void;
  }
> = ({ className, alias, displayName, avatar, onSelect }) => {
  const { LL } = useTranslation();
  return (
    <div
      onClick={() => onSelect()}
      onKeyPress={() => onSelect()}
      className={clsx(
        className,
        [["px-4"], ["py-2"]],
        ["cursor-pointer"],
        ["flex", ["items-center"]],
        ["bg-white", "hover:bg-blue-50"],
      )}
    >
      <div className={clsx([["w-8"], ["h-8"]])}>
        <AvatarSmall user={{ alias, avatar }} />
      </div>
      <div className={clsx(["ml-4"], ["flex", "flex-col"])}>
        <span className={clsx(["text-gray-900"], ["text-sm"], ["select-all"])}>
          {displayName}
        </span>
        <span className={clsx(["text-gray-500"], ["mt-1"], ["text-xs"], ["select-all"])}>
          {LL.Format.Alias({ alias })}
        </span>
      </div>
    </div>
  );
};

export const UserSuggestionItem: React.VFC<
  {
    className?: string;
    user: { id: string; displayName: string; alias: string; avatar: string; };
    onSelect(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
  }
> = ({ user, onSelect, ...props }) => {
  return <Component {...props} {...user} onSelect={() => onSelect(user)} />;
};
