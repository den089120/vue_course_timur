<template>
  <CodeText :mods="{}" :name-class="['']" :text="block.code"/>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ArticleCodeBlock } from '@/entities/Article/model/articleTypes/article'
import CodeText from '@/shared/ui/CodeText/CodeText.vue'
import { ColorIcons } from '@/shared/ui/iconComponents/ColorForIcons'

export default defineComponent({
  name: 'ArticleCodeBlockComponent',
  components: { CodeText },
  props: {
    block: {
      type: Object as PropType<ArticleCodeBlock>
    }
  },
  data () {
    return {}
  },
  computed: {
    colors ():Record<string, string> {
      return ColorIcons
    }
  }
})
</script>

<style scoped lang="scss">

</style>
