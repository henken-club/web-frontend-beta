import React from "react";

import { Link, LinkType } from "./types";

export const LinkHenken: LinkType<{ id: string; }> = ({ id, ...props }) => <Link href={`/henkens/${id}`} {...props} />;
