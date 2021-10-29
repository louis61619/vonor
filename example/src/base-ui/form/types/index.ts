type IFormType = 'select' | 'password' | 'datepicker' | 'input' | 'custom'

export interface IIFormItems {
  field: string
  label: string
  rules?: any[]
  placeholder?: string
  type?: IFormType
  options?: any[]
  isHidden?: boolean

  // 其他的屬性
  otherOptions?: any
  slotName?: string
}

export interface IForm {
  formItems: IIFormItems[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
