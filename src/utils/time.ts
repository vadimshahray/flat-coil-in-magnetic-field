export const ticksToTime = (ticks: number): Time => {
  return {
    hours: Math.floor(ticks / 1000 / 60 / 60),
    minutes: Math.floor(ticks / 1000 / 60) % 60,
    seconds: Math.floor(ticks / 1000) % 60,
    milliseconds: Math.floor(ticks) % 1000,
    ticks,
  }
}

export const timeToString = ({
  hours,
  minutes,
  seconds,
  milliseconds,
}: Time) => {
  return `${addZeros(hours, 2)}:${addZeros(minutes, 2)}:${addZeros(
    seconds,
    2,
  )}:${addZeros(milliseconds, 3)}`
}

const addZeros = (x: number, count: number) => {
  let zeros = ''

  for (let i = 1; i < count; i++) {
    if (x / 10 ** i < 1) {
      zeros += '0'
    }
  }

  return zeros + x
}
