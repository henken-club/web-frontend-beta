import clsx from "clsx";
import gql from "graphql-tag";
import React, { useMemo } from "react";
import styled from "styled-components";

import { Dropdown, NotificationType } from "./Dropdown";

import { IconNotification } from "~/components/atoms/Icon";
import { useGlobalNavFetchNotificationsQuery } from "~/components/codegen";

const _GlobalNavFetchNotifications = gql`
  query GlobalNavFetchNotifications{
      notifications(first:10,orderBy:{direction:DESC,field:CREATED_AT}){
        pageInfo{
          hasNextPage
          endCursor
        }
        edges{
          node{
            ... on  ReceivedHenkenNotification{
              id
              createdAt
              read
              henken {
                id
                comment
                postedBy{
                  id
                  alias
                  displayName
                  avatar
                }
              }
            }
            ... on ReceivedAnswerNotification{
              id
              createdAt
              read
              answer {
                id
                comment
                henken{
                  comment
                  postsTo {
                    id
                    alias
                    displayName
                    avatar
                  }
                }
              }
          }
        }
      }
    }
  }
`;

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
  notifications: NotificationType[];
  hasUnread: boolean;
}> = ({ className, notifications }) => {
  return (
    <Details className={clsx(className, ["relative"], ["inline-flex"])}>
      <summary
        className={clsx(
          ["flex"],
          ["cursor-pointer"],
          ["border", ["border-gray-300"]],
          ["bg-white"],
          ["rounded-md"],
        )}
      >
        <div
          className={clsx(
            [["w-8"], ["h-8"]],
            ["flex", "items-center", "justify-center"],
          )}
        >
          <IconNotification
            className={clsx(
              ["text-lg", ["text-gray-500"]],
            )}
          />
        </div>
      </summary>
      <Dropdown
        className={clsx(
          ["absolute"],
          [["top-full"], ["right-0"]],
          ["mt-1"],
        )}
        notifications={notifications}
      />
    </Details>
  );
};

export const Notification: React.VFC<{ className?: string; }> = ({ ...props }) => {
  const [{ data }] = useGlobalNavFetchNotificationsQuery();
  const notifications = useMemo<NotificationType[]>(() => {
    if (!data || !data.viewer) return [];
    return data.viewer.activities.edges.map(({ node }) => {
      switch (node.__typename) {
        case "ReceivedHenkenActivity":
          return {
            type: "receivedHenken",
            value: {
              id: node.id,
              unread: node.unread,
              comment: node.henken.comment,
              createdAt: node.createdAt,
              from: {
                id: node.henken.postedBy.id,
                alias: node.henken.postedBy.alias,
                displayName: node.henken.postedBy.displayName,
                avatar: node.henken.postedBy.avatar,
              },
            },
          };
        case "ReceivedAnswerActivity":
          return {
            type: "receivedAnswer",
            value: {
              id: node.id,
              unread: node.unread,
              comment: node.answer.comment,
              createdAt: node.createdAt,
              from: {
                id: node.answer.henken.postsTo.id,
                alias: node.answer.henken.postsTo.alias,
                displayName: node.answer.henken.postsTo.displayName,
                avatar: node.answer.henken.postsTo.avatar,
              },
            },
          };
      }
    });
  }, [data]);
  const hasUnread = useMemo<boolean>(
    () => Boolean(notifications.findIndex(({ value: { unread } }) => unread)),
    [notifications],
  );

  return (
    <View
      {...props}
      notifications={notifications}
      hasUnread={hasUnread}
    />
  );
};
