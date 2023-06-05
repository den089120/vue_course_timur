import { SelectOptionType } from '@/shared/ui/selectApp/selectOptionType'
import { Country } from './Country'

export const CountryListOption = (): Array<SelectOptionType> => {
  const arr: Array<SelectOptionType> = []
  const key = Object.keys(Country)
  key.forEach(el => arr.push({ nameOpt: el, valueOpt: el }))
  return arr
}
