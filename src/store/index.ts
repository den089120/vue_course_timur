import { useGlobalStore } from './GlobalStore/GlobalStore'
import { useUserStore } from '@/entities/User'
import { useLoginFormStore } from '@/store/LoginFormStore/LoginFormStore'
import { useProfileStore } from '@/entities/Profile'
import { useArticleStore } from '@/entities/Article/model/articleStore/ArticleStore'
import pinia from './pinia'

const GlobalStore = useGlobalStore(pinia)
const UserStore = useUserStore(pinia)
const LoginFormStore = useLoginFormStore(pinia)
const ProfileStore = useProfileStore(pinia)
const ArticleStore = useArticleStore(pinia)

export {
  GlobalStore,
  UserStore,
  LoginFormStore,
  ProfileStore,
  ArticleStore,
  pinia
}
