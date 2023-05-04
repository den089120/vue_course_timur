<template>
  <div :class="clonFunc('side_bar', {collapsed: isCollapsed}, [])">
    <div :class="clonFunc('items_container', {}, [])">
      <AppLink name-link="main" :name-path="appPath.Main" name-class="secondary" class="item_link"/>
      <AppLink name-link="about" :name-path="appPath.About" name-class="secondary" class="item_link"/>
    </div>
    <div class="switchers">
      <ThemeSwitcher @click="changeTheme"/>
      <LangSwitcher/>
      <MyButton :name-class="['btn_collapsed', 'background_btn_inverted', 'square_btn', 'size-l']" @click-button="changeSideView">{{ MyLabel }}</MyButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import ThemeSwitcher from '@/widgets/themeSwitcher/ThemeSwitcher.vue'
import LangSwitcher from '@/widgets/langSwitcher/LangSwitcher.vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import AppLink from '@/shared/ui/AppLink/AppLink.vue'
import { RoutesPath } from '@/router/RoutesPath'

export default defineComponent({
  name: 'SideBar',
  components: { LangSwitcher, ThemeSwitcher, MyButton, AppLink },
  data () {
    return {}
  },
  created () {
    this.getThemeLocal()
    this.getCollapseLocal()
  },
  computed: {
    ...mapState(useGlobalStore, ['isCollapsed']),
    MyLabel (): string {
      return this.isCollapsed ? '>' : '<'
    },
    appPath ():Record<string, string> {
      return RoutesPath
    }
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeSideView', 'changeTheme', 'getThemeLocal', 'getCollapseLocal']),
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
.switchers {
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.collapsed {
  width: var(--sidebar-width-collapsed);
  .switchers {
    flex-direction: column;
    align-items: center;
  }
}
.btn_collapsed {
  position: absolute;
  right: -32px;
  bottom: 32px;
}
.items_container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.item_link {
  margin-top: 10px;
}

</style>
