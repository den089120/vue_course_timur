<template>
  <MyButton :name-class="['clear']" :class="$ClassNames('btn_switcher', mods, [nameClass])">
    <img v-if="isDark" src="icons/theme-dark_1.svg" alt=""/>
    <img v-else src="icons/theme-light_1.svg" alt=""/>
  </MyButton>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { mapState } from 'pinia'
import { Mods } from '@/shared/lib/plugins/ClassNames'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import MyButton from '@/shared/ui/myButton/MyButton.vue'

export default defineComponent({
  name: 'ThemeSwitcher',
  components: { MyButton },
  props: {
    nameClass: [String, Array],
    nameLink: String,
    mods: {
      type: Object as PropType<Mods>
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(useGlobalStore, ['isDark'])
  }
})
</script>

<style scoped lang="scss">
.btn_switcher {

}
</style>
