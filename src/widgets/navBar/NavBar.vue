<template>
  <nav :class="clonFunc('nav_bar', {}, [nameClass])">
    <AppLink name-link="main" :name-path="appPath.Main" name-class="secondary"/> |
    <AppLink name-link="about" :name-path="appPath.About" name-class="secondary"/>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import AppLink from '@/shared/ui/AppLink/AppLink.vue'
import { RoutesPath } from '@/router/RoutesPath'
export default defineComponent({
  name: 'NavBar',
  components: { AppLink },
  props: {
    nameClass: [String, Array]
  },
  computed: {
    appPath ():Record<string, string> {
      return RoutesPath
    }
  },
  methods: {
    clonFunc (cls: string, mods: Mods, additional: Array<string>): string {
      return classNames(cls, mods, additional)
    }
  }
})
</script>

<style lang="scss">
.nav_bar {
  width: 100%;
  height: var(--navbar-height);
  background: var(--inverted-bg-color);
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
