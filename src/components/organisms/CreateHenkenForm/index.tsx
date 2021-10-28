import clsx from "clsx";
import gql from "graphql-tag";
import React, { ContextType, useMemo, useState } from "react";

import { ContentSect as Content } from "./Content";
import { CreateHenkenFormContext } from "./context";
import { Control } from "./Control";
import { Created } from "./Created";
import { From } from "./From";
import { To } from "./To";

import { useViewer } from "~/auth/useViewer";
import { useCreateHenkenFormCreateHenkenMutation } from "~/components/codegen";
import { useTranslation } from "~/i18n/useTranslation";

const _CreateHenkenFormCreateHenkenMutation = gql`
  mutation CreateHenkenFormCreateHenken( $to:ID!, $content:ID!,$comment:String!) {
    createHenken(to:$to,content:$content, comment:$comment ){
      henken{
        id
      }
    }
  }
`;

export const Component: React.VFC<
  { className?: string; created: boolean; }
> = ({ className, created, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["relative"],
        ["max-w-screen-sm"],
        ["bg-gray-700", "bg-opacity-75"],
        ["shadow-xl"],
      )}
    >
      <div
        className={clsx(
          [["px-2"], ["py-2"]],
          ["grid", ["grid-cols-2"], ["gap-x-2"], ["gap-y-2"]],
        )}
      >
        <From className={clsx(["col-span-1"])} />
        <To className={clsx(["col-span-1"])} />
        <Content className={clsx(["col-span-full"])} />
        <Control className={clsx(["col-span-full"])} />
      </div>
      {created && (
        <Created
          className={clsx(
            ["absolute", "inset-0"],
            ["z-1"],
          )}
        />
      )}
    </div>
  );
};

export const CreateHenkenForm: React.VFC<{ className?: string; }> = (
  { ...props },
) => {
  const viewer = useViewer();
  const [to, setTo] = useState<{ id: string; alias: string; displayName: string; avatar: string; } | null>(null);
  const [content, setContent] = useState<ContextType<typeof CreateHenkenFormContext>["content"]>(null);
  const [comment, setComment] = useState<string>("");

  const [created, setCreated] = useState(false);
  const [, createHenken] = useCreateHenkenFormCreateHenkenMutation();

  const contextValue = useMemo<ContextType<typeof CreateHenkenFormContext>>(
    () => {
      return ({
        from: viewer,
        to,
        setTo: (user) => setTo(user),
        content,
        setContent: (value) => setContent(value),
        comment,
        setComment: (value) => setComment(value),
        created,
        createHenken: async () => {
          if (to && content) {
            const { data, error } = await createHenken({ to: to.id, content: content.value.id, comment });
            if (!error && data) {
              setCreated(true);
            }
          }
        },
        formDisabled: created,
      });
    },
    [viewer, to, content, comment, created, createHenken],
  );

  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} created={created} />
    </CreateHenkenFormContext.Provider>
  );
};
