import React from "react";

import { HenkenContentTempContentType } from "../types";

import { NoImage } from "./NoImage";
import { TemplateContent } from "./Template";

import { TempContentSmallBadge } from "~/components/atoms/ContentBadge";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  id: string;
  name: string;
  type: HenkenContentTempContentType;
}> = ({ className, name, type }) => {
  const { LL } = useTranslation();
  return (
    <TemplateContent
      className={className}
      title={name}
      Image={({ ...props }) => <NoImage {...props} />}
      Badge={({ ...props }) => <TempContentSmallBadge {...props} type={type} />}
      Details={() => <></>}
    />
  );
};

export const TempContent = View;
