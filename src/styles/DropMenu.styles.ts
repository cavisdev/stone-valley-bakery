import styled from "styled-components";

interface Props {
  visible: boolean;
}

const DropMenuContainer = styled.div<Props>`
  border-top: 8px solid ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.white};
  width: 40%;
  max-width: 212px;
  position: absolute;
  z-index: 10;
  top: 100%;
  right: 0;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  & * {
    text-decoration: none;
  }

    &:last-child {
    border-bottom: none;
  }

  @media only screen and (min-width: 680px) {
    display: none;
  }
`;

const ListItem = styled.div`
  font-size: 1rem;
  text-align: right;
  padding: 6px 16px;
  color: ${({ theme }) => theme.colors.main};
  border-bottom: 1px solid ${({theme}) => theme.colors.main};

  &:hover {
    background-color: rgba(82, 42, 39, 0.2);
  }
`;

export { DropMenuContainer, ListItem };
