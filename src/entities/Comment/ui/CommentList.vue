<template>
  <div v-if="comments">
    <CommentCard v-for="el in comments" :key="el.id" :comment="el" class="comment_item" :is-loading="isLoading"/>
  </div>
  <TextApp v-else :mods="{}" :name-class="['text_start']" :title="$t('no_comments')"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CommentServer } from '@/entities/Comment/model/type/commentTypes'
import TextApp from '@/shared/ui/textApp/TextApp.vue'
import CommentCard from '@/entities/Comment/ui/CommentCard.vue'

export default defineComponent({
  name: 'CommentList',
  components: { CommentCard, TextApp },
  props: {
    isLoading: {
      type: Boolean
    },
    comments: {
      type: Array as PropType<Array<CommentServer>>
    }
  },
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.comment_item {
  margin-top: 20px;
}
</style>
