import clsx from "clsx";
import React, { ContextType, useMemo, useState } from "react";

import { Content } from "./Content";
import { CreateHenkenFormContext } from "./context";
import { From } from "./From";
import { To } from "./To";

import { useViewer } from "~/auth/useViewer";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<
  { className?: string; }
> = ({ className, ...props }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["max-w-screen-sm"],
        ["inline-flex", ["flex-col"]],
        ["divide-y", ["divide-gray-200"]],
        ["shadow-xl"],
      )}
    >
      <From className={clsx()} />
      <To className={clsx()} />
      <Content className={clsx()} />
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
      });
    },
    [viewer, to, content, comment],
  );

  return (
    <CreateHenkenFormContext.Provider value={contextValue}>
      <Component {...props} />
    </CreateHenkenFormContext.Provider>
  );
};
