<template>
  <div class="article_list" ref="articleListScrollPos">
    <ArticleListItem v-for="el in listArticles" :key="el.id" :article="el" :view="view"/>
    <ArticleListItemSkeleton v-if="isLoading" :view="view"/>
    <div v-intersection="{ element: this.$refs['intersection'], callback: myMethod }" style="width: 100%;height: 40px"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Article } from '@/entities/Article'
import ArticleListItem from '@/entities/Article/ui/ArticleListItem.vue'
import ArticleListItemSkeleton from '@/entities/Article/ui/ArticleListItemSkeleton.vue'
import { mapState, mapActions } from 'pinia'
import { useArticleStore } from '@/entities/Article/model/articleStore/ArticleStore'
import { ArticleStore } from '@/store'

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
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    const el = document.querySelector('.page_wrapper')
    if (el) el.scrollTop = ArticleStore.scrollNumber
  },
  computed: {
    ...mapState(useArticleStore, ['listArticles'])
  },
  methods: {
    ...mapActions(useArticleStore, ['addPage', 'getListArticle']),
    myMethod () {
      this.addPage()
      this.getListArticle()
    }
  }
})
</script>

<style scoped lang="scss">
.article_list {
  display: flex;
  flex-wrap: wrap;
}
</style>
