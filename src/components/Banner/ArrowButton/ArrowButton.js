import React from "react";
import styled from "styled-components";

import { ReactComponent as RightArrow } from "../../../assets/svgs/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../../assets/svgs/left-arrow.svg";
import { flexBox } from "../../../lib/styles/mixin";
import ArrowContainer from "../../_common/ArrowContainer/ArrowContainer";

const positionTemplate = {
  right: `right: calc((100% - 1200px) / 2);`,
  left: `left: calc((100% - 1210px) / 2);`,
};

const ArrowButtonBlock = styled.button`
  display: none;
  ${({ position }) => positionTemplate[position]};

  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;

  @media ${({ theme }) => theme.bannerL} {
    ${flexBox("center", "center")};
  }
`;

const ArrowButton = ({ position }) => {
  return (
    <ArrowButtonBlock position={position}>
      <ArrowContainer>
        {position === "right" ? <RightArrow /> : <LeftArrow />}
      </ArrowContainer>
    </ArrowButtonBlock>
  );
};

export default ArrowButton;
