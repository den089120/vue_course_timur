<template>
  <div class="article_list_switcher">
    <SelectApp
      :name-class="['']"
      :mods="{}"
      :options="ascOrDescList"
      :selected-item="ascOrDesc"
      @select-value="changeAscOrDesc"
      :is-i18n="true"
    />
    <SelectApp
      :name-class="['']"
      :mods="{}"
      :options="sortOptions"
      :selected-item="sortOption"
      @select-value="changeSortOption"
      :is-i18n="true"
    />
    <SelectApp
      :name-class="['']"
      :mods="{}"
      :options="sortListType"
      :selected-item="sortType"
      @select-value="changeSortType"
      :is-i18n="true"
    />
    <InputApp
      type-input="text"
      v-model:textInput="searchString"
      :mods="{}"
      :name-class="['login_input']"
      :place-holder="$t('Search')"
      @input="setStr"
    />
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
import SelectApp from '@/shared/ui/selectApp/SelectApp.vue'
import { SelectOptionType } from '@/shared/ui/selectApp/selectOptionType'
import { SortAscOrDescList, SortListOptions, SortTypeList } from '@/entities/sortLists'
import InputApp from '@/shared/ui/inputApp/inputApp.vue'
import { useArticleStore } from '@/entities/Article/model/articleStore/ArticleStore'
import { useDebounceFn } from '@vueuse/core'
import { ArticleStore } from '@/store'

export default defineComponent({
  name: 'ArticleListSwitcher',
  components: { InputApp, SelectApp, IconListMenu, IconPlitka, IconTemplate, MyButton },
  data () {
    return {
      ascOrDesc: ArticleStore.ascOrDesc,
      sortOption: ArticleStore.sortOption,
      searchString: ArticleStore.searchString,
      sortType: ArticleStore.sortType
    }
  },
  setup () {
    const setStr = useDebounceFn(() => {
      ArticleStore.getArticlesForSearch()
    }, 1500, { maxWait: 2500 })
    return { setStr }
  },
  computed: {
    ...mapState(useGlobalStore, ['isDark', 'isListArticles']),
    colors ():Record<string, string> {
      return ColorIcons
    },
    ascOrDescList (): Array<SelectOptionType> {
      return SortAscOrDescList()
    },
    sortOptions (): Array<SelectOptionType> {
      return SortListOptions()
    },
    sortListType (): Array<SelectOptionType> {
      return SortTypeList()
    }
  },
  watch: {
    searchString (newValue) {
      this.setSearchString(newValue)
    }
  },
  methods: {
    ...mapActions(useGlobalStore, ['listArticlesIs', 'removeListArticles']),
    ...mapActions(useArticleStore, ['setAscOrDesc', 'setSortOption', 'setSearchString', 'setSortType', 'getArticlesForSearch']),
    changeAscOrDesc (name: string) {
      this.ascOrDesc = name
      this.setAscOrDesc(name)
      this.getArticlesForSearch()
    },
    changeSortOption (name: string) {
      this.sortOption = name
      this.setSortOption(name)
      this.getArticlesForSearch()
    },
    changeSortType (name: string) {
      this.sortType = name
      this.setSortType(name)
      this.getArticlesForSearch()
    }
  }
})
</script>

<style scoped lang="scss">
.article_list_switcher {
  display: flex;
  margin-bottom: 10px;
  gap: 15px;
  .btn {
    margin-right: 10px;
  }
}
</style>
