<template>
  <div :class="clonFunc('lang_switcher', {}, [''])">
    <div>язык</div>
    <select v-model="selectLang">
      <option value="ru" selected>Русский</option>
      <option value="en">English</option>
      <option value="zh">中国人</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import { classNames, Mods } from '@/shared/lib/classNames/classNames'
export default defineComponent({
  name: 'LangSwitcher',
  data () {
    return {
      selectLang: ''
    }
  },
  watch: {
    selectLang (newLang) {
      this.changeLang(newLang)
    }
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeLang']),
    clonFunc (cls: string, mods: Mods, additional: Array<string>): string {
      return classNames(cls, mods, additional)
    }
  }
})
</script>

<style scoped lang="scss">
.lang_switcher {
  display: flex;
  select {
    outline: none;
    border: none;
    background: var(--inverted-bg-color);
    margin-left: 10px;
    color: var(--primary-color);
  }
}
</style>
