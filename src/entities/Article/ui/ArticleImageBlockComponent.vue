<template>
  <div class="image_container">
    <img :src="block.src" :alt="block.title" class="image">
    <TextApp :mods="{}" :name-class="['text_center']" :title="block.title" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ArticleImageBlock } from '@/entities/Article/model/articleTypes/article'
import TextApp from '@/shared/ui/textApp/TextApp.vue'

export default defineComponent({
  name: 'ArticleImageBlockComponent',
  components: { TextApp },
  props: {
    block: {
      type: Object as PropType<ArticleImageBlock>
    }
  },
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.image_container {
  margin: 20px 0;
}
.image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
</style>
