import {
  SlidesPerPageSettings,
  Breakpoints,
} from '../Carousel/Carousel.interface'

export interface SlideProps {
  slideIndex: number
  children?: React.ReactNode
  slidesPerPageSettings?: SlidesPerPageSettings
  slideWidth?: number
  breakpoints?: Breakpoints
}

export interface StyledSlideProps {
  slidesPerPageSettings?: SlidesPerPageSettings
  slideWidth?: number
  breakpoints?: Breakpoints
}
