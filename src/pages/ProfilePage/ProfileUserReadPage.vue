<template>
  <div :class="$ClassNames('profile_container', {}, [])">
    <AvatarApp v-if="data.avatar" :src="data.avatar" :alt="'user avatar'" :size="'150'" :name-class="['profile_avatar']" :mods="{}"/>
    <div class="profile_header">
      <TextApp :title="$t('Profile')" :mods="{}" :name-class="['text_center']"/>
    </div>
    <div class="profile_data">
      <div class="profile_data_item">
        <TextApp :text="$t('First_name')" :mods="{}" :name-class="['text_start']"/>
        <TextApp :text="data.firstname" :mods="{}" :name-class="['text_start']"/>
      </div>
      <div class="profile_data_item">
        <TextApp :text="$t('Last_name')" :mods="{}" :name-class="['text_start']"/>
        <TextApp :text="data.lastname" :mods="{}" :name-class="['text_start']"/>
      </div>
      <div class="profile_data_item">
        <TextApp :text="$t('Age')" :mods="{}" :name-class="['text_start']"/>
        <TextApp :text="data.age" :mods="{}" :name-class="['text_start']"/>
      </div>
      <div class="profile_data_item">
        <TextApp :text="$t('Currency')" :mods="{}" :name-class="['text_start']"/>
        <TextApp :text="data.currency" :mods="{}" :name-class="['text_start']"/>
      </div>
      <div class="profile_data_item">
        <TextApp :text="$t('Country')" :mods="{}" :name-class="['text_start']"/>
        <TextApp :text="data.country" :mods="{}" :name-class="['text_start']"/>
      </div>
      <div class="profile_data_item">
        <TextApp :text="$t('username')" :mods="{}" :name-class="['text_start']"/>
        <TextApp :text="data.username" :mods="{}" :name-class="['text_start']"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AvatarApp from '@/shared/ui/Avatar/AvatarApp.vue'
import TextApp from '@/shared/ui/textApp/TextApp.vue'
import { mapState } from 'pinia'
import { useProfileUserReadStore } from '@/entities/Profile/model/profileStore/ProfileUserReadStore'

export default defineComponent({
  name: 'ProfileUserReadPage',
  components: { AvatarApp, TextApp },
  data () {
    return {
      readonly: true
    }
  },
  computed: {
    ...mapState(useProfileUserReadStore, ['data'])
  }
})
</script>

<style scoped lang="scss">
.profile_header {
  display: flex;
  justify-content: center;
}
.profile_data {}
.profile_data_item{
  display: flex;
  justify-content: space-evenly;
}
</style>
