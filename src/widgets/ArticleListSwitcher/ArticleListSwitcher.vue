<template>
  <div class="article_list_switcher">
    <MyButton :mods="{clear_inverted: !isListArticles}" :name-class="['clear']" @click="removeListArticles" class="btn">
      <IconTemplate :icon-color="isDark? colors.d_inverted_primary_color : colors.inverted_primary_color">
        <IconPlitka/>
      </IconTemplate>
    </MyButton>
    <MyButton :mods="{clear_inverted: isListArticles}" :name-class="['clear']" @click="listArticlesIs">
      <IconListMenu :height-icon="'20px'" :width-icon="'20px'" :icon-color="isDark? colors.d_inverted_primary_color : colors.inverted_primary_color"/>
    </MyButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconTemplate from '@/shared/ui/iconComponents/IconTemplate.vue'
import IconPlitka from '@/shared/ui/iconComponents/icons/IconPlitka.vue'
import { ColorIcons } from '@/shared/ui/iconComponents/ColorForIcons'
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
import IconListMenu from '@/shared/ui/iconComponents/icons/IconListMenu.vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'

export default defineComponent({
  name: 'ArticleListSwitcher',
  components: { IconListMenu, IconPlitka, IconTemplate, MyButton },
  data () {
    return {}
  },
  computed: {
    ...mapState(useGlobalStore, ['isDark', 'isListArticles']),
    colors ():Record<string, string> {
      return ColorIcons
    }
  },
  methods: {
    ...mapActions(useGlobalStore, ['listArticlesIs', 'removeListArticles'])
  }
})
</script>

<style scoped lang="scss">
.article_list_switcher {
  display: flex;
  margin-bottom: 10px;
  .btn {
    margin-right: 10px;
  }
}
</style>
