<template>
  <TransitionGroup name="list" tag="div" class="flex flex-col-reverse">
    <FlashMessage @disappear="removeMessage" :timeout="4000" :message="msg" v-for="msg in messages" :key="msg.id"></FlashMessage>
  </TransitionGroup>
</template>
<script lang="ts" setup>
import FlashMessage from './FlashMessage.vue'
import {useFMStore} from '../stores/fm.store'
import { storeToRefs } from 'pinia'



const  fmStore = useFMStore()
const {messages} = storeToRefs(fmStore)
const {pushMessage, removeMessage} = fmStore
</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-enter-from{
  transform: translateY(-30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
