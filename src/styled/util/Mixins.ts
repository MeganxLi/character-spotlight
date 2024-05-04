export const breakpoints: { [key: string]: string } = {
  mobile: '576px',
  tablet: '769px',
}

export const rwd = (breakpoint: string) => {
  const point = breakpoints[breakpoint]
  if (!point) {
    console.warn(`Invalid breakpoint: ${breakpoint}.`)
    return ''
  }
  return `@media (max-width: ${point})`
}
