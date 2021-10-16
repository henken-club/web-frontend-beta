import { NextPage } from "next";
import React from "react";

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: NextPage<PageProps> = ({ ...props }) => {
  return (
    <>
      <h1>henken.club zen</h1>
    </>
  );
};
export default Page;
