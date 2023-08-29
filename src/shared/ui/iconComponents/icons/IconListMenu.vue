<template>
  <div>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" :width="widthIcon" :height="heightIcon" :stroke="iconColor">
      <g>
        <path d="M28,10H4A1,1,0,0,1,4,8H28a1,1,0,0,1,0,2Z"/>
        <path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/>
        <path d="M28,24H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z"/>
      </g>
      <g id="frame">
        <rect class="cls-1" style="fill:none;" height="32" width="32"/>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconListMenu',
  props: {
    widthIcon: {
      type: [Number, String],
      default: '20px'
    },
    heightIcon: {
      type: [Number, String],
      default: '20px'
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
})
</script>

<style scoped lang="scss">

</style>
