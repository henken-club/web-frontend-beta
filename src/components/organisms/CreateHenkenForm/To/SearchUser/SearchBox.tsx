import clsx from "clsx";
import React from "react";

import { useTranslation } from "~/i18n/useTranslation";

export const Component: React.VFC<{
  className?: string;
  onChange: (query: string) => void;
  onFocus(): void;
  onBlur(): void;
}> = ({ className, onChange, onFocus, onBlur }) => {
  const { LL } = useTranslation();
  return (
    <div className={clsx(className, ["inline-flex"])}>
      <label className={clsx(["flex-grow"])}>
        <input
          type="search"
          autoComplete="on"
          aria-label={LL.CreateHenkenForm.To.SearchBox.aria.QueryInput()}
          onChange={(event) => onChange(event.currentTarget.value)}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          className={clsx(
            ["w-full"],
            [["px-2"], ["py-1"]],
            ["border"],
            [["text-md"]],
          )}
        />
      </label>
    </div>
  );
};

export const Input: React.VFC<{ className?: string; onChange(query: string): void; onFocus(): void; onBlur(): void; }> =
  ({ ...props }) => {
    return <Component {...props} />;
  };
