import clsx from "clsx";
import React from "react";

import { UserSuggestionItem } from "./UserSuggestionItem";

import { NoSuggestions } from "~/components/atoms/NoSuggestions";

export const Component: React.VFC<
  {
    className?: string;
    suggestions: { id: string; displayName: string; alias: string; avatar: string; }[];
    onSelect(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
  }
> = ({ className, suggestions, onSelect, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        [["inline-flex"], ["flex-col"]],
        ["bg-white"],
        ["divide-y", ["divide-gray-100"]],
      )}
    >
      {suggestions.length === 0 &&
        <NoSuggestions className={clsx(["w-full"])} />}
      {suggestions.length > 0 &&
        suggestions.map((user) => <UserSuggestionItem key={user.id} user={user} onSelect={onSelect} />)}
    </div>
  );
};

export const SuggestionsList: React.VFC<
  {
    className?: string;
    suggestions: { id: string; displayName: string; alias: string; avatar: string; }[];
    onSelect(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
  }
> = ({ ...props }) => {
  return <Component {...props} />;
};
