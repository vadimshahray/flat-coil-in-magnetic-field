import { addInsignificantZeros } from './number'

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
  return `${addInsignificantZeros(hours, 2)}:${addInsignificantZeros(
    minutes,
    2,
  )}:${addInsignificantZeros(seconds, 2)}:${addInsignificantZeros(
    milliseconds,
    3,
  )}`
}
