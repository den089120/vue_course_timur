<template>
  <div :class="$ClassNames('lang_switcher', {}, [''])">
    <select v-model="selectLang">
      <option value="ru" selected>{{ isCollapsed ? 'Ру' : 'Русский' }}</option>
      <option value="en">{{ isCollapsed ? 'En' : 'English' }}</option>
      <option value="zh">中国人</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
export default defineComponent({
  name: 'LangSwitcher',
  data () {
    return {
      selectLang: 'ru'
    }
  },
  watch: {
    selectLang (newLang) {
      this.changeLang(newLang)
    }
  },
  computed: {
    ...mapState(useGlobalStore, ['isCollapsed'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeLang'])
  }
})
</script>

<style scoped lang="scss">
.lang_switcher {
  display: flex;
  select {
    outline: none;
    border: none;
    appearance: none;
    background: var(--inverted-bg-color);
    margin-left: 10px;
    color: var(--primary-color);
    cursor: pointer;
  }
}
</style>
