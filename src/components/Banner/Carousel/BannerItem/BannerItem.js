import React from "react";
import styled from "styled-components";

const BannerItemBlock = styled.div`
  width: ${({ bannerSize }) => bannerSize}px;
  outline: none;
  padding: 0 12px;
  box-sizing: content-box;
  position: relative;
  .item-container {
    width: 100%;
    display: inline-block;
  }
`;

const ImageContainer = styled.div`
  filter: brightness(100%);
  a {
    text-decoration: inherit;
    cursor: pointer;

    img {
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }
  }
`;

const InformationContainer = styled.div`
  position: absolute;
  bottom: 28px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  opacity: 1;
  text-align: left;
  left: 34px;
  z-index: 1;
`;

const BannerItem = ({
  imageSrc,
  title,
  description,
  link,
  bannerImageSize,
}) => {
  return (
    <BannerItemBlock bannerSize={bannerImageSize}>
      <div className="item-container">
        <ImageContainer>
          <a href="#">
            <img src={imageSrc} alt="배너 이미지" />
          </a>
        </ImageContainer>
        <InformationContainer>
          <h2 className={"title"}>{title}</h2>
          <h3 className={"description"}>{description}</h3>
          <a href="#">
            <span>바로가기</span>
          </a>
        </InformationContainer>
      </div>
    </BannerItemBlock>
  );
};

export default BannerItem;
