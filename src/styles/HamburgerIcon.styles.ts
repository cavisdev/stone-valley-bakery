import styled from "styled-components";

const MenuSVG = styled.svg`
  stroke: ${({ theme }) => theme.colors.main};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media only screen and (min-width: 680px) {
    display: none;
  }
`;

const CloseSVG = styled.svg`
  stroke: ${({ theme }) => theme.colors.main};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media only screen and (min-width: 680px) {
    display: none;
  }
`;

export { MenuSVG, CloseSVG };
