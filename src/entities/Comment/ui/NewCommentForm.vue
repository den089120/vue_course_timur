<template>
  <div class="new_comment_form">
    <InputApp type-input="text"
              v-model:textInput="newComment"
              :mods="{}"
              :name-class="['login_input', 'login_input_gow']"
              :place-holder="$t('enter_comment_text')"
    />
    <MyButton :name-class="['outline_btn']" :mods="{}" @click="sendComment">{{$t('send_comment')}}</MyButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputApp from '@/shared/ui/inputApp/inputApp.vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import { ArticleStore, CommentStore, UserStore } from '@/store'

export default defineComponent({
  name: 'NewCommentForm',
  components: { InputApp, MyButton },
  data () {
    return {
      newComment: ''
    }
  },
  methods: {
    async sendComment () {
      const data = {
        text: this.newComment,
        articlesId: ArticleStore.articleId,
        userId: UserStore.user.id
      }
      await CommentStore.sendNewComment(data)
      this.newComment = ''
    }
  }
})
</script>

<style scoped lang="scss">
.new_comment_form {
  border: 1px solid var(--primary-color);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
