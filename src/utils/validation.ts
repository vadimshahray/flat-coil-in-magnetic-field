import * as yup from 'yup'

export const minMaxRule = ({
  min,
  max,
  typeError,
  minError,
  maxError,
  requiredError,
}: MinMaxRuleOptions) => {
  return yup
    .number()
    .transform(commaToDot)
    .typeError(typeError)
    .min(min, minError)
    .max(max, maxError)
    .required(requiredError)
}

const commaToDot = (v: any, ov: any) => {
  return typeof ov === 'string' ? Number(ov.replace(',', '.')) : v
}
