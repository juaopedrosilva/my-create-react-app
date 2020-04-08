export const size = { 
  mobile: 599,
  tablet: 600, 
  desktop: 1200,
}

export const device = { 
  mobile: `@media screen and (max-width: ${size.mobile}px)`,
  tablet: `@media screen and (min-width: ${size.tablet}px)`,
  desktop: `@media screen and (min-width: ${size.desktop}px)`, 
}
 