import { defineAsyncComponent } from 'vue'
import CSSLoader from '@/shared/ui/CSSloader/CSSLoader.vue'

const asyncProfileUserReadPage = defineAsyncComponent({
  loader: () => import('@/pages/ProfilePage/ProfileUserReadPage.vue'),
  loadingComponent: CSSLoader
})
const asyncNewCommentForm = defineAsyncComponent({
  loader: () => import('@/entities/Comment/ui/NewCommentForm.vue'),
  loadingComponent: CSSLoader
})

export {
  asyncProfileUserReadPage,
  asyncNewCommentForm
}
