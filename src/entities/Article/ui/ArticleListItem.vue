<template>
    <div v-if="view === viewArticle.BIG" class="article_list_item_big">
      <div class="card_big">
        <div class="header">
          <AvatarApp v-if="article.user.avatar" :mods="{}" :name-class="['']" :size="'30'" :src="article.user.avatar"/>
          <TextApp :mods="{}" :name-class="['']" :text="article.user.username" class="username"/>
          <TextApp :mods="{}" :name-class="['']" :text="article.createdAt" class="date"/>
        </div>
        <TextApp :mods="{}" :name-class="['']" :text="article.title" class="title"/>
        <TextApp :mods="{}" :name-class="['']" :text="article.type.join(', ')" class="types"/>
        <img :src="article.img" :alt="article.title" class="img_article"/>
        <ArticleTextBlockComponent v-if="firstBlock" :block="firstBlock" class="text_block" />
        <div class="footer">
          <MyButton :mods="{}" :name-class="['outline_btn']" @click="getArticle">{{$t('read_more')}}</MyButton>
          <TextApp :mods="{}" :name-class="['']" :text="String(article.views)" class="views"/>
        </div>
      </div>
    </div>
    <div v-else-if="view === viewArticle.SMALL" class="article_list_item_small">
      <div class="card" @click="getArticle">
        <div class="image_wrapper">
          <img :src="article.img" :alt="article.title" class="img_article"/>
          <TextApp :mods="{}" :name-class="['']" :text="article.createdAt" class="date"/>
        </div>
        <div class="info_wrapper">
          <TextApp :mods="{}" :name-class="['']" :text="article.type.join(', ')" class="types"/>
          <TextApp :mods="{}" :name-class="['']" :text="String(article.views)" class="views"/>
          <IconTemplate>
            <IconEye/>
          </IconTemplate>
        </div>
        <TextApp :mods="{}" :name-class="['']" :text="article.title" class="title"/>
      </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Article, ArticleView } from '@/entities/Article'
import TextApp from '@/shared/ui/textApp/TextApp.vue'
import IconTemplate from '@/shared/ui/iconComponents/IconTemplate.vue'
import IconEye from '@/shared/ui/iconComponents/icons/IconEye.vue'
import AvatarApp from '@/shared/ui/Avatar/AvatarApp.vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import ArticleTextBlockComponent from '@/entities/Article/ui/ArticleTextBlockComponent.vue'
import { ArticleStore } from '@/store'
import { RoutesPath } from '@/router/RoutesPath'

export default defineComponent({
  name: 'ArticleListItem',
  components: { ArticleTextBlockComponent, IconEye, IconTemplate, TextApp, AvatarApp, MyButton },
  props: {
    isLoading: {
      type: Boolean
    },
    article: {
      type: Object as PropType<Article>
    },
    view: {
      type: String
      // type: Object as PropType<ArticleView>
    }
  },
  data () {
    return {}
  },
  computed: {
    viewArticle () {
      return ArticleView
    },
    firstBlock () {
      return this.article?.blocks.find(el => el.type === 'TEXT')
    }
  },
  methods: {
    getArticle () {
      if (this.article) {
        ArticleStore.setId(this.article?.id)
        this.$router.push({ path: RoutesPath.Articles_details })
      }
    }
  }
})
</script>

<style lang="scss">
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
.article_list_item_big {
  margin-bottom: 30px;
  width: 90%;
  .card_big {
    .header {
      display: flex;
      align-items: center;
      .username {
        margin-left: 8px;
      }
      .date {
        margin-left: auto;
      }
    }
    .title {
      margin-top: 8px;
      text-align: left;
    }
    .types {
      text-align: left;
    }
    .img_article {
      width: 100%;
      max-height: 250px;
      object-fit: cover;
      margin: 16px 0;
    }
    .text_block {
      max-height: 200px;
      overflow-y: hidden;
    }
    .footer {
      display: flex;
      align-items: center;
      margin-top: 16px;
      .views {
        margin-left: auto;
      }
    }
  }
}

</style>
