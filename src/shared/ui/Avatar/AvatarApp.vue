<template>
  <img :src="src"
       :style="{width: `${size}px`, height: `${size}px`}"
       :alt="alt"
       :class="$ClassNames('avatar_app', mods, [...nameClass])"
  >
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Mods } from '@/shared/lib/plugins/ClassNames'

export default defineComponent({
  name: 'AvatarApp',
  props: {
    nameClass: [String, Array],
    mods: {
      type: Object as PropType<Mods>
    },
    src: String,
    size: String,
    alt: String
  },
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.avatar_app {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
