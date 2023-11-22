import { SortAscOrDesc } from './SortAscOrDesc'
import { SelectOptionType } from '@/shared/ui/selectApp/selectOptionType'

export const SortAscOrDescList = (): Array<SelectOptionType> => {
  const arr: Array<SelectOptionType> = []
  Object.entries(SortAscOrDesc).forEach(([key, value]) => {
    arr.push({ nameOpt: value, valueOpt: key })
  })
  return arr
}
