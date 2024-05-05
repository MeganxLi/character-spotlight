const parsePixelValue = (value: string) => {
  const parsedValue = value.replace('px', '')
  const integerValue = parseInt(parsedValue, 10)
  return integerValue
}

export default parsePixelValue
