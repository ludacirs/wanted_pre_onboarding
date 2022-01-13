import styled from "styled-components";

import { flexBox } from "../../../lib/styles/mixin";

const ArrowContainer = styled.div`
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
`;

export default ArrowContainer;
