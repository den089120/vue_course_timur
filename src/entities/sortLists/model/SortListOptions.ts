import { SortOptions } from './SortOptions'
import { SelectOptionType } from '@/shared/ui/selectApp/selectOptionType'

export const SortListOptions = (): Array<SelectOptionType> => {
  const arr: Array<SelectOptionType> = []
  Object.entries(SortOptions).forEach(([key, value]) => {
    arr.push({ nameOpt: value, valueOpt: key })
  })
  return arr
}
