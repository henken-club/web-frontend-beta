import React from "react";

import { NoAnswerView } from "./NoAnswer";
import { WithAnswerView } from "./WithAnswer";

export const CommentTo: React.VFC<{
  className?: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
  answer: { comment: string; type: "right" | "wrong"; } | null;
  isViewer: boolean;
}> = ({ answer, ...props }) => {
  return (
    <>
      {answer === null && <NoAnswerView {...props} />}
      {answer !== null && <WithAnswerView {...answer} {...props} />}
    </>
  );
};
