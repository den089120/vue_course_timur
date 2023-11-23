<template>
  <div>
    <MyButton :mods="{}" :name-class="['outline_btn']" @click="getArticleList" class="back_btn">{{$t('back_to_articles')}}</MyButton>
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
    <span class="recommendation_header">{{ $t('recommendation_articles') }}</span>
    <div class="recommendation_list">
      <div v-for="el in miniListArticle" :key="el.id" class="article_list_item_small">
        <div class="card" @click="getArticle(el.id)">
          <div class="image_wrapper">
            <img :src="el.img" :alt="el.title" class="img_article"/>
            <TextApp :mods="{}" :name-class="['']" :text="el.createdAt" class="date"/>
          </div>
          <div class="info_wrapper">
            <TextApp :mods="{}" :name-class="['']" :text="el.type.join(', ')" class="types"/>
            <TextApp :mods="{}" :name-class="['']" :text="String(el.views)" class="views"/>
            <IconTemplate>
              <IconEye/>
            </IconTemplate>
          </div>
          <TextApp :mods="{}" :name-class="['']" :text="el.title" class="title"/>
        </div>
      </div>
    </div>
    <asyncNewCommentForm/>
    <TextApp :mods="{}" :name-class="['text_start']" :title="$t('comments')" class="comment_title"/>
    <CommentList :comments="getComList()" :is-loading="isLoading"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AvatarApp from '@/shared/ui/Avatar/AvatarApp.vue'
import { mapState } from 'pinia'
import { useArticleStore } from '@/entities/Article/model/articleStore/ArticleStore'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import { ArticleStore, CommentStoreORM } from '@/store'
import TextApp from '@/shared/ui/textApp/TextApp.vue'
import IconTemplate from '@/shared/ui/iconComponents/IconTemplate.vue'
import IconEye from '@/shared/ui/iconComponents/icons/IconEye.vue'
import { Article, ArticleBlockType } from '@/entities/Article/model/articleTypes/article'
import { ColorIcons } from '@/shared/ui/iconComponents/ColorForIcons'
import IconCalendar1 from '@/shared/ui/iconComponents/icons/IconCalendar_1.vue'
import ArticleCodeBlockComponent from '@/entities/Article/ui/ArticleCodeBlockComponent.vue'
import ArticleImageBlockComponent from '@/entities/Article/ui/ArticleImageBlockComponent.vue'
import ArticleTextBlockComponent from '@/entities/Article/ui/ArticleTextBlockComponent.vue'
import CommentList from '@/entities/Comment/ui/CommentList.vue'
import { asyncNewCommentForm } from '@/shared/lib/asyncComponents'
import { useCommentStore } from '@/entities/Comment/model/Store/CommentStore'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import { RoutesPath } from '@/router/RoutesPath'

export default defineComponent({
  name: 'ArticleDetails',
  components: {
    CommentList,
    asyncNewCommentForm,
    ArticleTextBlockComponent,
    ArticleImageBlockComponent,
    ArticleCodeBlockComponent,
    TextApp,
    AvatarApp,
    IconTemplate,
    IconEye,
    IconCalendar1,
    MyButton
  },
  data () {
    return {
      miniListArticle: [] as Array<Article>,
      idArticle: ''
    }
  },
  created () {
    ArticleStore.getArticlesMini().then(res => {
      const dat = res?.data
      if (dat) this.miniListArticle = dat
    })
  },
  computed: {
    ...mapState(useArticleStore, ['data']),
    ...mapState(useGlobalStore, ['isDark']),
    ...mapState(useCommentStore, ['isLoading']),
    colors ():Record<string, string> {
      return ColorIcons
    },
    blockType () {
      return ArticleBlockType
    }
  },
  methods: {
    getComList () {
      if (this.data) {
        return CommentStoreORM.where('articlesId', this.data?.id).get()
      }
    },
    getArticleList () {
      this.$router.push({ path: RoutesPath.Articles })
    },
    getArticle (id: string) {
      console.log(this.miniListArticle.find(el => el.id === id))
      const el = this.miniListArticle.find(el => el.id === id)
      if (el) {
        ArticleStore.setArticle(el)
        const elem = document.querySelector('.page_wrapper')
        if (elem) elem.scrollTop = 0
      }
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
.comment_title {
  margin-top: 20px;
}
.back_btn {
  display: block;
}
.recommendation_header {
  font-size: 22px;
  display: block;
  margin: 15px 0;
}
.recommendation_list {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .article_list_item_small {
    width: 230px;
    transition: 0.2s;
    cursor: pointer;
    margin-right: 30px;
    margin-bottom: 30px;
    .card {
      padding: 15px;
      border-radius: 12px;
      background: var(--card-bg);
      .image_wrapper {
        width: 200px;
        height: 200px;
        position: relative;
        .img_article {
          width: 200px;
          height: 200px;
          object-fit: cover;
        }
        .date {
          position: absolute;
          right: 0;
          top: 0;
          display: none;
        }
      }
      .info_wrapper {
        display: flex;
        align-items: center;
        margin-top: 8px;
        .types {
          width: 115px;
          span {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .views {
          margin-left: auto;
          margin-right: 8px;
        }
      }
      .title {
        margin-top: 8px;
        span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    &:hover {
      .card {
        .image_wrapper {
          .date {
            display: block;
          }
        }
      }
      opacity: 0.8;
      transform: scale(1.01);
    }
  }
}
</style>
