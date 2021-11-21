import clsx from "clsx";
import React from "react";

import { Image } from "~/components/Image";

export const AvatarSmall: React.VFC<{
  user: { alias: string; avatar: string; };
}> = ({ user: { alias, avatar } }) => (
  <Image
    className={clsx(["rounded-full"])}
    width={96}
    height={96}
    src={avatar}
    alt={alias}
  />
);

export const AvatarLarge: React.VFC<{
  user: { alias: string; avatar: string; };
}> = ({ user: { alias, avatar } }) => (
  <Image
    className={clsx(["rounded-full"])}
    width={256}
    height={256}
    src={avatar}
    alt={alias}
  />
);
