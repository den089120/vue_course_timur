import { SelectOptionType } from '@/shared/ui/selectApp/selectOptionType'
import { SortType } from './SortType'

export const SortTypeList = (): Array<SelectOptionType> => {
  const arr: Array<SelectOptionType> = []
  Object.entries(SortType).forEach(([key, value]) => {
    arr.push({ nameOpt: value, valueOpt: key })
  })
  return arr
}
