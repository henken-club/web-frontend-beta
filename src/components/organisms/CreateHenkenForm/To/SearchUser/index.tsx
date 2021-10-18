import clsx from "clsx";
import { gql } from "graphql-tag";
import React, { useContext, useMemo, useState } from "react";
import { useDebounce } from "react-use";

import { CreateHenkenFormContext } from "../../context";

import { Suggestions } from "./Suggestions";

import { useCreateHenkenFormSearchUserQuery } from "~/components/codegen";
import { useTranslation } from "~/i18n/useTranslation";

const _CreateHenkenFormSearchUserQuery = gql`
  query CreateHenkenFormSearchUser( $query: String!
  ) {
searchUsers(query:$query,limit: 4, skip:0){
  nodes{
    user{
      id
      alias
      displayName
      avatar
    }
  }
}

    }
`;

export const Component: React.VFC<
  {
    className?: string;
    focusSearchBox: boolean;
    onChangeInput(query: string): void;
    onFocus(): void;
    onBlur(): void;
    searching: boolean;
    suggestions: { id: string; displayName: string; alias: string; avatar: string; }[];
    onSelectSuggestion(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
  }
> = (
  {
    className,
    onChangeInput: onChangeUserQuery,
    onBlur,
    onFocus,
    onSelectSuggestion,
    focusSearchBox: focus,
    suggestions,
    searching,
  },
) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(className, ["group"], ["relative"])}
    >
      <label className={clsx(["flex-grow"])}>
        <input
          type="search"
          autoComplete="on"
          aria-label={LL.CreateHenkenForm.To.SearchBox.aria.QueryInput()}
          onChange={(event) => onChangeUserQuery(event.currentTarget.value)}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          className={clsx(
            ["w-full"],
            [["px-2"], ["py-1"]],
            ["border"],
            [["text-md"]],
          )}
        />
      </label>
      <div
        className={clsx(
          ["hidden", "focus-within:block"],
          ["absolute", ["top-full"], ["left-0"]],
          ["w-full"],
          ["shadow-lg"],
        )}
      >
        <Suggestions
          className={clsx(
            ["w-full"],
          )}
          suggestions={suggestions}
          onSelect={onSelectSuggestion}
        />
      </div>
    </div>
  );
};

export const SearchUser: React.VFC<{ className?: string; }> = ({ className }) => {
  const { setTo } = useContext(CreateHenkenFormContext);

  const [input, setInput] = useState<string | undefined>(undefined);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [focus, setFocus] = useState(false);

  const [stateSearch] = useCreateHenkenFormSearchUserQuery(
    query && query !== "" ? { pause: false, variables: { query } } : { pause: true },
  );
  const { data: searchData, fetching: searching } = stateSearch;

  useDebounce(() => setQuery(input), 1000, [input]);

  const suggestions = useMemo<{ id: string; displayName: string; alias: string; avatar: string; }[]>(
    () =>
      searchData?.searchUsers.nodes.map(({ user }) => ({
        id: user.id,
        alias: user.alias,
        displayName: user.displayName,
        avatar: user.avatar,
      })) || [],
    [searchData],
  );

  return (
    <Component
      onChangeInput={(query) => {
        setInput(query);
      }}
      focusSearchBox={focus}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onSelectSuggestion={(user) => {
        setTo(user);
      }}
      searching={searching}
      suggestions={suggestions}
    />
  );
};
