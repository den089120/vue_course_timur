<template>
  <ModalApp :class="$ClassNames('login_modal', {}, [])" :view-modal="loginModalView" @close-modal="$emit('closeLogin')">
    <LoginForm/>
  </ModalApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModalApp from '@/shared/ui/modalApp/ModalApp.vue'
import LoginForm from './LoginForm.vue'

export default defineComponent({
  name: 'LoginModal',
  components: { LoginForm, ModalApp },
  props: {
    loginModalView: {
      type: Boolean
    }
  },
  emits: ['closeLogin'],
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.login_modal {}
</style>
