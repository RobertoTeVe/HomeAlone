import * as WeatherType from "@/shared/types/Weather";
// import { SelectedPage } from "@/shared/types";
import { getWeather } from "@/api/WeatherAPI";
import { Settings } from "../../../settings";
import { useCallback, useRef, useState } from "react";
import WeatherCard from "./WeatherCard";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

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
  const [weatherList, setWeatherList] = useState<WeatherType.CardListType>();
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  const sendRequest = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    await getWeather(weatherData).then((val) => {
      setWeatherState(val);
      const car: WeatherType.CardType = {
        maxTemperature: 19,
        minTemperature: 10,
        relativeHumidity: 16,
        temperatureUnit: "C",
        relativeHumidityUnit: "%",
      };

      let listcar: WeatherType.CardListType = [];

      for (let i = 0; i < 12; i = i + 1) {
        console.log(`${car.maxTemperature}`);
        listcar.push(car);
      }
      setWeatherList(listcar);
    });
    if (isMounted.current) setIsSending(false);
  }, [isSending]);

  // Return
  return (
    <section
      id="weather"
      className="w-full gap-16 bg-primary-100 py-10 pt-20 md:h-full md:pb-0"
    >
      <button
        className="group mb-5 ml-5 inline-flex rounded-full bg-primary-200 p-3 text-white"
        onClick={sendRequest}
      >
        <ArrowPathIcon className="mr-1 h-6 w-6 transition-all group-hover:rotate-180" />
        &nbsp;Refresh
      </button>
      {weatherState.hourly_units !== undefined ? (
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
      <div className="mt-10 h-[430px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {weatherList?.map((val, idx) => (
            <WeatherCard
              key={idx}
              maxTemperature={val.maxTemperature}
              minTemperature={val.minTemperature}
              relativeHumidity={val.relativeHumidity}
              temperatureUnit={val.temperatureUnit}
              relativeHumidityUnit={val.relativeHumidityUnit}
            ></WeatherCard>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Weather;
