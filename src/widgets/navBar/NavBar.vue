<template>
  <nav :class="$ClassNames('nav_bar', {}, [nameClass])">
    <MyButton @click="openModal" :name-class="['clear_inverted']" :mods="{}">{{$t('logIn')}}</MyButton>
    <LoginModal :login-modal-view="isOpen" @close-login="closeModal"/>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/shared/ui/myButton/MyButton.vue'
import { LoginModal } from '@/features/authByUsername/'

export default defineComponent({
  name: 'NavBar',
  components: { LoginModal, MyButton },
  props: {
    nameClass: [String, Array]
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    openModal () {
      this.isOpen = true
    },
    closeModal () {
      this.isOpen = false
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
