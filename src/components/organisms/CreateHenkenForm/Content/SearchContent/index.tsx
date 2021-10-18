import clsx from "clsx";
import { gql } from "graphql-tag";
import React, { ComponentProps, useContext, useMemo, useState } from "react";
import { useDebounce } from "react-use";

import { CreateHenkenFormContext } from "../../context";

import { Suggestions } from "./Suggestions";

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
    focus: boolean;
    onFocus(): void;
    onBlur(): void;
    onUpdateInput(query: string): void;
    searching: boolean;
    suggestions: ComponentProps<typeof Suggestions>["suggestions"];
    onSelectSuggestion: ComponentProps<typeof Suggestions>["onSelect"];
  }
> = (
  {
    className,
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
        <span>{LL.CreateHenkenForm.Content.SearchBox.Label()}</span>
        <input
          type="search"
          autoComplete="on"
          aria-label={LL.CreateHenkenForm.Content.SearchBox.aria.QueryInput()}
          onChange={(event) => onUpdateInput(event.currentTarget.value)}
          onFocus={() => onFocus()}
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
              <Suggestions
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

export const SearchContent: React.VFC<{ className?: string; }> = ({ className }) => {
  const { setContent } = useContext(CreateHenkenFormContext);

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
            return { type: "book", value: { id: content.id, title: content.title, cover: content.cover } };
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
    />
  );
};
