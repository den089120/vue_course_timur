<template>
  <svg :width="widthIcon" :height="heightIcon" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.2 5V1H1V16.2H5L16.2 5ZM5.8 5.8V21H21V5.8H5.8Z" :stroke="iconColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconCopies',
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
  },
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">

</style>
