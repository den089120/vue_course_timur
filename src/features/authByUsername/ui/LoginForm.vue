<template>
  <div class="login_form">
    <TextApp :title="$t('authorization_form')" :mods="{}" :name-class="['']"/>
    <TextApp v-if="textError" :title="$t('error')" :text="$t(textError)" :mods="{}" :name-class="['error']"/>
    <input-app type-input="text" v-model:textInput="userName" :mods="{}" :name-class="['login_input']" :place-holder="$t('Enter_your_name')"/>
    <input-app type-input="password" v-model:textInput="password" :mods="{}" :name-class="['login_input']" :place-holder="$t('Enter_password')"/>
    <MyButton :name-class="['background_btn', 'login_btn']" :mods="{btn_disabled: isLoad}" :disabled-is="isLoad" @click="LoginUser(userName, password)">{{$t('logIn')}}</MyButton>
    <CSSLoader v-if="isLoad"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import InputApp from '@/shared/ui/inputApp/inputApp.vue'
import CSSLoader from '@/shared/ui/CSSloader/CSSLoader.vue'
import TextApp from '@/shared/ui/textApp/TextApp.vue'
import { LoginFormStore } from '@/store'
import { storeToRefs } from 'pinia'
const loginSt = storeToRefs(LoginFormStore)

export default defineComponent({
  name: 'LoginForm',
  components: { TextApp, CSSLoader, InputApp, MyButton },
  data () {
    return {
      userName: '',
      password: '',
      isLoad: loginSt.isLoading,
      textError: loginSt.errorText
    }
  },
  computed: {
  },
  methods: {
    LoginUser (name: string, password: string) {
      LoginFormStore.loginByUser(name, password)
    }
  }
})
</script>

<style scoped lang="scss">
.login_form {
  display: flex;
  flex-direction: column;
  min-width: 400px;
  .login_btn {
    margin-top: 15px;
    margin-left: auto;
    border-radius: 7px;
  }
}

</style>
