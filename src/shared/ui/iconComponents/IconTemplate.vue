<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 20 20"
  >
    <g :fill="iconColor">
      <slot></slot>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconTemplate',
  props: {
    width: {
      type: [Number, String],
      default: '20px'
    },
    height: {
      type: [Number, String],
      default: '20px'
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  },
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">

</style>
