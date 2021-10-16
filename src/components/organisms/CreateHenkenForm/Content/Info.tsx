import clsx from "clsx";
import React from "react";

import { IconNoImage } from "~/components/atoms/Icon";
import { Image } from "~/components/atoms/Image";
import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<{
  title: string;
  image: string | null;
}> = ({ title, image }) => {
  const { LL } = useTranslation();
  return (
    <div className={clsx(["h-64"], ["inline-flex", ["flex-col"], ["items-center"]])}>
      <div className={clsx(["h-48"], ["flex", ["justify-center"]])}>
        {image && <Image src={image} layout="fill" objectFit="contain" />}
        {!image && (
          <div
            className={clsx(
              ["w-full"],
              ["h-full"],
              ["flex", ["flex-col"], ["justify-center"], ["items-center"]],
            )}
          >
            <IconNoImage />
            <span className={clsx(["text-sm"])}>{LL.CreateHenkenForm.Content.Info.NoImage()}</span>
          </div>
        )}
      </div>
      <div className={clsx(["w-full"], ["flex-grow"], ["mt-2"])}>
        <span className={clsx([["text-lg"]])}>{title}</span>
      </div>
    </div>
  );
};

export const Info: React.VFC<{
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
