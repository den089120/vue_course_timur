<template>
  <div :class="clonFunc('app', {dark: isDark, light: !isDark}, [])">
    <button @click="changeTheme">TOGGLE</button>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import { classNames, Mods } from './helpers/classNames/classNames'
export default defineComponent({
  name: 'App',
  data () {
    return {}
  },
  computed: {
    ...mapState(useGlobalStore, ['isDark'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeTheme']),
    clonFunc (cls: string, mods: Mods, additional: Array<string>): string {
      return classNames(cls, mods, additional)
    }
  }
})
</script>
<style lang="scss">

.app {
  font: var(--font-m);
  background: var(--bg-color);
  text-align: center;
  color: var(--primary-color);
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: var(--primary-color);

    &.router-link-exact-active {
      color: var(--primary-color);
    }
  }
}
</style>
