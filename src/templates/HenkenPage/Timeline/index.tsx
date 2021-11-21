import clsx from "clsx";
import React, { useMemo } from "react";

import { AnswerForm } from "./AnswerForm";
import { CommentFrom, CommentTo } from "./Comment";

import { useViewer } from "~/auth/useViewer";

export const View: React.VFC<{
  className?: string;
  henkenId: string;
  postedBy: { id: string; alias: string; displayName: string; avatar: string; };
  postsTo: { id: string; alias: string; displayName: string; avatar: string; };
  comment: string;
  answer: { comment: string; type: "right" | "wrong"; } | null;
  viewer: "from" | "to" | null;
}> = ({ className, henkenId, comment, postedBy, postsTo, answer, viewer: state }) => {
  return (
    <div
      className={clsx(
        className,
        ["px-2", "sm:px-4"],
        ["py-2", "sm:py-4"],
        ["inline-flex", ["flex-col"]],
      )}
    >
      <CommentFrom
        className={clsx()}
        comment={comment}
        user={postedBy}
        isViewer={state === "from"}
      />
      <CommentTo
        className={clsx(["mt-2", "sm:mt-4"])}
        answer={answer}
        user={postsTo}
        isViewer={state === "to"}
      />
      {!answer && state === "to" && (
        <AnswerForm
          className={clsx(["mt-2", "sm:mt-4"])}
          henkenId={henkenId}
        />
      )}
    </div>
  );
};

export const Timeline: React.VFC<{
  className?: string;
  henkenId: string;
  postedBy: { id: string; alias: string; displayName: string; avatar: string; };
  postsTo: { id: string; alias: string; displayName: string; avatar: string; };
  comment: string;
  answer: { comment: string; type: "right" | "wrong"; } | null;
}> = ({ postedBy, postsTo, ...props }) => {
  const viewer = useViewer();
  const viewerState = useMemo(() => {
    if (viewer?.id === postedBy.id) return "from";
    else if (viewer?.id === postsTo.id) return "to";
    else return null;
  }, [postedBy.id, postsTo.id, viewer]);

  return <View {...props} postedBy={postedBy} postsTo={postsTo} viewer={viewerState} />;
};
