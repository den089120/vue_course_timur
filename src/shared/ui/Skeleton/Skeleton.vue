<template>
  <div :class="$ClassNames('skeleton', mods, [...nameClass])" :style="{width, height, borderRadius}">
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Mods } from '@/shared/lib/plugins/ClassNames'

export default defineComponent({
  name: 'Skeleton',
  props: {
    width: String,
    height: String,
    borderRadius: String,
    nameClass: [String, Array],
    mods: {
      type: Object as PropType<Mods>
    }
  },
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.skeleton {
  width: 100%;
  height: 50px;
  position: relative;
  box-shadow: 0 2px 10px var(--skeleton-shadow);
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 80%;
    background: linear-gradient(to right, transparent 0%, var(--skeleton-color) 50%, transparent 100%);
    animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
}
@keyframes load {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}
</style>
