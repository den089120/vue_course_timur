<template>
  <div :class="clonFunc('app', {dark: isDark, light: !isDark}, [])">
    <NavBar/>
    <div class="content_page">
      <SideBar/>
      <router-view class="page_wrapper"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import NavBar from '@/widgets/navBar/NavBar.vue'
import SideBar from '@/widgets/sideBar/SideBar.vue'
export default defineComponent({
  name: 'App',
  components: { SideBar, NavBar },
  data () {
    return {}
  },
  mounted () {
    this.getThemeLocal()
    this.getCollapseLocal()
  },
  computed: {
    ...mapState(useGlobalStore, ['isDark'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeTheme', 'getThemeLocal', 'getCollapseLocal']),
    clonFunc (cls: string, mods: Mods, additional: Array<string>): string {
      return classNames(cls, mods, additional)
    }
  }
})
</script>
<style lang="scss">
//.content_page {
//  display: flex;
//}
//.page_wrapper {
//  flex-grow: 1;
//}
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
