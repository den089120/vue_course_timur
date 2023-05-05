<template>
  <div :class="$ClassNames('side_bar', {collapsed: isCollapsed}, [])">
    <div :class="$ClassNames('items_container', {}, [])">
      <div >
        <AppLink class="link_container" name-link="main" :name-path="appPath.Main" :name-class="[]" :class-span="['invert_primary',{'short': isCollapsed}]">
          <IconTemplate :icon-color="isDark? colors.d_inverted_primary_color : colors.inverted_primary_color">
            <IconHome/>
          </IconTemplate>
        </AppLink>
      </div>
      <div>
        <AppLink class="link_container" name-link="about" :name-path="appPath.About" :name-class="[]" :class-span="['invert_primary',{'short': isCollapsed}]">
          <IconTemplate :icon-color="isDark? colors.d_inverted_primary_color : colors.inverted_primary_color">
            <IconAbout/>
          </IconTemplate>
        </AppLink>
      </div>
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
import ThemeSwitcher from '@/widgets/themeSwitcher/ThemeSwitcher.vue'
import LangSwitcher from '@/widgets/langSwitcher/LangSwitcher.vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import AppLink from '@/shared/ui/AppLink/AppLink.vue'
import { RoutesPath } from '@/router/RoutesPath'
import { ColorIcons } from '@/shared/ui/iconComponents/ColorForIcons'
import IconHome from '@/shared/ui/iconComponents/icons/IconHome.vue'
import IconAbout from '@/shared/ui/iconComponents/icons/IconAbout.vue'
import IconTemplate from '@/shared/ui/iconComponents/IconTemplate.vue'

export default defineComponent({
  name: 'SideBar',
  components: { IconTemplate, IconAbout, IconHome, LangSwitcher, ThemeSwitcher, MyButton, AppLink },
  data () {
    return {}
  },
  created () {
    this.getThemeLocal()
    this.getCollapseLocal()
  },
  computed: {
    ...mapState(useGlobalStore, ['isCollapsed', 'isDark']),
    MyLabel (): string {
      return this.isCollapsed ? '>' : '<'
    },
    appPath ():Record<string, string> {
      return RoutesPath
    },
    colors ():Record<string, string> {
      return ColorIcons
    }
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeSideView', 'changeTheme', 'getThemeLocal', 'getCollapseLocal'])
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
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}
//.item_link {
//  margin-left: 10px;
//}
.icon_link {
  fill: var(--primary-color);
}
.link_container {
  display: flex;
  align-items: center;
}

</style>
