import clsx from "clsx";
import React from "react";

import { Image } from "~/components/atoms/Image";
import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  id: string;
  title: string;
  cover: string | null;
}> = ({ className, title, cover }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-row", "md:flex-col"]],
        ["bg-blue-200"],
      )}
    >
      <span>{title}</span>
      <div
        className={clsx(
          [["w-32"], ["h-32"]],
          ["relative"],
        )}
      >
        {cover && (
          <Image
            src={cover}
            className={clsx(["w-full"])}
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>
    </div>
  );
};

export const Book = View;
