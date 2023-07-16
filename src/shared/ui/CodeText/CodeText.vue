<template>
  <pre :class="$ClassNames('text_code', mods, [...nameClass])">
    <MyButton :mods="{}" :name-class="['clear']" class="code_btn" @click="copyText">
      <IconCopies :icon-color="isDark? colors.inverted_primary_color : colors.d_inverted_primary_color"/>
    </MyButton>
    <code>
      {{ text }}
    </code>
  </pre>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Mods } from '@/shared/lib/plugins/ClassNames'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import IconCopies from '@/shared/ui/iconComponents/icons/IconCopies.vue'
import { ColorIcons } from '@/shared/ui/iconComponents/ColorForIcons'
import { mapState } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'

export default defineComponent({
  name: 'CodeText',
  components: { IconCopies, MyButton },
  props: {
    text: {
      type: String
    },
    nameClass: [String, Array],
    mods: {
      type: Object as PropType<Mods>
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(useGlobalStore, ['isDark']),
    colors ():Record<string, string> {
      return ColorIcons
    }
  },
  methods: {
    copyText () {
      if (this.text) navigator.clipboard.writeText(this.text)
    }
  }
})
</script>

<style scoped lang="scss">
.text_code {
  display: block;
  border: 1px solid var(--primary-color);
  padding: 20px;
  position: relative;
  background: var(--code-bg);
  overflow: auto;
}
.code_btn {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
