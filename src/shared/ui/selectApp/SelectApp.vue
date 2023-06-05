<template>
  <div :class="$ClassNames('select_container', mods, [...nameClass])">
    <span class="select_label" v-if="label">{{ label }}</span>
    <select class="select_body" @change="$emit('selectValue', $event.target.value)" :disabled="readonlyIs">
      <option v-for="opt in options"
              :key="opt.valueOpt"
              :value="opt.valueOpt"
              :selected="opt.valueOpt === selectedItem"
      >{{ opt.nameOpt }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Mods } from '@/shared/lib/plugins/ClassNames'
import { SelectOptionType } from './selectOptionType'

export default defineComponent({
  name: 'SelectApp',
  emits: ['selectValue'],
  props: {
    nameClass: [String, Array],
    mods: {
      type: Object as PropType<Mods>
    },
    label: String,
    options: {
      type: Array as PropType<SelectOptionType[]>
    },
    readonlyIs: {
      type: Boolean,
      default: false
    },
    selectedItem: String
  },
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.select_container {
  display: flex;
}
.select_label {
  margin-right: 5px;
}
.select_body {
  background: transparent;
  outline: none;
  color: var(--primary-color);
  padding: 2px 10px 2px 2px;
  border: 1px solid var(--primary-color);
  option {
    color: var(--inverted-primary-color);
    background: var(--inverted-bg-color);
  }
}
</style>
