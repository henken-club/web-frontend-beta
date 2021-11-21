import { AnswerType } from "./AnswerHenken.codegen";

export type FormValue = { comment: string; answerType: "right" | "wrong"; };

export const convertType = (type: FormValue["answerType"]) => {
  switch (type) {
    case "right":
      return AnswerType.Right;
    case "wrong":
      return AnswerType.Wrong;
  }
};
