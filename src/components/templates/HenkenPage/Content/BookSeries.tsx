import React from "react";

import { NoImage } from "./NoImage";
import { TemplateContent } from "./Template";

import { BookSeriesSmallBadge } from "~/components/atoms/ContentBadge";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  id: string;
  title: string;
}> = ({ className, title }) => {
  const { LL } = useTranslation();
  return (
    <TemplateContent
      className={className}
      title={title}
      Image={({ ...props }) => <NoImage {...props} />}
      Badge={({ ...props }) => <BookSeriesSmallBadge {...props} />}
      Details={() => <></>}
    />
  );
};

export const BookSeries = View;
