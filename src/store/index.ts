import { useGlobalStore } from './GlobalStore/GlobalStore'
import { useUserStore } from '@/entities/User'
import { useLoginFormStore } from '@/store/LoginFormStore/LoginFormStore'
import { useProfileStore } from '@/entities/Profile'
import { useArticleStore } from '@/entities/Article/model/articleStore/ArticleStore'
import { useCommentStore } from '@/entities/Comment/model/Store/CommentStore'
import { useProfileUserReadStore } from '@/entities/Profile/model/profileStore/ProfileUserReadStore'
import pinia from './pinia'
import { useRepo } from 'pinia-orm'
import { CommentORM } from '@/entities/Comment/model/model_for_orm/CommentORM'

const GlobalStore = useGlobalStore(pinia)
const UserStore = useUserStore(pinia)
const LoginFormStore = useLoginFormStore(pinia)
const ProfileStore = useProfileStore(pinia)
const ArticleStore = useArticleStore(pinia)
const CommentStore = useCommentStore(pinia)
const ProfileUserReadStore = useProfileUserReadStore(pinia)
const CommentStoreORM = useRepo(CommentORM)

export {
  GlobalStore,
  UserStore,
  LoginFormStore,
  ProfileStore,
  ArticleStore,
  CommentStoreORM,
  CommentStore,
  ProfileUserReadStore,
  pinia
}
