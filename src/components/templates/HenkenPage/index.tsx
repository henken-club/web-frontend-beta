import React from "react";

export const View: React.VFC<{ henken: { id: string; }; }> = ({ henken }) => {
  return (
    <>
    </>
  );
};

export const TemplateHenkenPage: React.VFC<{ henken: { id: string; }; }> = ({ henken }) => {
  return <View henken={henken} />;
};
