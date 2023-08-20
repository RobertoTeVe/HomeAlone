import * as WeatherType from "@/shared/types/Weather";
// import { SelectedPage } from "@/shared/types";
import { getWeather } from "@/api/WeatherAPI";
import { Settings } from "../../../settings";
import { useCallback, useRef, useState } from "react";
import WeatherCard from "./WeatherCard";

function Weather() {
  // Variables
  const weatherData: WeatherType.RequestType = {
    latitude: Settings.LATITUDE,
    longitude: Settings.LONGITUDE,
    hourly: Settings.HOURLY,
  };

  // Functions
  const [weatherState, setWeatherState] = useState<WeatherType.ResponseType>(
    {} as WeatherType.ResponseType,
  );
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  const sendRequest = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    await getWeather(weatherData).then((val) => setWeatherState(val));
    if (isMounted.current) setIsSending(false);
  }, [isSending]);

  // Return
  return (
    <section
      id="weather"
      className="pt-20 gap-16 bg-primary-100 py-10 md:h-full md:pb-0"
    >
      <button onClick={sendRequest}>Refresh</button>
      {weatherState !== undefined ? (
        <>
          <label className="px-10 py-10 text-gray-100">
            Time unit is: {weatherState.hourly_units?.time}{" "}
          </label>
          <label className="px-10 py-10 text-gray-100">
            Temperature unit is: {weatherState.hourly_units?.temperature_2m}
          </label>
        </>
      ) : (
        ""
      )}
      <WeatherCard 
        maxTemperature={weatherState.hourly?.temperature_2m[14]}
        minTemperature={weatherState.hourly?.temperature_2m[1]}
        relativeHumidity={weatherState.hourly?.relativehumidity_2m[0]}
        temperatureUnit={weatherState.hourly_units?.temperature_2m} 
        relativeHumidityUnit={weatherState.hourly_units?.relativehumidity_2m}      />
    </section>
  );
}

export default Weather;
