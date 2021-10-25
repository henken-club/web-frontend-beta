import styled from "styled-components";

export const PopupDivLeft = styled.div`
  &{position:relative}
  &::before{
    content: "";
    position:absolute;
    top: 0;
    right: 100%;
    width: 1rem;
    height: 1rem;
    background-color: inherit;
    transform: translateX(50%) skewX(45deg);
  }
`;

export const PopupDivRight = styled.div`
  &{position:relative}
  &::before{
    content: "";
    position:absolute;
    top: 0;
    left: 100%;
    width: 1rem;
    height: 1rem;
    background-color: inherit;
    transform: translateX(-50%) skewX(-45deg);
  }
`;
