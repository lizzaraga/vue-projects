<template>
  <div class="h-screen w-screen bg-[#dce2e7] text-black p-8 flex flex-col" >
    <button class="p-3 px-6 font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white self-start mb-6" @click="pushNotification">Push Notifications</button>
    <FlashMessageGroup></FlashMessageGroup>
  </div>
</template>
<script lang="ts" setup>

import type {FlashMessage} from "./components/FlashMessage.vue"
import FlashMessageGroup from "./components/FlashMessageGroup.vue"
import { useFMStore } from "./stores/fm.store"

const fmStore = useFMStore()
function pushNotification(){
  fmStore.pushMessage({
    id: Date.now().toString(),
    body: "This is called runtime declaration, because . <a class='text-indigo-600 underline font-semibold' href='#/'>More...</a>",
    title: "Vue Tips"
  })
}
</script>