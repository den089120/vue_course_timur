<template>
<!--  <Teleport to=".app">-->
    <div :class="$ClassNames('modal_container', { modal_open: isModal }, [''])" @click.self="closeModal">
      <div :class="$ClassNames('modal_body', { open_body: isModal, close_body: !isModal }, [''])">
        <slot>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Aperiam asperiores
          at deserunt doloribus enim eos et explicabo fugiat
          ipsum nesciunt, perferendis placeat possimus
          quibusdam quos tempore ullam, voluptate! Beatae, id!
        </slot>
      </div>
    </div>
<!--  </Teleport>-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore/GlobalStore'
export default defineComponent({
  name: 'ModalApp',
  data () {
    return {}
  },
  computed: {
    ...mapState(useGlobalStore, ['isModal'])
  },
  methods: {
    ...mapActions(useGlobalStore, ['closeModal'])
  }
})
</script>

<style scoped lang="scss">
.modal_container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s;
}
.modal_open {
  opacity: 1;
  pointer-events: auto;
}
.modal_body {
  padding: 30px;
  border-radius: 10px;
  max-width: 60%;
  background: whitesmoke;
}
.open_body {
  animation-name: animate_open;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.close_body {
  animation-name: animate_close;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
@keyframes animate_open {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
@keyframes animate_close {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.2);
  }
}
</style>
