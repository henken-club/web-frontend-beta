import clsx from "clsx";
import React from "react";

import { AvatarSmall } from "~/components/atoms/Avatar";
import { LinkUser } from "~/components/atoms/Link";

export const View: React.VFC<{
  className?: string;
  viewer: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ className, viewer }) => {
  return (
    <div
      className={clsx(
        className,
        ["w-64"],
        ["bg-white"],
        ["py-2"],
        ["inline-flex", ["flex-col"]],
        ["rounded-lg"],
        ["shadow-lg"],
      )}
    >
      <LinkUser alias={viewer.alias}>
        <a
          className={clsx(
            [["px-4"], ["py-2"]],
            [["flex"], ["items-center"]],
            ["bg-white", "hover:bg-blue-100"],
          )}
        >
          <div className={clsx(["w-10"], ["h-10"])}>
            <AvatarSmall user={{ alias: viewer.alias, avatar: viewer.avatar }} />
          </div>
          <div className={clsx(["ml-2"], [["flex"], ["flex-col"]])}>
            <span className={clsx(["font-bold"], ["text-sm"])}>
              {viewer.displayName}
            </span>
            <span className={clsx(["text-sm"])}>{viewer.alias}</span>
          </div>
        </a>
      </LinkUser>
    </div>
  );
};

export const Dropdown: React.VFC<
  { className?: string; viewer: { id: string; alias: string; displayName: string; avatar: string; }; }
> = ({ ...props }) => {
  return <View {...props} />;
};
