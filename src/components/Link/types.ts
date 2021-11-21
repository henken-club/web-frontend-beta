import NextLink, { LinkProps as NextLinkProps } from "next/link";

export const Link = NextLink;

type LinkProps<T extends Record<string, unknown> = Record<string, unknown>> =
  & Omit<NextLinkProps, "href">
  & T;

export type LinkType<TAdd extends Record<string, unknown> = Record<string, unknown>> = React.FC<LinkProps<TAdd>>;
