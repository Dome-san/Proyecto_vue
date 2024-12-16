import { useTimeStore } from '@/stores/timeStore'
import { getData } from '@/helpers/getWeatherApiData'

export const useTime = async () => {
  const timeZone = await getData()
  const timeStore = useTimeStore()

  const date = new Date(timeZone[1])
  const hours =
    date.getHours().toString().padStart(2, '0') +
    ':' +
    date.getMinutes().toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()

  timeStore.hour = hours
  timeStore.date = `${day}/${month}/${year}`
}
