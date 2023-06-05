<template>
  <div v-if="data" :class="$ClassNames('profile_container', {}, [])">
    <AvatarApp v-if="avatar" :src="avatar" :alt="'user avatar'" :size="'150'" :name-class="['profile_avatar']" :mods="{}"/>
    <div class="profile_header">
      <TextApp :title="$t('Profile')" :mods="{}" :name-class="['']"/>
      <MyButton v-if="readonly" :name-class="['outline_btn', 'profile_edit_btn']" :mods="{}" @click="removeReadonly">{{ $t('edit_profile') }}</MyButton>
      <div v-else class="profile_edit_btn">
        <MyButton :name-class="['outline_btn_danger', 'profile_cancel_btn']" :mods="{}" @click="cancelProfile">{{ $t('cancel') }}</MyButton>
        <MyButton :name-class="['outline_btn']" :mods="{btn_disabled: isDisabled}" @click="upDate" :disabled-is="isDisabled" >{{ $t('save') }}</MyButton>
      </div>
    </div>
    <div class="profile_data">
      <InputApp type-input="text"
                v-model:textInput="firstname"
                :mods="{input_read: readonly}"
                :readonly-is="readonly"
                :name-class="['login_input']"
                :place-holder="$t('First_name')"
      />
      <TextApp v-if="errorValid.isFirstname" :name-class="['error text']" :mods="{}" :text="$t('Error_field')" />
      <InputApp type-input="text"
                v-model:textInput="lastname"
                :mods="{input_read: readonly}"
                :readonly-is="readonly"
                :name-class="['login_input']"
                :place-holder="$t('Last_name')"
      />
      <TextApp v-if="errorValid.isLastname" :name-class="['error text']" :mods="{}" :text="$t('Error_field')" />
      <InputApp type-input="text"
                v-model:textInput="age"
                :mods="{input_read: readonly}"
                :readonly-is="readonly"
                :name-class="['login_input']"
                :place-holder="$t('Age')"
      />
      <TextApp v-if="errorValid.isAge" :name-class="['error text']" :mods="{}" :text="$t('Error_field')" />
      <SelectApp :readonly-is="readonly"
                 :label="$t('Currency')"
                 :name-class="['']"
                 :mods="{}"
                 :options="currencyList"
                 :selected-item="currency"
                 @select-value="changeCurrency"
      />
      <SelectApp :readonly-is="readonly"
                 :selected-item="country"
                 :options="countryList"
                 :mods="{}"
                 :name-class="['']"
                 :label="$t('Country')"
                 @select-value="changeCountry"
      />
      <InputApp type-input="text"
                v-model:textInput="username"
                :mods="{input_read: readonly}"
                :readonly-is="readonly"
                :name-class="['login_input']"
                :place-holder="$t('username')"
      />
      <TextApp v-if="errorValid.isUsername" :name-class="['error text']" :mods="{}" :text="$t('Error_field')" />
      <InputApp type-input="text"
                v-model:textInput="avatar"
                :mods="{input_read: readonly}"
                :readonly-is="readonly"
                :name-class="['login_input']"
                :place-holder="$t('avatar')"
      />
      <TextApp v-if="errorValid.isAvatar" :name-class="['error text']" :mods="{}" :text="$t('Error_field')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { ProfileSchema, useProfileStore } from '@/entities/Profile'
import { ProfileStore } from '@/store'
import TextApp from '@/shared/ui/textApp/TextApp.vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import InputApp from '@/shared/ui/inputApp/inputApp.vue'
import AvatarApp from '@/shared/ui/Avatar/AvatarApp.vue'
import SelectApp from '@/shared/ui/selectApp/SelectApp.vue'
import { SelectOptionType } from '@/shared/ui/selectApp/selectOptionType'
import { CurrencyListOption } from '@/entities/Currency'
import { CountryListOption } from '@/entities/Country'

