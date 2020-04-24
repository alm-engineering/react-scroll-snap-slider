import styled from 'styled-components'

export const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const StyledSlider = styled.div`
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;
  width: 100%;
`

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`
