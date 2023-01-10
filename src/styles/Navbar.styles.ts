import styled from "styled-components";

const NavContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 104px;
  min-width: 375px;
  border-bottom: 8px solid ${({ theme }) => theme.colors.main};
  font-size: 1rem;

  @media only screen and (min-width: 680px) {
    justify-content: space-between;
    padding: 0;
  }

  @media only screen and (min-width: 840px) {
    font-size: 1.5rem;
  }
`;

const NavList = styled.div`
  display: none;
  height: 100%;
  width: calc(50% - 108px);

  & * {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main};
    width: 33%;
    height: 100%;
  }

  & *:hover {
    background-color: rgba(82, 42, 39, 0.2);
  }

  @media only screen and (min-width: 680px) {
    display: flex;
    justify-content: space-between;
  }
`;

const NavText = styled.p`
display: flex;
align-items: flex-end;
justify-content: center;
margin: 0;
padding: 0;
width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  width: 192px;
  height: 128px;
  left: 24px;
  top: 32px;
  border-radius: 50%;

  @media only screen and (min-width: 680px) {
    left: calc(50% - 96px);
  }
`;

const Logo = styled.img`
  height: 100%;
  margin: 0 0 32px 32px;
`;

export { NavContainer, NavList, NavText, LogoContainer, Logo };
