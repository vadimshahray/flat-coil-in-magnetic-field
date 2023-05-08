export const addInsignificantZeros = (
  target: number | string,
  zerosCount: number,
) => {
  let zeros = ''

  for (let i = 1; i < zerosCount; i++) {
    if (Number(target) / 10 ** i < 1) {
      zeros += '0'
    }
  }

  return zeros + target
}

export const numberBetween = (value: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, value))
}

export const toFixedLength = (value: number, length: number) => {
  let str = value.toString()

  while (str.length < length) {
    str = ' ' + str
  }

  return str
}
