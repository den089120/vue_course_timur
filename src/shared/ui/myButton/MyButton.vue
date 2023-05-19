<template>
  <button :class="$ClassNames('btn_my', mods, [...nameClass])" :disabled="disabledIs" @click="$emit('clickButton')">
    <slot>TEXT</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Mods } from '@/shared/lib/plugins/ClassNames'
export default defineComponent({
  name: 'MyButton',
  emits: ['clickButton'],
  props: {
    nameClass: [String, Array],
    mods: {
      type: Object as PropType<Mods>
    },
    disabledIs: Boolean
  },
  data () {
    return {}
  }
})
</script>

<style lang="scss">
.btn_my {
  cursor: pointer;
  padding: 6px 15px;
}
.clear {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none;
}
.clear_inverted {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none;
  color: var(--inverted-primary-color);
}
.outline_btn {
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  background: none;
}
.background_btn {
  background: var(--bg-color);
  color: var(--primary-color);
  border: none;
}
.background_btn_inverted {
  background: var(--inverted-bg-color);
  color: var(--inverted-primary-color);
  border: none;
}
.size-m {
  font: var(--font-m);
}
.size-l {
  font: var(--font-l);
}
.size-xl {
  font: var(--font-xl);
}
.square_btn {
  //padding: 0;
  .size-m {
    width: var(--font-size-m);
    height: var(--font-size-m);
  }
  .size-l {
    width: var(--font-line-l);
    height: var(--font-line-l);
  }
  .size-xl {
    width: var(--font-size-xl);
    height: var(--font-size-xl);
  }
}
.btn_disabled {
  opacity: 0.6;
}
</style>
