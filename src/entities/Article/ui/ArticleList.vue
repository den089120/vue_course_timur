<template>
  <div class="article_list">
    <ArticleListItemSkeleton v-if="isLoading" :view="view" />
    <ArticleListItem v-else v-for="el in listArticles" :key="el.id" :article="el" :view="view"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Article } from '@/entities/Article'
import ArticleListItem from '@/entities/Article/ui/ArticleListItem.vue'
import ArticleListItemSkeleton from '@/entities/Article/ui/ArticleListItemSkeleton.vue'
import { mapState } from 'pinia'
import { useArticleStore } from '@/entities/Article/model/articleStore/ArticleStore'

export default defineComponent({
  name: 'ArticleList',
  components: { ArticleListItemSkeleton, ArticleListItem },
  props: {
    isLoading: {
      type: Boolean
    },
    articles: {
      type: Array as PropType<Array<Article>>
    },
    view: {
      type: String
      // type: Object as PropType<ArticleView>
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(useArticleStore, ['listArticles'])
  }
})
</script>

<style scoped lang="scss">
.article_list {
  display: flex;
  flex-wrap: wrap;
}
</style>
