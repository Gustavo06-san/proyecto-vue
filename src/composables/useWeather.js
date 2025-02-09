import { useWeatherStore } from "@/stores/weathherStore";
import { getTemperatura } from "@/helpers/getWeather";

export const useWeather = async () => {
    const temperatura = await getTemperatura();
    const weathherStore = useWeatherStore();
    weathherStore.temperatura = temperatura;
}