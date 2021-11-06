import clsx from "clsx";
import gql from "graphql-tag";
import React, { ContextType, useMemo, useState } from "react";

import { ContentSect as Content } from "./Content";
import { ContentType, CreateHenkenFormContext } from "./context";
import { Control } from "./Control";
import { Created } from "./Created";
import { From } from "./From";
import { To } from "./To";

import { useViewer } from "~/auth/useViewer";
import { IconCreateHenken } from "~/components/atoms/Icon";
import { CreateHenkenArgsContentType, useCreateHenkenFormCreateHenkenMutation } from "~/components/codegen";
import { useTranslation } from "~/i18n/useTranslation";

const _CreateHenkenFormCreateHenkenMutation = gql`
  mutation CreateHenkenFormCreateHenken( $to:ID!, $comment:String!,$contentId:ID!,$contentType:CreateHenkenArgsContentType!) {
    createHenken(toUserId:$to,comment:$comment, contentId:$contentId, contentType:$contentType ){
      henken{
        id
      }
    }
  }
`;

export const transferGraphQLContentTypeEnum = (type: ContentType["type"]) => {
  switch (type) {
    case "author":
      return CreateHenkenArgsContentType.Author;
    case "book":
      return CreateHenkenArgsContentType.Book;
    case "bookseries":
      return CreateHenkenArgsContentType.BookSeries;
  }
};

export const Component: React.VFC<{ className?: string; }> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["relative"],
        ["max-w-screen-sm"],
        ["overflow-hidden"],
        [["rounded-xl"], ["shadow-xl"]],
      )}
    >
      <div
        className={clsx(
          ["w-full"],
          ["bg-gray-700"],
          [["px-2", "sm:px-4"], ["py-2", "sm:py-4"]],
          ["flex", ["items-center"]],
        )}
      >
        <IconCreateHenken className={clsx(["text-2xl"], ["text-white"])} />
        <p className={clsx(["text-xl"], ["text-white"], ["ml-2"])}>{LL.CreateHenkenForm.Title()}</p>
      </div>
      <div
        className={clsx(
          [["px-2", "sm:px-4"], ["py-2", "sm:py-4"]],
          ["grid", ["grid-cols-1", "sm:grid-cols-2"], ["gap-x-2"], ["gap-y-2"]],
          ["bg-white", ["bg-opacity-50"], ["backdrop-filter", "backdrop-blur"]],
        )}
      >
        <From className={clsx(["col-span-1"])} />
        <To className={clsx(["col-span-1"])} />
        <Content className={clsx(["col-span-full"])} />
        <Control className={clsx(["col-span-full"])} />
      </div>
      <Created
        className={clsx(["absolute", "inset-0"], ["z-1"])}
      />
    </div>
  );
};

export const CreateHenkenForm: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const from = useViewer();
  const [to, setTo] = useState<ContextType<typeof CreateHenkenFormContext>["to"]>(null);
  const [content, setContent] = useState<ContextType<typeof CreateHenkenFormContext>["content"]>(null);
  const [comment, setComment] = useState<string>("");

  const [created, setCreated] = useState<ContextType<typeof CreateHenkenFormContext>["created"]>(null);
  const [, createHenken] = useCreateHenkenFormCreateHenkenMutation();

  const contextValue = useMemo<ContextType<typeof CreateHenkenFormContext>>(
    () => {
      if (from && to && content) {
        if (created) {
          return ({
            from,
            to,
            content,
            comment,
            setTo: (user) => setTo(user),
            setContent: (value) => setContent(value),
            setComment: (value) => setComment(value),
            createHenken: null,
            created,
          });
        } else {
          return ({
            from,
            to,
            content,
            comment,
            setTo: (user) => setTo(user),
            setContent: (value) => setContent(value),
            setComment: (value) => setComment(value),
            createHenken: async () => {
              const { data, error } = await createHenken({
                to: to.id,
                contentId: content.value.id,
                contentType: transferGraphQLContentTypeEnum(content.type),
                comment,
              });
              if (!error && data) {
                setCreated({ id: data.createHenken.henken.id });
              }
            },
            created: null,
          });
        }
      } else {
        return ({
          from,
          to,
          content,
          comment,
          setTo: (user) => setTo(user),
          setContent: (value) => setContent(value),
          setComment: (value) => setComment(value),
          createHenken: null,
          created: null,
        });
      }
    },
    [comment, content, createHenken, created, from, to],
  );

  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
