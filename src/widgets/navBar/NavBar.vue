<template>
  <nav :class="$ClassNames('nav_bar', {}, [nameClass])">
    <MyButton v-if="isAuth" @click="removeUser" :name-class="['clear_inverted']" :mods="{}">{{$t('logOut')}}</MyButton>
    <MyButton v-else @click="openLoginForm" :name-class="['clear_inverted']" :mods="{}">{{$t('logIn')}}</MyButton>
    <LoginModal :login-modal-view="isLoginForm" @close-login="closeLoginForm"/>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import { LoginModal } from '@/features/authByUsername/'
import { mapState, mapActions, storeToRefs } from 'pinia'
import { useUserStore } from '@/entities/User'
import { LoginFormStore } from '@/store'
const loginSt = storeToRefs(LoginFormStore)
export default defineComponent({
  name: 'NavBar',
  components: { LoginModal, MyButton },
  props: {
    nameClass: [String, Array]
  },
  data () {
    return {
      isLoginForm: loginSt.isLoginForm
    }
  },
  computed: {
    ...mapState(useUserStore, ['isAuth'])
  },
  methods: {
    ...mapActions(useUserStore, ['removeUser']),
    openLoginForm () {
      LoginFormStore.openLoginForm()
    },
    closeLoginForm () {
      LoginFormStore.closeLoginForm()
    }
  }
})
</script>

<style lang="scss">
.nav_bar {
  height: var(--navbar-height);
  background: var(--inverted-bg-color);
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 20px;
}
</style>
