import { Currency } from './Currency'
import { SelectOptionType } from '@/shared/ui/selectApp/selectOptionType'

export const CurrencyListOption = (): Array<SelectOptionType> => {
  const arr: Array<SelectOptionType> = []
  const key = Object.keys(Currency)
  key.forEach(el => arr.push({ nameOpt: el, valueOpt: el }))
  return arr
}
