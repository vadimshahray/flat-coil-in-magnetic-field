type Wire = {
  connectionA: Terminal | null

  connectionB: Terminal | null
}

type Terminal =
  | '@VoltmeterPlus'
  | '@VoltmeterMinus'
  | '@CoilPlus'
  | '@CoilMinus'
