import clsx from "clsx";
import React from "react";

import { TemplateContent } from "./Template";

import { BookCover } from "~/components/BookCover";
import { BookSmallBadge } from "~/components/ContentBadge";
import { useTranslation } from "~/i18n/useTranslation";

export const Details: React.VFC<{
  className?: string;
  authors: { id: string; name: string; role: null; }[];
}> = ({ className, authors }) => {
  return (
    <div className={clsx(className)}>
      <ul className={clsx(["flex"], ["space-x-2"])}>
        {authors.map((author) => (
          <li key={author.id}>
            {author.role && <span className={clsx(["text-sm"])}>{author.role}</span>}
            <span className={clsx(["text-sm"], ["select-all"])}>{author.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const View: React.VFC<{
  className?: string;
  id: string;
  title: string;
  cover: string | null;
  authors: { id: string; name: string; role: null; }[];
}> = ({ className, title, cover, authors }) => {
  const { LL } = useTranslation();
  return (
    <TemplateContent
      className={className}
      title={title}
      Image={({ ...props }) => <BookCover {...props} book={{ title, cover }} />}
      Badge={({ ...props }) => <BookSmallBadge {...props} />}
      Details={({ ...props }) => <Details {...props} authors={authors} />}
    />
  );
};

export const Book = View;
