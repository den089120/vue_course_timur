<template>
  <div :class="$ClassNames('', {}, [...nameClass])">
    <input
      :type="typeInput"
      :value="textInput"
      @input="$emit('update:textInput', $event.target.value)"
      :class="$ClassNames('input_app', mods, [''])"
      required="required"
    >
    <span v-if="placeHolder">{{ placeHolder }}</span>
    <div></div>
  </div>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Mods } from '@/shared/lib/plugins/ClassNames'

export default defineComponent({
  name: 'inputApp',
  props: {
    typeInput: {
      type: String,
      default: 'text'
    },
    textInput: String,
    mods: {
      type: Object as PropType<Mods>
    },
    nameClass: [String, Array],
    placeHolder: String
  },
  emits: ['update:textInput'],
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.login_input {
  display: flex;
  position: relative;
  input {
    position: relative;
    transition: 0.5s;
    letter-spacing: 0.06em;
    font-size: 1rem;
    padding: 20px 10px;
    color: var(--inverted-primary-color);
    z-index: 3;
  }
  span {
    position: absolute;
    pointer-events: none;
    left: 0;
    padding: 20px 10px;
    transition: 0.5s;
    letter-spacing: 0.06em;
    font-size: 1rem;
  }
  input:valid ~ span,
  input:focus ~ span {
    font-size: 0.75rem;
    transform: translateY(-30px);
  }
  div {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    height: 2px;
    background: var(--inverted-bg-color);
    transition: 0.5s;
  }
  input:valid ~ div,
  input:focus ~ div {
    height: 35px;;
  }
}
.login_input::before {

}

.input_app {
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
}
</style>
