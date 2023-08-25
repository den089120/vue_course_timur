<template>
  <div class="comment_card" v-if="isLoading">
    <div class="comment_header">
      <Skeleton :mods="{}" :name-class="['']" :height="'30px'" :width="'30px'" :border-radius="'50%'"/>
      <Skeleton :mods="{}" :name-class="['']" :width="'100px'" :height="'15px'"/>
    </div>
    <Skeleton :mods="{}" :name-class="['']" :height="'50px'" :width="'100%'" class="skeleton_text"/>
  </div>
  <div class="comment_card" v-else>
    <div class="comment_header" @click="userProfile">
      <AvatarApp v-if="comment.user.avatar" :mods="{}" :name-class="['']" :size="'30'" :src="comment.user.avatar"/>
      <TextApp :mods="{}" :name-class="['text_start']" :title="comment.user.username"/>
    </div>
    <TextApp :mods="{}" :name-class="['text_start']" :text="comment.text"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CommentServer } from '@/entities/Comment/model/type/commentTypes'
import AvatarApp from '@/shared/ui/Avatar/AvatarApp.vue'
import TextApp from '@/shared/ui/textApp/TextApp.vue'
import Skeleton from '@/shared/ui/Skeleton/Skeleton.vue'
import { ProfileUserReadStore } from '@/store'
import { RoutesPath } from '@/router/RoutesPath'

export default defineComponent({
  name: 'commentCard',
  components: { Skeleton, TextApp, AvatarApp },
  props: {
    isLoading: {
      type: Boolean
    },
    comment: {
      type: Object as PropType<CommentServer>
    }
  },
  data () {
    return {}
  },
  methods: {
    userProfile () {
      ProfileUserReadStore.setIdUser(this.comment?.userId)
      this.$router.push({ path: RoutesPath.ProfileCommentUser })
    }
  }
})
</script>

<style scoped lang="scss">
.comment_card {
  padding: 10px;
  border: 1px solid var(--primary-color);
}
.comment_header {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.skeleton_text {
  margin: 20px 0;
}
</style>
