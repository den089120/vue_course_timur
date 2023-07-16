<template>
  <div class="article_details_container">
    <div v-if="isLoading">
      <Skeleton :mods="{}" :name-class="['details_avatar']" :border-radius="'50%'" :width="'200px'" :height="'200px'"/>
      <Skeleton :mods="{}" :name-class="['details_title']" :width="'300px'" :height="'32px'"/>
      <Skeleton :mods="{}" :name-class="['details_skeleton']" :width="'600px'" :height="'24px'"/>
      <Skeleton :mods="{}" :name-class="['details_skeleton']" :width="'100%'" :height="'200px'"/>
      <Skeleton :mods="{}" :name-class="['details_skeleton']" :width="'100%'" :height="'200px'"/>
    </div>
    <my-error-page v-else-if="error"/>
    <ArticleDetails v-else/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticleDetails from '@/entities/Article/ui/ArticleDetails.vue'
import { mapState } from 'pinia'
import { useArticleStore } from '@/entities/Article/model/articleStore/ArticleStore'
import MyErrorPage from '@/pages/myErrorPage/MyErrorPage.vue'
import Skeleton from '@/shared/ui/Skeleton/Skeleton.vue'

export default defineComponent({
  name: 'ArticleDetailsPage',
  components: { Skeleton, MyErrorPage, ArticleDetails },
  data () {
    return {
      // isLoading: true
    }
  },
  computed: {
    ...mapState(useArticleStore, ['isLoading', 'error'])
  }
})
</script>

<style lang="scss">
.article_details_container {
  min-height: 100%;
}
.details_avatar {
  margin: 0 auto;
}
.details_title {
  margin-top: 20px;
}
.details_skeleton {
  margin-top: 15px;
}

</style>
