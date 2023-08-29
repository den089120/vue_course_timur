<template>
  <div>
    <ArticleListSwitcher/>
    <ArticleList :view="isListArticles" :is-loading="isLoading"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticleList from '@/entities/Article/ui/ArticleList.vue'
import { ArticleView } from '@/entities/Article'
import { ArticleStore } from '@/store'
import { mapState } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import ArticleListSwitcher from '@/widgets/ArticleListSwitcher/ArticleListSwitcher.vue'

export default defineComponent({
  name: 'ArticlesPage',
  components: { ArticleListSwitcher, ArticleList },
  data () {
    return {}
  },
  computed: {
    viewArticle () {
      return ArticleView
    },
    isLoading () {
      return ArticleStore.isLoading
    },
    ...mapState(useGlobalStore, ['isListArticles'])
  }
})
</script>

<style scoped lang="scss">

</style>
