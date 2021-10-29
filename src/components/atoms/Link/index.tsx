import React from "react";

import { Link, LinkType } from "./types";

export * from "./Henken";
export * from "./User";

export const LinkIndex: LinkType = ({ ...props }) => <Link href="/" {...props} />;
export const LinkTos: LinkType = ({ ...props }) => <Link href="/tos" {...props} />;
export const LinkPrivacy: LinkType = ({ ...props }) => <Link href="/privacy" {...props} />;
