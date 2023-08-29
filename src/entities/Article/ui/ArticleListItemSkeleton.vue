<template>
    <div v-if="view === viewArticle.BIG" class="article_list_item_big">
      <div class="card_big">
        <div class="header">
          <Skeleton :border-radius="'50%'" :width="'30px'" :height="'30px'" :mods="{}" :name-class="['']"/>
          <Skeleton :width="'150px'" :height="'16px'" :mods="{}" :name-class="['']" class="username"/>
          <Skeleton :width="'150px'" :height="'16px'" :mods="{}" :name-class="['']" class="date"/>
        </div>
        <Skeleton :width="'250px'" :height="'24px'" :mods="{}" :name-class="['']" class="title"/>
        <Skeleton :height="'200px'" :mods="{}" :name-class="['']" class="img_article"/>
        <div class="footer">
          <Skeleton :width="'200px'" :height="'36px'" :mods="{}" :name-class="['']"/>
        </div>
      </div>
    </div>
    <div v-else-if="view === viewArticle.SMALL" class="article_list_item_small" v-for="(index, ) in 12" :key="index">
      <div class="card">
        <div class="image_wrapper">
          <Skeleton :width="'200px'" :height="'200px'" class="img_article" :mods="{}" :name-class="['']"/>
        </div>
        <div class="info_wrapper">
          <Skeleton :width="'130px'" :height="'16px'" :mods="{}" :name-class="['']"/>
        </div>
        <Skeleton :width="'150px'" :height="'16px'" class="title" :mods="{}" :name-class="['']"/>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Skeleton from '@/shared/ui/Skeleton/Skeleton.vue'
import { ArticleView } from '@/entities/Article'

export default defineComponent({
  name: 'ArticleListItemSkeleton',
  props: {
    isLoading: {
      type: Boolean
    },
    view: {
      type: String
      // type: Object as PropType<ArticleView>
    }
  },
  components: { Skeleton },
  data () {
    return {}
  },
  computed: {
    viewArticle () {
      return ArticleView
    }
  }
})
</script>

<style scoped lang="scss">
.article_list_item_small {
  width: 230px;
  margin-right: 30px;
  margin-bottom: 30px;
  .image_wrapper {
    width: 200px;
    height: 200px;
    position: relative;
    .img_article {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
  .title {
    margin-top: 8px;
  }
}

</style>
