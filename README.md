# react-scroll-snap-slider

> - Replaced `styled-components` with `@emotion/styled` and `@emotion/react`
> - Changed typing in `Carousel/index.tsx`
> - Added new prop `hideArrowsWhileScrolling` so the "hiding" of the arrows is optional
> - Added ne prop `hideArrowOnEnd` so the hiding of the arrow at start and end is optional
> - Support custom `breakpoints` (mobile, tablet and desktop)
> - Changed `scroll-snap-align` to `start` instead of `center`
> - Chaged `scroll-snap-type` from `x mandatory` to `x proximity`
> - Only publish the `dist` folder on npm

This is a fork of the [`react-scroll-snap-slider`](https://github.com/lifarl/react-scroll-snap-slider) package from @lifarl.
Since it's one of the best options at the market when it comes to simplicity and file-size this module is a wonderful solution.
But since our project is based on the @emotion-stack and not styled-components we needed a clone with just those packages switched.

If you also want this package but with emotion is peerDependency you can install it with:

```
yarn add @alm-engineering/react-scroll-snap-slider
```

> You can checkout the example page deployed with emotion as dependency here: https://alm-engineering.github.io/react-scroll-snap-slider/

Otherwise we recommend in using the official package.

### Warning

We do not guarantee that this package is in sync with the original package.

### Credits

- @lifarl
