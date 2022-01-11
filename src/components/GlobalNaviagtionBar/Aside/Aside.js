import React from "react";
import styled from "styled-components";
import { flexBox } from "../../../lib/styles/mixin";

import { ReactComponent as SearchSVG } from "../../../assets/svgs/search-button.svg";
import { ReactComponent as NotiSVG } from "../../../assets/svgs/noti-button.svg";
import { ReactComponent as MoreSvg } from "../../../assets/svgs/more-menu.svg";

const Aside = () => {
  return (
    <AsideBlock>
      <li>
        <button>
          <SearchSVG />
        </button>
      </li>
      <li>
        <button>
          <NotiSVG />
        </button>
      </li>
      <li>
        <ProfileButton className={"profile-button"}>
          <div className={"button-border"}>
            <div className={"avatar-image"} />
          </div>
        </ProfileButton>
      </li>
      <li className={"service"}>
        <a>기업 서비스</a>
      </li>
      <li className={"more-menu-button"}>
        <button>
          <MoreSvg />
        </button>
      </li>
    </AsideBlock>
  );
};

const AsideBlock = styled.ul`
  ${flexBox("center", "center", "row")};
  li > * {
    padding: 0 10px;
  }
  svg {
    margin-top: 5px;
  }
  .more-menu-button {
    display: none;
  }

  .service {
    display: inline-flex;

    &::before {
      display: block;
      content: "";
      width: 1px;
      height: 10px;
      background-color: #e1e2e3;
      margin: auto 10px;
    }
    a {
      font-size: 13px;
      color: #666;
      line-height: 30px;
      height: 30px;
      border: 1px solid #e1e2e3;
      border-radius: 15px;
      padding: 0 10px;
      margin-left: 15px;
      font-weight: 400;
    }
  }
  @media ${({ theme }) => theme.desktopMS} {
    .profile-button {
      display: none;
    }
    .service {
      display: none;
    }
    .more-menu-button {
      display: block;
    }
  }
`;

const ProfileButton = styled.button`
  height: 32px;
  .button-border {
    ${flexBox("center", "center")};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    overflow: hidden;
    .avatar-image {
      background-image: url("/assets/icons/profile_default.png");
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`;

export default Aside;
