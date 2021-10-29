import clsx from "clsx";
import React from "react";

import { useTranslation } from "~/i18n/useTranslation";

export const Template: React.VFC<{ className?: string; Text: React.VFC<{ className?: string; }>; }> = (
  { className, Text },
) => {
  return (
    <div className={clsx(className, ["inline-flex"], ["rounded-lg"], [["px-2"], ["py-0.5"]])}>
      <Text className={clsx(["text-sm"])} />
    </div>
  );
};

export const Author: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <Template
      className={clsx(className, ["bg-author-normal"])}
      Text={({ className }) => <span className={clsx(className, ["text-white"])}>{LL.Author()}</span>}
    />
  );
};

export const Book: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <Template
      className={clsx(className, ["bg-book-normal"])}
      Text={({ className }) => <span className={clsx(className, ["text-white"])}>{LL.Book()}</span>}
    />
  );
};

export const BookSeries: React.VFC<{ className?: string; }> = ({ className }) => {
  const { LL } = useTranslation();
  return (
    <Template
      className={clsx(className, ["bg-book-series-normal"])}
      Text={({ className }) => <span className={clsx(className, ["text-white"])}>{LL.BookSeries()}</span>}
    />
  );
};
