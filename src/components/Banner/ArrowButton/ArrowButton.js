import React from "react";
import styled from "styled-components";

import { ReactComponent as RightArrow } from "../../../assets/svgs/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../../assets/svgs/left-arrow.svg";
import { flexBox } from "../../../lib/styles/mixin";

const positionTemplate = {
  right: `right: calc((100% - 1200px) / 2);`,
  left: `left: calc((100% - 1210px) / 2);`,
};

const ArrowButtonBlock = styled.button`
  ${flexBox("center", "center")};
  ${({ position }) => positionTemplate[position]};

  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;

  .arrow-container {
    ${flexBox("inherit", "inherit")};
    width: 100%;
    svg {
      user-select: none;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
      flex-shrink: 0;
    }
  }

  @media ${({ theme }) => theme.bannerS} {
    display: none;
  }
`;

const ArrowButton = ({ position }) => {
  return (
    <ArrowButtonBlock position={position}>
      <div className="arrow-container">
        {position === "right" ? <RightArrow /> : <LeftArrow />}
      </div>
    </ArrowButtonBlock>
  );
};

export default ArrowButton;
