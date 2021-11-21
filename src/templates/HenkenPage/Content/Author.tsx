import React from "react";

import { NoImage } from "./NoImage";
import { TemplateContent } from "./Template";

import { AuthorSmallBadge } from "~/components/ContentBadge";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  id: string;
  name: string;
}> = ({ className, name }) => {
  const { LL } = useTranslation();
  return (
    <TemplateContent
      className={className}
      title={name}
      Image={({ ...props }) => <NoImage {...props} />}
      Badge={({ ...props }) => <AuthorSmallBadge {...props} />}
      Details={() => <></>}
    />
  );
};

export const Author = View;
