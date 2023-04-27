<template>
  <RouterLink :to="{ name: namePath }" :class="clonFunc('link_router', mods, [nameClass])">
    {{ nameLink }}
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'

export default defineComponent({
  name: 'AppLink',
  props: {
    namePath: String,
    nameClass: [String, Array],
    nameLink: String,
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
.link_router {
  color: var(--primary-color);
}
.primary {
  color: var(--primary-color);
}
.secondary {
  color: var(--inverted-primary-color);
}
</style>
