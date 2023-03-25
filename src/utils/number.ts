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
