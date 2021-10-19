import clsx from "clsx";
import React from "react";

import { Suggestion } from "./Suggestion";

import { IconNoSuggestion } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

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
