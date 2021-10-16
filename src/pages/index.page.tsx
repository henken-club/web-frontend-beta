import { NextPage } from "next";
import React from "react";

import { TemplateIndexPage } from "~/components/templates/IndexPage";

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: NextPage<PageProps> = ({ ...props }) => {
  return (
    <>
      <TemplateIndexPage />
    </>
  );
};
export default Page;
