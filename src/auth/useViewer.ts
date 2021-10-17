import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export type Viewer = { id: string; alias: string; displayName: string; avatar: string; };

export const viewerState = atom<undefined | null | Viewer>({
  key: "viewer",
  default: undefined,
});

export const useViewer = (): Viewer | null | undefined => {
  const viewer = useRecoilValue(viewerState);
  return viewer;
};

export const useSetViewer = () => {
  const setter = useSetRecoilState(viewerState);
  return (viewer: Viewer | null) => setter(viewer);
};

export const useUpdateViewer = () => {
  const setter = useSetRecoilState(viewerState);
  return (viewer: Viewer) => setter(viewer);
};
