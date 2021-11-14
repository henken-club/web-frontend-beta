import React from "react";

import { TemplateContent } from "./Template";

import { BookCover } from "~/components/atoms/BookCover";
import { BookSmallBadge } from "~/components/atoms/ContentBadge";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  id: string;
  title: string;
  cover: string | null;
  authors: {
    id: string;
    name: string;
    role: null;
  }[];
}> = ({ className, title, cover }) => {
  const { LL } = useTranslation();
  return (
    <TemplateContent
      className={className}
      title={title}
      Image={({ ...props }) => <BookCover {...props} book={{ title, cover }} />}
      Badge={({ ...props }) => <BookSmallBadge {...props} />}
    />
  );
};

export const Book = View;
