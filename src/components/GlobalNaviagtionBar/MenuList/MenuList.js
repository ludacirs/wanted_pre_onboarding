import React from "react";
import styled from "styled-components";

import { flexBox } from "../../../lib/styles/mixin";

import { ReactComponent as NewFont } from "../../../assets/svgs/new-font.svg";
import { ReactComponent as BetaFont } from "../../../assets/svgs/beta-font.svg";

const MenuList = () => {
  return (
    <MenuListBlock>
      <li className={"home"}>
        <a href="#">홈</a>
      </li>
      <li>
        <a href="#">채용</a>
      </li>
      <li>
        <a href="#">이벤트</a>
      </li>
      <li>
        <a href="#">직군별 연봉</a>
      </li>
      <li>
        <a href="#">이력서</a>
      </li>
      <li>
        <a href="#">
          커뮤니티
          <em>
            <NewFont />
          </em>
        </a>
      </li>
      <li>
        <a href="#">프리랜서</a>
      </li>
      <li>
        <a href="#">
          AI 합격예측
          <em>
            <BetaFont />
          </em>
        </a>
      </li>
    </MenuListBlock>
  );
};

const MenuListBlock = styled.ul`
  ${flexBox("center", "center", "row")};
  height: inherit;
  text-align: center;
  margin: 0;

  .home {
    display: none;
  }

  a {
    position: relative;
    vertical-align: middle;
    font-size: 13px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
    display: inline-block;
    & em {
      position: absolute;
      top: 10px;
      right: -5px;
      pointer-events: none;
      font-style: normal;
    }
  }



  @media ${({ theme }) => theme.desktopL} {
    li:hover {
      box-shadow: inset 0 -2px #ddd;
    }
  }

  @media ${({ theme }) => theme.desktopS} {
    ${() => {
      let styled = "";
      for (let i = 1; i <= 8; i++) {
        styled += `li:nth-child(${i}){display:${i <= 3 ? "block" : "none"}}`;
      }
      return styled;
    }}
`;

export default MenuList;
