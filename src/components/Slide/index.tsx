import React from 'react'
import { SlideProps } from './Slide.interface'
import { StyledSlide } from './Slide.styled'

const Slide = React.forwardRef(
  (
    {
      slideIndex,
      slidesPerPageSettings,
      slideWidth,
      children,
      breakpoints,
    }: SlideProps,
    ref: React.Ref<HTMLLIElement>
  ) => {
    return (
      <StyledSlide
        slidesPerPageSettings={slidesPerPageSettings}
        slideWidth={slideWidth}
        data-index-number={slideIndex}
        key={slideIndex}
        breakpoints={breakpoints}
        ref={ref}
      >
        {children}
      </StyledSlide>
    )
  }
)

Slide.displayName = 'Slide'

export default Slide
