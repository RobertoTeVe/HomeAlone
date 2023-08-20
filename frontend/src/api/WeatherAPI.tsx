import axios from "axios";
import { Settings } from "../../settings";
import * as Weather from "@/shared/types/Weather";

function getWeather(values: Weather.RequestType) {

  const options = {
    method: "GET",
    url: Settings.WEATHER_API_URL,
    params: values,
    headers: {},
  };
  return axios
    .request(options)
    .then(function ({ data }: { data: Weather.ResponseType }) {
      console.log(`Information received at: ${data.latitude}N, ${data.longitude}E ${data.elevation}m above sea level.`);
      return data;
    })
    .catch(function (error: any) {
      console.error(error);
      return error
    });
  }

export { getWeather };
