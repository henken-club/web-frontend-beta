import clsx from "clsx";
import { gql } from "graphql-tag";
import React, { useContext, useMemo, useState } from "react";
import { useDebounce } from "react-use";

import { CreateHenkenFormContext } from "../../context";

import { SuggestionsList } from "./SuggestionsList";

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

    formDisabled: boolean;

    focus: boolean;
    searching: boolean;
    suggestions: { id: string; displayName: string; alias: string; avatar: string; }[];
    onFocus(): void;
    onBlur(): void;
    onUpdateInput(query: string): void;
    onSelectSuggestion(user: { id: string; displayName: string; alias: string; avatar: string; }): void;
  }
> = (
  {
    className,
    formDisabled,
    focus,
    onBlur,
    onFocus,
    onUpdateInput,
    suggestions,
    onSelectSuggestion,
    searching,
  },
) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(className, ["relative", { "z-infinity": focus }])}
    >
      <label className={clsx(["relative"], ["z-1"])}>
        <input
          type="search"
          autoComplete="on"
          aria-label={LL.CreateHenkenForm.To.SearchBox.aria.QueryInput()}
          onChange={(event) => onUpdateInput(event.currentTarget.value)}
          onFocus={() => onFocus()}
          disabled={formDisabled}
          className={clsx(["w-full"], [["px-2"], ["py-1"]], ["border"], [["text-md"]])}
        />
      </label>
      {focus &&
        (
          <>
            <div
              className={clsx(["fixed", "inset-0"], ["bg-black", ["bg-opacity-25"]], ["z-0"])}
              onClick={() => onBlur()}
              onKeyPress={() => onBlur()}
            />
            <div
              className={clsx(
                ["absolute", ["top-full"], ["left-0"]],
                ["w-full"],
                ["z-1"],
                ["shadow-lg"],
              )}
            >
              <SuggestionsList
                className={clsx(["w-full"])}
                suggestions={suggestions}
                onSelect={onSelectSuggestion}
              />
            </div>
          </>
        )}
    </div>
  );
};

export const SearchUser: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const { setTo, formDisabled } = useContext(CreateHenkenFormContext);

  const [input, setInput] = useState<string | undefined>(undefined);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [focus, setFocus] = useState(false);

  const [stateSearch] = useCreateHenkenFormSearchUserQuery(
    query && query !== "" ? { pause: false, variables: { query } } : { pause: true },
  );
  const { data: searchData, fetching: searching } = stateSearch;

  useDebounce(() => setQuery(input), 500, [input]);

  const suggestions = useMemo<{ id: string; displayName: string; alias: string; avatar: string; }[]>(
    () => {
      if (Boolean(input) && input === "") return [];
      return searchData?.searchUsers.nodes.map(({ user }) => ({
        id: user.id,
        alias: user.alias,
        displayName: user.displayName,
        avatar: user.avatar,
      })) || [];
    },
    [input, searchData],
  );

  return (
    <Component
      formDisabled={formDisabled}
      onUpdateInput={(query) => {
        setInput(query);
      }}
      focus={focus}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onSelectSuggestion={(user) => {
        setTo(user);
        setFocus(false);
      }}
      searching={searching}
      suggestions={suggestions}
      {...props}
    />
  );
};
