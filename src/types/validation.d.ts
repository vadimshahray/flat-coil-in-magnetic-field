type BaseRuleOptions = {
  typeError: string
  requiredError: string
}

type MinMaxRuleOptions = {
  min: number
  max: number
  minError: string
  maxError: string
} & BaseRuleOptions
