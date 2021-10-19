import clsx from "clsx";
import React from "react";

import { IconNoImage } from "~/components/atoms/Icon";
import { Image } from "~/components/atoms/Image";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<{
  className?: string;
  title: string;
  image: string | null;
}> = ({ className, title, image }) => {
  const { LL } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        ["inline-flex", ["flex-col"], ["items-center"]],
      )}
    >
      <div
        className={clsx(
          ["w-full"],
          ["h-32"],
          ["relative"],
          ["bg-gray-200"],
        )}
      >
        {image && <Image src={image} className={clsx(["w-full"])} layout="fill" objectFit="contain" />}
        {!image && (
          <div
            className={clsx(
              ["w-full"],
              ["h-full"],
              ["flex", ["flex-col"], ["justify-center"], ["items-center"]],
              ["select-none"],
              ["text-gray-700"],
            )}
          >
            <IconNoImage className={clsx(["text-lg"])} />
            <span className={clsx(["mt-2"], ["text-sm"])}>{LL.CreateHenkenForm.Content.Info.NoImage()}</span>
          </div>
        )}
      </div>
      <div className={clsx(["w-full"], ["flex-grow"], ["mt-2"])}>
        <span className={clsx([["text-base"]])}>{title}</span>
      </div>
    </div>
  );
};

export const Details: React.VFC<{
  className?: string;
  content:
    | { type: "book"; value: { id: string; title: string; cover: string; }; }
    | { type: "bookseries"; value: { id: string; title: string; }; }
    | { type: "author"; value: { id: string; name: string; }; };
}> = ({
  content,
  ...props
}) => {
  switch (content.type) {
    case "author":
      return <Component {...props} title={content.value.name} image={null} />;
    case "book":
      return <Component {...props} title={content.value.title} image={content.value.cover} />;
    case "bookseries":
      return <Component {...props} title={content.value.title} image={null} />;
  }
};
