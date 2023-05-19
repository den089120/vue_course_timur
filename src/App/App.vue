<template>
  <div :class="$ClassNames('app', {dark: isDark, light: !isDark}, [])">
    <NavBar/>
    <div class="content_page">
      <SideBar/>
        <VErrorBoundary :fall-back="myFallBack">
          <router-view class="page_wrapper"/>
        </VErrorBoundary>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import NavBar from '@/widgets/navBar/NavBar.vue'
import SideBar from '@/widgets/sideBar/SideBar.vue'
import MyErrorPage from '@/pages/myErrorPage/MyErrorPage.vue'
import VErrorBoundary from 'vue-error-boundary'
import { UserStore } from '@/store'
export default defineComponent({
  name: 'App',
  components: { SideBar, NavBar, VErrorBoundary },
  data () {
    return {
      myFallBack: MyErrorPage
    }
  },
  created () {
    UserStore.initUser()
  },
  computed: {
    ...mapState(useGlobalStore, ['isDark'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeTheme', 'getThemeLocal', 'getCollapseLocal'])
  }
})
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
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
