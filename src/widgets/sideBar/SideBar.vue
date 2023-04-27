<template>
  <div :class="clonFunc('side_bar', {collapsed: isCollapsed}, [])">
    SideBar
    <button @click="changeSideView">toggle</button>
    <div class="switchers">
      <ThemeSwitcher @click="changeTheme"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import ThemeSwitcher from '@/widgets/themeSwitcher/ThemeSwitcher.vue'
export default defineComponent({
  name: 'SideBar',
  components: { ThemeSwitcher },
  data () {
    return {}
  },
  computed: {
    ...mapState(useGlobalStore, ['isCollapsed'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeSideView', 'changeTheme']),
    clonFunc (cls: string, mods: Mods, additional: Array<string>): string {
      return classNames(cls, mods, additional)
    }
  }
})
</script>

<style scoped lang="scss">
.side_bar {
  height: calc(100vh - var(--navbar-height));
  width: var(--sidebar-width);
  background: var(--inverted-bg-color);
  position: relative;
  transition: width 0.3s;
}
.collapsed {
  width: var(--sidebar-width-collapsed);
}
.switchers {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
