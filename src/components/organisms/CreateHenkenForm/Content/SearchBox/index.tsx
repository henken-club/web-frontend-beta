import clsx from "clsx";
import { gql } from "graphql-tag";
import React, { ComponentProps, useContext, useMemo, useState } from "react";
import { useDebounce } from "react-use";

import { CreateHenkenFormContext } from "../../context";

import { SuggestionsList } from "./SuggestionsList";

import { useCreateHenkenFormSearchContentQuery } from "~/components/codegen";
import { useTranslation } from "~/i18n/useTranslation";

const _CreateHenkenFormSearchContentQuery = gql`
  query CreateHenkenFormSearchContent( $query: String!) {
    searchContent(query:$query,limit: 4, skip:0){
      nodes{
        content{
          ... on Book {
            id title cover
          }
          ... on BookSeries{
            id title
          }
          ... on Author {
            id name
          }
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
    suggestions: ComponentProps<typeof SuggestionsList>["suggestions"];
    onFocus(): void;
    onBlur(): void;
    onUpdateInput(query: string): void;
    onSelectSuggestion: ComponentProps<typeof SuggestionsList>["onSelect"];
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
      className={clsx(className, ["inline-flex"], ["relative", { "z-infinity": focus }])}
    >
      <label className={clsx(["w-full"], ["flex", ["flex-col"]], ["relative"], ["z-1"])}>
        <span className={clsx(["text-sm"])}>
          {LL.CreateHenkenForm.Content.SearchBox.Label()}
        </span>
        <input
          type="search"
          autoComplete="on"
          aria-label={LL.CreateHenkenForm.Content.SearchBox.Label()}
          onChange={(event) => onUpdateInput(event.currentTarget.value)}
          onFocus={() => onFocus()}
          disabled={formDisabled}
          className={clsx(
            ["w-full"],
            [["px-2"], ["py-1"]],
            ["mt-1"],
            ["border"],
            [["text-base"]],
          )}
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
              className={clsx(["absolute", ["top-full"], ["left-0"]], ["w-full"], ["z-1"], ["shadow-lg"])}
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

export const SearchBox: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const { setContent, created } = useContext(CreateHenkenFormContext);

  const [input, setInput] = useState<string | undefined>(undefined);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [focus, setFocus] = useState(false);

  const [stateSearch] = useCreateHenkenFormSearchContentQuery(
    query && query !== "" ? { pause: false, variables: { query } } : { pause: true },
  );
  const { data: searchData, fetching: searching } = stateSearch;

  useDebounce(() => setQuery(input), 500, [input]);

  const suggestions = useMemo<ComponentProps<typeof Component>["suggestions"]>(
    () => {
      if (Boolean(input) && input === "") return [];
      return searchData?.searchContent.nodes.map(({ content }) => {
        switch (content.__typename) {
          case "Book":
            return { type: "book", value: { id: content.id, title: content.title, cover: content.cover || null } };
          case "BookSeries":
            return { type: "bookseries", value: { id: content.id, title: content.title } };
          case "Author":
            return { type: "author", value: { id: content.id, name: content.name } };
        }
      }) || [];
    },
    [input, searchData],
  );

  return (
    <Component
      formDisabled={Boolean(created)}
      onUpdateInput={(query) => {
        setInput(query);
      }}
      focus={focus}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onSelectSuggestion={(content) => {
        setContent(content);
        setFocus(false);
      }}
      searching={searching}
      suggestions={suggestions}
      {...props}
    />
  );
};