export default defineComponent({
  name: 'ProfilePage',
  components: { SelectApp, AvatarApp, InputApp, TextApp, MyButton },
  data () {
    return {
      firstname: ProfileStore.data?.firstname,
      lastname: ProfileStore.data?.lastname,
      age: ProfileStore.data?.age,
      currency: ProfileStore.data?.currency,
      country: ProfileStore.data?.country,
      username: ProfileStore.data?.username,
      avatar: ProfileStore.data?.avatar,
      isDisabled: false,
      errorValid: {
        isFirstname: false,
        isLastname: false,
        isAge: false,
        isUsername: false,
        isAvatar: false
      }
    }
  },
  created () {
    this.getProfile()
  },
  computed: {
    ...mapState(useProfileStore, ['data', 'readonly']),
    currencyList (): Array<SelectOptionType> {
      return CurrencyListOption()
    },
    countryList (): Array<SelectOptionType> {
      return CountryListOption()
    }
  },
  watch: {
    firstname (newValue) {
      if (newValue === '') {
        this.errorValid.isFirstname = true
      } else {
        this.errorValid.isFirstname = false
      }
      if (this.errorValid.isAge || this.errorValid.isLastname || this.errorValid.isAvatar || this.errorValid.isUsername || this.errorValid.isFirstname) this.isDisabled = true
      if (!this.errorValid.isAge && !this.errorValid.isLastname && !this.errorValid.isAvatar && !this.errorValid.isUsername && !this.errorValid.isFirstname) this.isDisabled = false
    },
    lastname (newValue) {
      if (newValue === '') {
        this.errorValid.isLastname = true
      } else {
        this.errorValid.isLastname = false
      }
      if (this.errorValid.isAge || this.errorValid.isLastname || this.errorValid.isAvatar || this.errorValid.isUsername || this.errorValid.isFirstname) this.isDisabled = true
      if (!this.errorValid.isAge && !this.errorValid.isLastname && !this.errorValid.isAvatar && !this.errorValid.isUsername && !this.errorValid.isFirstname) this.isDisabled = false
    },
    age (newValue) {
      if (newValue === '') {
        this.errorValid.isAge = true
      } else {
        this.errorValid.isAge = false
      }
      if (this.errorValid.isAge || this.errorValid.isLastname || this.errorValid.isAvatar || this.errorValid.isUsername || this.errorValid.isFirstname) this.isDisabled = true
      if (!this.errorValid.isAge && !this.errorValid.isLastname && !this.errorValid.isAvatar && !this.errorValid.isUsername && !this.errorValid.isFirstname) this.isDisabled = false
    },
    username (newValue) {
      if (newValue === '') {
        this.errorValid.isUsername = true
      } else {
        this.errorValid.isUsername = false
      }
      if (this.errorValid.isAge || this.errorValid.isLastname || this.errorValid.isAvatar || this.errorValid.isUsername || this.errorValid.isFirstname) this.isDisabled = true
      if (!this.errorValid.isAge && !this.errorValid.isLastname && !this.errorValid.isAvatar && !this.errorValid.isUsername && !this.errorValid.isFirstname) this.isDisabled = false
    },
    avatar (newValue) {
      if (newValue === '') {
        this.errorValid.isAvatar = true
      } else {
        this.errorValid.isAvatar = false
      }
      if (this.errorValid.isAge || this.errorValid.isLastname || this.errorValid.isAvatar || this.errorValid.isUsername || this.errorValid.isFirstname) this.isDisabled = true
      if (!this.errorValid.isAge && !this.errorValid.isLastname && !this.errorValid.isAvatar && !this.errorValid.isUsername && !this.errorValid.isFirstname) this.isDisabled = false
    }
  },
  methods: {
    ...mapActions(useProfileStore, ['getProfile', 'removeReadonly', 'addReadonly', 'updateProfile']),
    changeCurrency (name: string) {
      this.currency = name
    },
    changeCountry (name:string) {
      this.country = name
    },
    cancelProfile () {
      this.firstname = ProfileStore.data?.firstname
      this.lastname = ProfileStore.data?.lastname
      this.age = ProfileStore.data?.age
      this.currency = ProfileStore.data?.currency
      this.country = ProfileStore.data?.country
      this.username = ProfileStore.data?.username
      this.avatar = ProfileStore.data?.avatar
      this.addReadonly()
    },
    upDate () {
      const data: ProfileSchema = {
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age,
        currency: this.currency,
        country: this.country,
        username: this.username,
        avatar: this.avatar
      }
      this.updateProfile(data)
      this.addReadonly()
    }
  }
})
</script>

<style lang="scss">
.profile_container {
  margin: 40px auto;
  padding: 20px;
  border: 1px solid var(--inverted-bg-color);
  max-width: 50%;
}
.profile_header {
  display: flex;
  max-width: 70%;
  margin: 0 auto;
}
.profile_edit_btn {
  margin-left: auto;
}
.profile_cancel_btn {
  margin-right: 10px;
}
.profile_data {
  max-width: 70%;
  margin: 30px auto;
}
.input_read {
  opacity: 0.4;
}
.profile_avatar {
  margin: 20px auto;
}
</style>
