<template>
  <div class="flash-message shadow-md">
    <slot name="leftIcon"></slot>
    <div class="body">
      <h6 class="font-medium">{{message.title}}</h6>
      <p class="text-sm text-gray-800" v-html="message.body">
    
      </p>
    </div>
    <slot name="rightIcon"></slot>
  </div>
</template>

<script lang="ts" setup>
import type {FMessage} from '../stores/fm.store'
defineProps<{
  message: FMessage
}>()
</script>

<style lang="scss" scoped>
.flash-message{
  background-color: #fff;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0.8rem 1.2rem;
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
    background-color: royalblue;
  }
}

</style>