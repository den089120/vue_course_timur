<template>
  <nav :class="$ClassNames('nav_bar', {}, [nameClass])">
    <MyButton @click-button="openModal" :name-class="['clear_inverted']" :mods="{}"  >Войти</MyButton>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import { mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
export default defineComponent({
  name: 'NavBar',
  components: { MyButton },
  props: {
    nameClass: [String, Array]
  },
  methods: {
    ...mapActions(useGlobalStore, ['openModal'])
  }
})
</script>

<style lang="scss">
.nav_bar {
  height: var(--navbar-height);
  background: var(--inverted-bg-color);
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 20px;
}
</style>
