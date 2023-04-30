<template>
  <div class="not_found_page">
    {{ $t('NotFoundPage') }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFoundPage',
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.not_found_page {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-l);
}
</style>
