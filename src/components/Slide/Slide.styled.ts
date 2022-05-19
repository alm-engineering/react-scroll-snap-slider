import styled from '@emotion/styled'
import { StyledSlideProps } from './Slide.interface'

export const StyledSlide = styled.li<StyledSlideProps>`
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  min-width: ${(props: StyledSlideProps) =>
    props.slidesPerPageSettings
      ? `${100 / props.slidesPerPageSettings.mobileSmall}%`
      : props.slideWidth
      ? `${props.slideWidth}px`
      : '100%'};

  @media (min-width: ${(props: StyledSlideProps) =>
      props.breakpoints?.mobile || 512}px) {
    ${(props: StyledSlideProps) =>
      props.slidesPerPageSettings
        ? `min-width: ${100 / props.slidesPerPageSettings.mobileBig}%`
        : ''};
  }

  @media (min-width: ${(props: StyledSlideProps) =>
      props.breakpoints?.tablet || 753}px) {
    ${(props: StyledSlideProps) =>
      props.slidesPerPageSettings
        ? `min-width: ${100 / props.slidesPerPageSettings.tablet}%`
        : ''};
  }

  @media (min-width: ${(props: StyledSlideProps) =>
      props.breakpoints?.desktop || 1232}px) {
    ${(props: StyledSlideProps) =>
      props.slidesPerPageSettings
        ? `min-width: ${100 / props.slidesPerPageSettings.desktop}%`
        : ''};
  }
`
