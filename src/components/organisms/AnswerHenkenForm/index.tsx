import clsx from "clsx";
import React, { ContextType, useMemo } from "react";

import { AnswerHenkenFormContext } from "./context";
import { Henken } from "./Henken";
import { serializeHenken } from "./serializer";

import { IconAnswerHenken } from "~/components/atoms/Icon";
import { useAnswerHenkenFormFetchHenkenQuery } from "~/components/codegen";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{ className?: string; }> = ({ className, ...props }) => {
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
        <IconAnswerHenken className={clsx(["text-2xl"], ["text-white"])} />
        <p className={clsx(["text-xl"], ["text-white"], ["ml-2"])}>{LL.AnswerHenkenForm.Title()}</p>
      </div>{" "}
      <div
        className={clsx(
          [["px-2", "sm:px-4"], ["py-2", "sm:py-4"]],
          ["grid", ["grid-cols-1", "sm:grid-cols-2"], ["gap-x-2"], ["gap-y-2"]],
          ["bg-white", ["bg-opacity-50"], ["backdrop-filter", "backdrop-blur"]],
        )}
      >
        <Henken className={clsx(["w-full"])} />
      </div>
    </div>
  );
};

export const AnswerHenkenForm: React.VFC<{ className?: string; henkenId: string; }> = (
  { className, henkenId },
) => {
  const [state] = useAnswerHenkenFormFetchHenkenQuery({ variables: { henkenId } });
  const { fetching, data } = state;

  const henken = useMemo<ContextType<typeof AnswerHenkenFormContext>["henken"]>(
    () => {
      if (fetching) {
        return undefined;
      } else if (data) {
        return serializeHenken(data.henken);
      } else {
        return null;
      }
    },
    [data, fetching],
  );

  const contextValue = useMemo<ContextType<typeof AnswerHenkenFormContext>>(
    () => ({ henken }),
    [henken],
  );

  return (
    <AnswerHenkenFormContext.Provider value={contextValue}>
      <View className={clsx(className)} />
    </AnswerHenkenFormContext.Provider>
  );
};
