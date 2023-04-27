<template>
  <button  :class="clonFunc('btn_my', mods, [nameClass])" @click="$emit('clickButton')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
export default defineComponent({
  name: 'MyButton',
  emits: ['clickButton'],
  props: {
    nameClass: [String, Array],
    mods: {
      type: Object as PropType<Mods>
    }
  },
  data () {
    return {}
  },
  methods: {
    clonFunc (cls: string, mods: Mods, additional: Array<string>): string {
      return classNames(cls, mods, additional)
    }
  }
})
</script>

<style scoped lang="scss">
.btn_my {
  cursor: pointer;
}
.clear {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none;
}
</style>
