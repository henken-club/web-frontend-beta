import clsx from "clsx";
import React, { useContext, useState } from "react";

import { CreateHenkenFormContext } from "../context";

import { SearchUser } from "./SearchUser";

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
        ["bg-gray-100"],
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
      <SearchUser className={clsx(["w-full"], ["mt-4"])} />
      <div
        className={clsx(
          ["mt-4"],
          ["w-full"],
          ["h-16"],
          ["flex", ["flex-col"], ["justify-start"]],
        )}
      >
        {user && (
          <>
            <span className={clsx(["text-lg"])}>
              <span className={clsx(["text-gray-900"])}>{user.displayName}</span>
              <span className={clsx(["text-gray-500"])}>{LL.Format.Alias({ alias: user.alias })}</span>
            </span>
          </>
        )}
      </div>
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
