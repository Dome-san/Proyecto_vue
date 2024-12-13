import { useWeatherStore } from '@/stores/weatherStore'
import { getData } from '@/helpers/getWeatherApiData'

export const useWeather = async () => {
  const temperatura = await getData()
  const weatherStore = useWeatherStore()
  weatherStore.temperatura = temperatura[0]
}
