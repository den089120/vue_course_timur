<template>
  <div>
    <div class="avatar_wrapper">
      <AvatarApp :mods="{}" :name-class="['']" :size="'200'" :alt="$t('avatar')" :src="data.img"/>
    </div>
    <TextApp :mods="{}" :name-class="['article_text_title']" :title="data.title" :text="data.subtitle"/>
    <div class="article_info">
      <IconTemplate :width="20" :height="20" :icon-color="isDark? colors.d_inverted_primary_color : colors.inverted_primary_color" class="icons">
        <IconEye/>
      </IconTemplate>
      <TextApp :mods="{}" :name-class="['']" :text="`${data.views}`"/>
    </div>
    <div class="article_info">
      <IconCalendar1 :height-icon="'20px'" :width-icon="'20px'" :icon-color="isDark? colors.d_inverted_primary_color : colors.inverted_primary_color" class="icons"/>
      <TextApp :mods="{}" :name-class="['']" :text="data.createdAt"/>
    </div>
    <div v-for="el in data.blocks" :key="el.id">
      <ArticleCodeBlockComponent v-if="el.type === blockType.CODE" :block="el" class="articles_blocks"/>
      <ArticleImageBlockComponent v-if="el.type === blockType.IMAGE" :block="el" class="articles_blocks"/>
      <ArticleTextBlockComponent v-if="el.type === blockType.TEXT" :block="el" class="articles_blocks"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AvatarApp from '@/shared/ui/Avatar/AvatarApp.vue'
import { mapState } from 'pinia'
import { useArticleStore } from '@/entities/Article/model/articleStore/ArticleStore'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import TextApp from '@/shared/ui/textApp/TextApp.vue'
import IconTemplate from '@/shared/ui/iconComponents/IconTemplate.vue'
import IconEye from '@/shared/ui/iconComponents/icons/IconEye.vue'
import { ArticleBlockType } from '@/entities/Article/model/articleTypes/article'
import { ColorIcons } from '@/shared/ui/iconComponents/ColorForIcons'
import IconCalendar1 from '@/shared/ui/iconComponents/icons/IconCalendar_1.vue'
import ArticleCodeBlockComponent from '@/entities/Article/ui/ArticleCodeBlockComponent.vue'
import ArticleImageBlockComponent from '@/entities/Article/ui/ArticleImageBlockComponent.vue'
import ArticleTextBlockComponent from '@/entities/Article/ui/ArticleTextBlockComponent.vue'

export default defineComponent({
  name: 'ArticleDetails',
  components: { ArticleTextBlockComponent, ArticleImageBlockComponent, ArticleCodeBlockComponent, TextApp, AvatarApp, IconTemplate, IconEye, IconCalendar1 },
  data () {
    return {}
  },
  computed: {
    ...mapState(useArticleStore, ['data']),
    ...mapState(useGlobalStore, ['isDark']),
    colors ():Record<string, string> {
      return ColorIcons
    },
    blockType () {
      return ArticleBlockType
    }
  }
})
</script>

<style lang="scss">
.article_info {
  display: flex;
  align-items: center;
}
.icons {
  margin-right: 8px;
}
.avatar_wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
.article_text_title{
  align-items: start;
}
.articles_blocks {
  margin-top: 16px;
  text-align: start;
}
</style>
