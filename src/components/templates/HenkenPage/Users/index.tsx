import clsx from "clsx";
import React from "react";

import { From, To } from "./User";

import { useTranslation } from "~/i18n/useTranslation";

export const View: React.VFC<{
  className?: string;
  postedBy: { id: string; alias: string; displayName: string; avatar: string; };
  postsTo: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ className, postedBy, postsTo }) => {
  const { LL } = useTranslation();
  return (
    <section
      className={clsx(
        className,
        ["bg-gray-900"],
        [
          "inline-flex",
          ["flex-col", "md:flex-row", "lg:flex-col", "xl:flex-row"],
        ],
      )}
    >
      <From
        className={clsx(
          ["w-full", "md:w-1/2", "lg:w-full", "xl:w-1/2"],
        )}
        user={postedBy}
      />
      <To
        className={clsx(
          ["w-full", "md:w-1/2", "lg:w-full", "xl:w-1/2"],
        )}
        user={postsTo}
      />
    </section>
  );
};

export const Users: React.VFC<{
  className?: string;
  henken: {
    postedBy: { id: string; alias: string; displayName: string; avatar: string; };
    postsTo: { id: string; alias: string; displayName: string; avatar: string; };
  };
}> = ({ henken, ...props }) => {
  return <View {...henken} {...props} />;
};
