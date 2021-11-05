import React from "react";

import { Link, LinkType } from "./types";

export const LinkUser: LinkType<{ alias: string; }> = ({ alias, ...props }) => (
  <Link href={`/users/${alias}`} {...props} />
);

export const LinkUserReceivedHenkens = LinkUser;
export const LinkUserSendHenkens: LinkType<{ alias: string; }> = ({ alias, ...props }) => (
  <Link href={`/users/${alias}/send-henkens`} {...props} />
);
