import { useGlobalStore } from './GlobalStore/GlobalStore'
import { useUserStore } from '@/entities/User'
import pinia from './pinia'
const GlobalStore = useGlobalStore(pinia)
const UserStore = useUserStore(pinia)

export {
  GlobalStore,
  UserStore,
  pinia
}
