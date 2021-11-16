import React from "react";

import { NoAnswerView } from "./NoAnswer";
import { WithAnswerView } from "./WithAnswer";

import { useViewer } from "~/auth/useViewer";

export const CommentTo: React.VFC<{
  className?: string;
  user: { id: string; alias: string; displayName: string; avatar: string; };
  answer: { comment: string; type: "right" | "wrong"; } | null;
}> = ({ answer, ...props }) => {
  const viewer = useViewer();
  return (
    <>
      {answer === null && <NoAnswerView {...props} isViewer={viewer?.id === props.user.id} />}
      {answer !== null && <WithAnswerView {...answer} {...props} isViewer={viewer?.id === props.user.id} />}
    </>
  );
};
