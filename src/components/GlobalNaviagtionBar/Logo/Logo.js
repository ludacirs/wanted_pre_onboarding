import React from "react";
import styled from "styled-components";
import { flexBox } from "../../../lib/styles/mixin";

const LogoBlock = styled.div`
  ${flexBox("flex-start")};

  @media ${({ theme }) => theme.desktopMS} {
    width: 100%;
    height: 60px;
    padding: 15px 0;
  }

  @media ${({ theme }) => theme.desktopL} {
  }

  button {
    margin-right: 15px;
    img {
      height: 14px;
      width: 17px;
      object-fit: contain;
    }
  }
`;

const Logo = () => {
  return (
    <LogoBlock>
      <button>
        <img src="/assets/icons/icon-menu.png" alt="햄버거" />
      </button>
      <a href={"#"}>
        <img src="/assets/icons/wanted-logo.png" alt="로고 이미지" />
      </a>
    </LogoBlock>
  );
};

export default Logo;
