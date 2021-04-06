import React from 'react';
import styled from 'styled-components';
import bannerImg from '../image/banner.png';

const BannerEl = styled.div`

`;

export const Banner = () => (
  <BannerEl>
    <img src={bannerImg} alt="banner" />
  </BannerEl>
);