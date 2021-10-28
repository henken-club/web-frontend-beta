import clsx from "clsx";
import React from "react";

import { IconNoImage } from "../Icon";

import { Image } from "~/components/atoms/Image";
import { useTranslation } from "~/i18n/useTranslation";

export const BookCover: React.VFC<{
  className?: string;
  book: { title: string; cover: string | null; };
}> = (
  { className, book: { title, cover } },
) => {
  const { LL } = useTranslation();
  return (
    <div className={clsx(className, ["relative"], ["inline-flex"])}>
      {cover && (
        <Image
          src={cover}
          className={clsx(["w-full"])}
          width={128}
          height={160}
          alt={title}
        />
      )}
      {!cover && (
        <div
          className={clsx(
            ["w-full"],
            ["h-full"],
            ["px-2"],
            ["py-8"],
            ["flex", ["flex-col"], ["items-center"]],
            ["bg-gray-200"],
            ["select-none"],
          )}
        >
          <IconNoImage
            className={clsx(
              ["text-gray-700"],
              ["text-lg"],
            )}
          />
          <span
            className={clsx(
              ["mt-2"],
              ["text-xs"],
              ["text-gray-700"],
            )}
          >
            {LL.BookCover.NoImage()}
          </span>
        </div>
      )}
    </div>
  );
};
