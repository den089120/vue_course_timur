import { useGlobalStore } from './GlobalStore/GlobalStore'
import pinia from './pinia'
const GlobalStore = useGlobalStore(pinia)

export {
  GlobalStore,
  pinia
}
