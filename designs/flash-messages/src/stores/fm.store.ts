
import { defineStore } from 'pinia';
import { ref } from 'vue';
export interface FMessage{
  id?: string,
  title: string,
  body: string
}
// export const useFMStore = defineStore({
//   id: "fm",
//   state: () => ({
//     _isBusy: false,
//     _timeoutId: null,
//     messages: <IFlashMessage[]>[]
//   }),
//   actions: {
//     _next(){
//       this.messages.shift()
//     },
//     push(m: IFlashMessage){
//       this.push(m)
//     }
//   },

// })

export const useFMStore = defineStore('fmStore', () => {
  let _isBusy = false;
  let _timeoutId  = null;
  let messages = ref(<FMessage[]>[]);


  function pushMessage(m: FMessage): void{
    messages.value.push(m)
  }
  function removeMessage(m: FMessage){
    messages.value = messages.value.filter(e => e.id != m.id)
  }
  return {
    messages,
    pushMessage,
    removeMessage
  }
})

