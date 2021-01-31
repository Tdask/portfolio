export const getCurrentSize = breakpoints => {
  const { xs, sm, md, l } = breakpoints
  if (!l) {
    return "xl"
  } else if (l && !md) {
    return "l"
  } else if (md && !sm) {
    return "md"
  } else {
    if (sm && !xs) {
      return "sm"
    } else if (xs) {
      return "xs"
    }
  }
}

export const fontSizes = {
  xl: 60,
  l: 60,
  md: 50,
  sm: 35,
  xs: 30,
}
