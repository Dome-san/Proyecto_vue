import { useWeatherStore } from '@/stores/weatherStore'
import { getData } from '@/helpers/getWeatherApiData'

export const useTime = async () => {
  const timeZone = await getData()
  const weatherStore = useWeatherStore()
  weatherStore.time = timeZone[1]
}
