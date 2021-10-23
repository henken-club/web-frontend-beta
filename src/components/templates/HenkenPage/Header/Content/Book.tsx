import clsx from "clsx";
import React from "react";

import { Image } from "~/components/atoms/Image";
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
}> = ({ className, title, cover, authors }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-row"]],
      )}
    >
      <div
        className={clsx(
          ["flex-grow"],
          ["flex", ["flex-col"]],
        )}
      >
        <span
          className={clsx(
            ["select-all"],
            [
              ["text-white"],
              ["text-lg"],
              ["font-bold"],
            ],
          )}
        >
          {title}
        </span>
        <div className={clsx(["mt-2"], ["flex", ["space-x-2"]])}>
          {authors.map(({ id, name }) => (
            <span key={id} className={clsx(["text-blue-300"])}>
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className={clsx(["flex-shrink"], ["ml-4"])}>
        <div
          className={clsx(
            [["w-24"]],
            ["relative"],
          )}
        >
          {cover && (
            <Image
              src={cover}
              className={clsx(["w-full"])}
              width={128}
              height={160}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const Book = View;
