<template>
  <div>
    {{ $t('text_MyErrorPage') }}
    <MyButton @click="reloadPage">{{ $t('text_btn_reload') }}</MyButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'

export default defineComponent({
  name: 'MyErrorPage',
  components: { MyButton },
  data () {
    return {}
  },
  methods: {
    reloadPage () {
      window.location.reload()
    }
  }
})
</script>

<style scoped lang="scss">

</style>
