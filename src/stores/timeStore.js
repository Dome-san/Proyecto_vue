import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTimeStore = defineStore('time', () => {
  const time = ref(0)
  const hour = ref('')
  const date = ref('')

  const setTime = (tim) => {
    time.value = tim
  }

  return { time, hour, date, setTime }
})
