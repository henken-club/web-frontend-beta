import clsx from "clsx";
import React from "react";

export const TemplateContent: React.VFC<{
  className?: string;
  title: string;
  Image: React.VFC<{ className?: string; }>;
  Badge: React.VFC<{ className?: string; }>;
  Details: React.VFC<{ className?: string; }>;
}> = ({ className, title, Image, Badge, Details }) => {
  return (
    <div
      className={clsx(
        className,
        ["px-2", "sm:px-6", "md:px-4"],
        ["py-2", "sm:py-6", "md:py-2"],
        ["inline-flex", ["flex-row"]],
      )}
    >
      <a
        className={clsx(
          ["flex-shrink-0"],
          ["w-16", "sm:w-20", "md:w-28"],
          ["flex"],
        )}
      >
        <Image className={clsx(["w-full"])} />
      </a>
      <div
        className={clsx(
          ["flex-grow"],
          ["ml-4", "md:ml-6"],
          ["flex", ["flex-col"], ["items-start"]],
        )}
      >
        <div className={clsx(["flex", ["flex-col"], ["items-start"]])}>
          <Badge className={clsx()} />
          <span
            className={clsx(
              ["mt-1"],
              ["select-all"],
              [["text-gray-700"], ["text-base", "sm:text-lg", "md:text-xl"], ["font-bold"]],
            )}
          >
            {title}
          </span>
        </div>
        <Details
          className={clsx(
            ["flex-grow"],
            ["w-full"],
            ["mt-0.5", "sm:mt-1", "lg:mt-2"],
          )}
        />
      </div>
    </div>
  );
};
