import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BannerItem from "./BannerItem/BannerItem";
import dummy from "../../../mock/dummy.json";

const CarouselBlock = styled.div`
  position: relative;
  display: block;
  margin-bottom: 0;
  .slick-list {
    padding: 0 50px;
    .slick-track {
      position: relative;
      left: 0;
      top: 0;
      display: block;
    }
  }
`;

const Carousel = () => {
  const [bannerItems, setBannerItems] = useState([]);

  useEffect(() => {
    const data = dummy;
    setBannerItems(data);
  }, []);

  return (
    <CarouselBlock>
      <div className={"slick-list"}>
        <div className={"slick-track"}>{bannerItems.map(BannerItem)}</div>
      </div>
    </CarouselBlock>
  );
};

export default Carousel;
