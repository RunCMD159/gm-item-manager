export type FormConfiguration =  {
  [key: string]: TextInput | NumberInput | Select | FormConfiguration | [TextInput | NumberInput | Select]
}

export type TextInput = {
  type: string,
  component: 'input',
  required: boolean
  placeholder: string
  defaultValue: string
  referencedField: string
}

export type NumberInput = {
  type: number,
  component: 'input',
  required: boolean
  min: number,
  max: number,
  defaultValue: number
}

export type Select = {
  type: string,
  component: 'select'
  required: boolean
  options: string[]
}
