<template>
  <div :class="$ClassNames('text_container', mods, [...nameClass])">
    <span class="title" v-if="title">{{ title }}</span>
    <span class="text" v-if="text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Mods } from '@/shared/lib/plugins/ClassNames'

export default defineComponent({
  name: 'TextApp',
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    },
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
.text_container {
  display: flex;
  flex-direction: column;
  //align-items: end;
}
.title {
  font: var(--font-l);
  color: var(--primary-color);
  margin-bottom: 10px;
}
.text {
  font: var(--font-m);
  color: var(--secondary-color);
}
.text_center {
  .title {
    text-align: center;
  }
  .text {
    text-align: center;
  }
}
.error {
  .title {
    color: var(--red-light);
  }
  .text {
    color: var(--red-dark);
  }
}
</style>
