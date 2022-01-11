import React from "react";
import styled from "styled-components";
import { flexBox } from "../../lib/styles/mixin";
import Logo from "./Logo/Logo";
import MenuList from "./MenuList/MenuList";
import Aside from "./Aside/Aside";

const GlobalNavigationBar = () => {
  return (
    <GlobalNavigationBarBlock>
      <GNBContainer>
        <MiniBarNav>
          <Logo />
          <MenuList />
          <Aside />
        </MiniBarNav>
      </GNBContainer>
    </GlobalNavigationBarBlock>
  );
};

const GlobalNavigationBarBlock = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const GNBContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1060px;
  position: relative;

  @media ${({ theme }) => theme.desktopL} {
    height: 50px;
  }
`;

const MiniBarNav = styled.nav`
  ${flexBox("space-between", "center", "row")};
  height: 100%;
  width: 100%;

  @media ${({ theme }) => theme.desktopMS} {
    flex-wrap: wrap;
  }

  @media ${({ theme }) => theme.desktopL} {
    height: 50px;
  }
`;

export default GlobalNavigationBar;
