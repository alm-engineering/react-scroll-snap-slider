export interface CarouselProps {
  children: React.ReactNode
  renderCustomArrow?: ({
    direction,
    ref,
    onClick,
    disabled,
  }: CustomArrowProps) => JSX.Element
  slidesPerPageSettings?: SlidesPerPageSettings
  breakpoints?: Breakpoints
  slideWidth?: number
  onScrollStart?: (index: number) => void
  onScrollEnd?: (index: number) => void
  onSlidesVisibilityChange?: (index: number, lastIndex?: number) => void
  onSlideVisible?: (index: number) => void
  hideArrowsWhileScrolling?: boolean
  hideArrowOnEnd?: boolean
  isCarousel?: boolean
}

export interface Breakpoints {
  mobile: number
  tablet: number
  desktop: number
}

export interface SlidesPerPageSettings {
  mobileSmall: number
  mobileBig: number
  tablet: number
  desktop: number
}

interface CustomArrowProps {
  direction: 'prev' | 'next'
  ref: React.RefObject<HTMLDivElement>
  onClick: (direction: 'prev' | 'next') => void
  disabled?: boolean
}
