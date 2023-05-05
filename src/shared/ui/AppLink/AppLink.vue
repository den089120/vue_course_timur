<template>
  <RouterLink :to="namePath" :class="$ClassNames('', mods, [...nameClass])">
    <slot></slot>
    <span :class="['link_router', ...classSpan]">{{ $t(nameLink) }}</span>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Mods } from '@/shared/lib/plugins/ClassNames'

export default defineComponent({
  name: 'AppLink',
  props: {
    namePath: String,
    nameClass: [String, Array],
    nameLink: String,
    classSpan: {
      type: [String, Array],
      default: ''
    },
    mods: {
      type: Object as PropType<Mods>
    }
  },
  data () {
    return {}
  }
})
</script>

<style lang="scss">
.link_router {
  margin-left: 10px;
  color: var(--primary-color);
  opacity: 1;
  transition: opacity 0.3s;
}
.short {
  opacity: 0;
  width: 0;
  transition: opacity 0.3s;
}
.primary {
  color: var(--primary-color);
}
.invert_primary {
  color: var(--inverted-primary-color);
}
</style>
