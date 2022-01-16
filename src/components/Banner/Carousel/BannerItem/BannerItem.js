import React from "react";
import styled from "styled-components";
import ArrowContainer from "../../../_common/ArrowContainer/ArrowContainer";
import { ReactComponent as RightArrow } from "../../../../assets/svgs/right-arrow.svg";
import { useSlideState } from "../../../../contexts/SlideContext";

const { REACT_APP_LOCAL_HOST } = process.env;

const BannerItem = ({
  imageSrc,
  title,
  description,
  link,
  bannerImageSize,
  arrayIndex,
}) => {
  const { currentIndex, bannerItems } = useSlideState();

  return (
    <BannerItemBlock
      bannerSize={bannerImageSize}
      className={arrayIndex === currentIndex ? "current" : ""}
    >
      <div className="item-container">
        <ImageContainer>
          <a href={link}>
            <img src={REACT_APP_LOCAL_HOST + imageSrc} alt="배너 이미지" />
          </a>
        </ImageContainer>
        <InformationContainer>
          <h2 className={"title"}>{title}</h2>
          <h3 className={"description"}>{description}</h3>
          <hr />
          <a href={link}>
            <span>
              바로가기
              <ArrowContainer>
                <RightArrow />
              </ArrowContainer>
            </span>
          </a>
        </InformationContainer>
      </div>
    </BannerItemBlock>
  );
};

const BannerItemBlock = styled.div`
  width: ${({ bannerSize }) => bannerSize}px;
  outline: none;
  padding: 0 12px;
  box-sizing: content-box;
  position: relative;
  &:not(.current) .item-container {
    filter: brightness(50%);
    & div:nth-child(2) {
      display: none;
    }
  }
  .item-container {
    width: 100%;
    display: inline-block;
  }
`;

const ImageContainer = styled.div`
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
  transition: 0.45s;
  text-align: center;
  h2 {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    color: #333;
    width: "auto";
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  h3 {
    margin-top: 6px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.15;
    color: #666;
    width: "auto";
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  hr {
    display: none;
    height: 1px;
    margin: 0;
    border: none;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: #ececec;
  }
  a {
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    color: #36f;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 25px;
    cursor: pointer;
    height: 40px;

    & span {
      width: 100%;
      font-size: inherit;
      font-weight: inherit;
      display: inherit;
      -webkit-align-items: inherit;
      -ms-flex-align: inherit;
      align-items: inherit;
      -webkit-justify-content: inherit;
      -ms-flex-pack: inherit;
      justify-content: inherit;
      color: inherit;
      div {
        width: 14px;
        height: 14px;
        margin-top: -2px;
        margin-right: -1px;
        margin-left: 2px;
      }
    }
  }
  @media ${({ theme }) => theme.bannerL} {
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
    h2 {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 20px;
      line-height: 1.5;
    }
    h3 {
      margin: 0 20px;
      height: 44px;
      font-size: 14px;
      line-height: 1.64;
      color: #333;
    }
    hr {
      display: block;
    }
    a {
      margin: 6px 0 0 13px;
    }
  }
`;

export default BannerItem;
