import clsx from "clsx";
import React from "react";

import { Header } from "./Header";

export const View: React.VFC<{
  henken: {
    id: string;
    comment: string;
    postedBy: {
      id: string;
      alias: string;
      displayName: string;
      avatar: string;
    };
    postsTo: {
      id: string;
      alias: string;
      displayName: string;
      avatar: string;
    };
    content:
      | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
      | { type: "bookseries"; content: { id: string; title: string; }; }
      | { type: "author"; content: { id: string; name: string; }; };
  };
}> = ({ henken }) => {
  return (
    <section
      className={clsx(
        ["w-full"],
        ["bg-white"],
        ["shadow-xl"],
      )}
    >
      <Header
        className={clsx(["w-full"])}
        henken={{
          comment: henken.comment,
          postedBy: henken.postedBy,
          postsTo: henken.postsTo,
          content: henken.content,
        }}
      />
    </section>
  );
};

export const TemplateHenkenPage: React.VFC<{
  henken: {
    id: string;
    comment: string;
    postedBy: { id: string; alias: string; displayName: string; avatar: string; };
    postsTo: { id: string; alias: string; displayName: string; avatar: string; };
    content:
      | { type: "book"; content: { id: string; title: string; cover: string | null; }; }
      | { type: "bookseries"; content: { id: string; title: string; }; }
      | { type: "author"; content: { id: string; name: string; }; };
  };
}> = ({ henken }) => {
  return <View henken={henken} />;
};
