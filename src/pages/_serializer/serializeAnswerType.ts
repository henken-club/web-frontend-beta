import { AnswerType } from "../codegen";

export const serializeAnswerType = (type: AnswerType): "right" | "wrong" => {
  switch (type) {
    case AnswerType.Right:
      return "right";
    case AnswerType.Wrong:
      return "wrong";
  }
};
