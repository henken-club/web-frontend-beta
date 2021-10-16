import clsx from "clsx";
import React, { useContext, useState } from "react";

import { CreateHenkenFormContext } from "../context";

import { Input } from "./SearchBox";
import { Suggestions } from "./Suggestions";

import { AvatarLarge } from "~/components/atoms/Avatar";
import { IconUnknownUser } from "~/components/atoms/Icon";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  {
    className?: string;
    user: null | {
      id: string;
      alias: string;
      displayName: string;
      avatar: string;
    };
    focusSearchBox: boolean;
    onChangeSearchBox(query: string): void;
    onFocusSearchBox(): void;
    onBlurSearchBox(): void;
    onSelectSuggestion(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
    searchingUsers: boolean;
    userSuggestions: { id: string; displayName: string; alias: string; avatar: string; }[];
  }
> = (
  {
    className,
    user,
    onChangeSearchBox: onChangeUserQuery,
    onBlurSearchBox,
    onFocusSearchBox,
    onSelectSuggestion,
    focusSearchBox: focus,
    userSuggestions,
    searchingUsers,
    ...props
  },
) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        [
          ["px-4"],
          ["py-4"],
        ],
        [["inline-flex"], ["flex-col"], ["items-center"]],
        ["bg-blue-300"],
      )}
    >
      <div className={clsx([["w-16"], ["h-16"]])}>
        {user &&
          <AvatarLarge user={{ alias: user.alias, avatar: user.avatar }} />}
        {!user &&
          (
            <div
              className={clsx(
                ["w-full", "h-full"],
                ["flex", ["items-center"], ["justify-center"]],
                ["bg-blue-400"],
                ["rounded-full"],
              )}
            >
              <IconUnknownUser className={clsx([["text-4xl"], ["text-blue-300"]])} />
            </div>
          )}
      </div>
      <div
        className={clsx(
          ["w-full"],
          ["relative"],
          ["mt-4"],
        )}
      >
        <Input onChange={onChangeUserQuery} onFocus={onFocusSearchBox} onBlur={onBlurSearchBox} />
        {focus &&
          (
            <Suggestions
              className={clsx(
                ["absolute", ["top-full"], ["left-0"]],
                ["w-full"],
                ["shadow-lg"],
              )}
              suggestions={userSuggestions}
              onSelect={onSelectSuggestion}
            />
          )}
      </div>
      {user && (
        <div className={clsx(["flex", ["flex-col"], ["justify-start"]])}>
          <span>{user.displayName}</span>
          <span>{user.alias}</span>
        </div>
      )}
    </div>
  );
};

export const To: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const { to, setTo } = useContext(CreateHenkenFormContext);

  const [userQuery, setUserQuery] = useState<string | undefined>(undefined);
  const [focus, setFocus] = useState(false);

  return (
    <Component
      {...props}
      user={to}
      onChangeSearchBox={(query) => {
        setUserQuery(query);
      }}
      focusSearchBox={focus}
      onFocusSearchBox={() => {
        setFocus(true);
      }}
      onBlurSearchBox={() => {
        setFocus(false);
      }}
      onSelectSuggestion={(user) => setTo(user)}
      searchingUsers={false}
      userSuggestions={[]}
    />
  );
};
