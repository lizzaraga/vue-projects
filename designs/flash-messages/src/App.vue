<template>
  <div class="h-screen w-screen bg-[#dce2e7] text-black p-8 flex flex-col" >
    <form @submit.prevent class="w-1/4 p-4 bg-white rounded-lg shadow-md">
      <div class="flex flex-col form-group">
        <label for="message">Message</label>
        <textarea v-model="text" class="mt-2 border rouned-sm" name="message" id="message" cols="30" rows="2"></textarea>
      </div>
      <div class="flex flex-col mt-4 form-group">
        <label for="typeMessage">Type of Flash Message</label>
        <select v-model="type" name="typeMessage" id="typeMessage" class="p-3 mt-2 rouned-sm">
          <option value="danger">Danger</option>
          <option value="success">Success</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
        </select>
      </div>
      <button class="self-start p-3 px-6 mt-6 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700" @click="pushNotification">Push Notifications</button>
    </form>
    <FlashMessageGroup class="mt-6"></FlashMessageGroup>
    
  </div>
</template>
<script lang="ts" setup>

import { ref } from "vue-demi"
import type {FlashMessage} from "./components/FlashMessage.vue"
import FlashMessageGroup from "./components/FlashMessageGroup.vue"
import { useFMStore } from "./stores/fm.store"

const fmStore = useFMStore()

const text = ref("")
const type = ref("success")

function pushNotification(){
  fmStore.pushMessage({
    //@ts-ignore
    type: type.value,
    id: Date.now().toString(),
    body: text.value
    
  })
}
</script>