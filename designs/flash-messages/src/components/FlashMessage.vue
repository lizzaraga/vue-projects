<template>
  <div @mouseover="blockDisappearing" @mouseout="activeDisappearing" class="shadow-md flash-message" :class="message.type">
    <slot name="leftIcon"></slot>
    <div class="body">
      <h6 v-if="message.title" class="font-medium">{{message.title}}</h6>
      <p class="text-sm text-gray-800" v-html="message.body">
    
      </p>
    </div>
    <slot name="rightIcon"></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import type {FMessage} from '../stores/fm.store'

let timeoutId :any
const props = defineProps<{
  message: FMessage,
  timeout: number
}>()

const emit = defineEmits<{
  (e: "disappear", p: FMessage): void
}>()

function blockDisappearing(){
  clearTimeout(timeoutId)
}
function activeDisappearing(){
  timeoutId = setTimeout(() => {
    emit("disappear", props.message)
    clearTimeout(timeoutId)
  }, props.timeout);
}

onMounted(() => {
  activeDisappearing()
})
</script>

<style lang="scss" scoped>


.flash-message{
  //background-color: hsl(from var(--fm-danger-color) h s calc(l - 5%));
  background: #fafafa;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0.6rem 1rem;
  position: relative;
  width: fit-content;
  max-width: 32rem;
  gap: 0.8rem;
  margin-bottom: 0.6rem;
  
  &>.body{
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 0.15rem;
  }

  &::after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0.2rem;
    background-color: rgb(19, 19, 19);
  }
  &.success{
    background: var(--fm-success-lighter-color);
    &::after{
      background-color: var(--fm-success-color);
    }
  }
  &.info{
    background: var(--fm-info-lighter-color);
    &::after{
      background-color: var(--fm-info-color);
    }
  }
  &.warning{
    background: var(--fm-warning-lighter-color);
    &::after{
      background-color: var(--fm-warning-color);
    }
  }
  &.danger{
    background: var(--fm-danger-lighter-color);
    &::after{
      background-color: var(--fm-danger-color);
    }
  }
}

</style>