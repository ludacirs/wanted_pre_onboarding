import React from "react";
import styled from "styled-components";

const BannerItemBlock = styled.div`
  width: 1060px;
`;

const BannerItem = ({ imageSrc, title, description, link }) => {
  return (
    <BannerItemBlock>
      <a href="#">
        <img src={imageSrc} alt="배너 이미지" />
      </a>
      <div>
        <h2 className={"title"}>{title}</h2>
        <h3 className={"description"}>{description}</h3>
        <a href="#">
          <span>바로가기</span>
        </a>
      </div>
    </BannerItemBlock>
  );
};

export default BannerItem;
