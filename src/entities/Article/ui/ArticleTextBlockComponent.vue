<template>
  <div>
    <TextApp :mods="{}" :name-class="['']" :title="block.title" class="text_title"/>
    <div v-for="(el, i) in block.paragraphs" :key="i">
      <TextApp :mods="{}" :name-class="['']" :text="el" class="text_text"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ArticleTextBlock } from '@/entities/Article/model/articleTypes/article'
import TextApp from '@/shared/ui/textApp/TextApp.vue'

export default defineComponent({
  name: 'ArticleTextBlockComponent',
  components: { TextApp },
  props: {
    block: {
      type: Object as PropType<ArticleTextBlock>
    }
  },
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.text_title {
  margin-bottom: 15px;
}
.text_text {
  margin-top: 8px;
}
</style>
