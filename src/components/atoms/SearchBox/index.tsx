import clsx from "clsx";
import React, { useState } from "react";

export const SearchBox: React.VFC<{
  className?: string;
  input: React.VFC<{ className?: string; onFocus(): void; }>;
  suggestions: React.VFC<{ className?: string; onSelect(): void; }>;
}> = ({ className, input: Input, suggestions: Suggestions }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={clsx(className, ["relative"], ["inline-flex"])}>
      {focus && (
        <>
          <div
            className={clsx(["fixed", "inset-0"], ["z-0"])}
            onClick={() => setFocus(false)}
            onKeyPress={() => setFocus(false)}
          />
          <div
            className={clsx(
              ["absolute", ["left-0"], ["top-full"], "z-1"],
              ["w-full"],
            )}
          >
            <Suggestions
              className={clsx(["w-full"])}
              onSelect={() => setFocus(false)}
            />
          </div>
        </>
      )}
      <Input className={clsx(["relative", "z-1"])} onFocus={() => setFocus(true)} />
    </div>
  );
};
