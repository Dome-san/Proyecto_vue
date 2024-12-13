import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTimeStore = defineStore('time', () => {
  const time = ref(0)
  const setTime = (time) => {
    time.value = time
  }
  return { time, setTime }
})
