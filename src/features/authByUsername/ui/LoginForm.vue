<template>
  <div class="login_form">
    <input-app type-input="text" v-model:textInput="userName" :mods="{}" :name-class="['login_input']" place-holder="Введите имя"/>
    <input-app type-input="password" v-model:textInput="password" :mods="{}" :name-class="['login_input']" place-holder="Введите пароль"/>
    <MyButton :name-class="['background_btn', 'login_btn']" :mods="{}">{{$t('logIn')}}</MyButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import InputApp from '@/shared/ui/inputApp/inputApp.vue'

export default defineComponent({
  name: 'LoginForm',
  components: { InputApp, MyButton },
  data () {
    return {
      userName: '',
      password: ''
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
