import clsx from "clsx";
import React from "react";
import styled from "styled-components";

import { Dropdown } from "./Dropdown";

import { useViewer } from "~/auth/useViewer";
import { AvatarSmall } from "~/components/Avatar";

const Details = styled.details`
  & > summary::-webkit-details-marker {
    display: none;
  }

  & > summary:before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }

  &:not([open]) > summary::before {
    display: none;
  }
`;

export const View: React.VFC<{
  className?: string;
  viewer: { id: string; alias: string; displayName: string; avatar: string; };
}> = ({ className, viewer }) => {
  return (
    <Details className={clsx(className, ["relative"], ["inline-flex"])}>
      <summary
        className={clsx(
          ["flex"],
          ["cursor-pointer"],
        )}
      >
        <div
          className={clsx(
            [["w-12"], ["h-12"]],
            ["flex", "items-center", "justify-center"],
            ["border"],
            ["rounded-full"],
          )}
        >
          <AvatarSmall user={{ alias: viewer.alias, avatar: viewer.avatar }} />
        </div>
      </summary>
      <Dropdown
        className={clsx(
          ["absolute"],
          [["top-full"], ["right-0"]],
          ["mt-1"],
        )}
        viewer={viewer}
      />
    </Details>
  );
};

export const Profile: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const viewer = useViewer();

  if (!viewer) return <></>;

  return (
    <View
      {...props}
      viewer={viewer}
    />
  );
};
