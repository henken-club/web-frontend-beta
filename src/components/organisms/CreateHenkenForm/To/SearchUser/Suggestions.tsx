import clsx from "clsx";
import React from "react";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { IconNoSuggestion } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const Suggestion: React.VFC<
  {
    className?: string;
    user: { id: string; displayName: string; alias: string; avatar: string; };
    onSelect(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
  }
> = ({ className, user, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(user)}
      onKeyPress={() => onSelect(user)}
      className={clsx(
        className,
        [["px-4"], ["py-2"]],
        ["flex", ["items-center"]],
        ["bg-white", "hover:bg-blue-50"],
      )}
    >
      <div className={clsx([["w-8"], ["h-8"]])}>
        <AvatarSmall user={{ alias: user.alias, avatar: user.avatar }} />
      </div>
      <div className={clsx(["ml-4"], ["flex", "flex-col"])}>
        <span className={clsx(["text-gray-900"], ["text-sm"])}>
          {user.displayName}
        </span>
        <span className={clsx(["text-gray-500"], ["text-xs"])}>
          {user.alias}
        </span>
      </div>
    </div>
  );
};

export const NoUser: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(className, [["px-6"], ["py-4"]], ["flex", ["flex-col"], ["items-center"]])}
    >
      <IconNoSuggestion
        className={clsx([["text-2xl"], ["text-blue-300"]])}
      />
      <span className={clsx(["mt-4"], ["text-xs"])}>{LL.CreateHenkenForm.To.SearchBox.NoSuggestion()}</span>
    </div>
  );
};

export const Component: React.VFC<
  {
    className?: string;
    suggestions: { id: string; displayName: string; alias: string; avatar: string; }[];
    onSelect(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
  }
> = ({ className, suggestions, onSelect, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        [["inline-flex"], ["flex-col"]],
        ["bg-white"],
        ["divide-y", ["divide-gray-100"]],
      )}
    >
      {suggestions.length > 0 &&
        suggestions.map((user) => <Suggestion key={user.id} user={user} onSelect={onSelect} />)}
      {suggestions.length === 0 &&
        <NoUser className={clsx(["w-full"])} />}
    </div>
  );
};

export const Suggestions: React.VFC<
  {
    className?: string;
    suggestions: { id: string; displayName: string; alias: string; avatar: string; }[];
    onSelect(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
  }
> = ({ ...props }) => {
  return <Component {...props} />;
};
