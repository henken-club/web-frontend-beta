import clsx from "clsx";
import React from "react";

import { CommentFrom } from "./Comment/From";
import { CommentTo } from "./Comment/To";

export const View: React.VFC<{
  className?: string;
  postedBy: { id: string; alias: string; displayName: string; avatar: string; };
  postsTo: { id: string; alias: string; displayName: string; avatar: string; };
  comment: string;
  answer: { comment: string; type: "right" | "wrong"; } | null;
}> = ({ className, comment, postedBy, postsTo, answer }) => {
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
      />
      <CommentTo
        className={clsx(["mt-2", "sm:mt-4"])}
        answer={answer}
        user={postsTo}
      />
    </div>
  );
};

export const Timeline: React.VFC<{
  className?: string;
  postedBy: { id: string; alias: string; displayName: string; avatar: string; };
  postsTo: { id: string; alias: string; displayName: string; avatar: string; };
  comment: string;
  answer: { comment: string; type: "right" | "wrong"; } | null;
}> = ({ ...props }) => {
  return <View {...props} />;
};
