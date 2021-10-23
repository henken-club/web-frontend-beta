import React from "react";

import { Link, LinkType } from "./types";

export const LinkUser: LinkType<{ alias: string; }> = ({ alias, ...props }) => (
  <Link href={`/users/${alias}`} {...props} />
);
