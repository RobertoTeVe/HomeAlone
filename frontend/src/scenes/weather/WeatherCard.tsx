import * as WeatherType from "@/shared/types/Weather";
import { motion } from "framer-motion";
import SolNublado from "@/assets/SolNublado.png";

const WeatherCard = (WeatherData: WeatherType.CardType) => {
  const overlayStyles = `p-5 absolute z-30 w-[310px] bg-light-white whitespace-normal rounded-[30px] text-center`;
  const chooseColor = (temp: number | undefined) => {
    if (temp != undefined)
      if (temp < 0) {
        return "bg-blue-100";
      } else if (temp >= 0 && temp <= 10) {
        return "bg-blue-200";
      } else if (temp >= 11 && temp <= 15) {
        return "bg-blue-500";
      } else if (temp >= 16 && temp <= 22) {
        return "bg-green-200";
      } else {
        return "bg-red-400";
      }
  };

  return (
    <li className={`relative mx-5 inline-block w-[300px]`}>
      <div className={`grid grid-cols-3 grid-rows-3 ${overlayStyles}`}>
        <img
          src={SolNublado}
          alt="weather-card-image"
          width="500px"
          className="col-span-3 row-span-3"
        />
        <div className={`rounded-xl ${chooseColor(WeatherData.minTemperature)}`}>
          <h5>Min.</h5>
          <h5>
            {WeatherData.minTemperature === undefined
              ? 0
              : WeatherData.minTemperature}
            {WeatherData.temperatureUnit}
          </h5>
        </div>
        <div className="">
          <h5>Rel. Hum.</h5>
          <h5>
            {WeatherData.relativeHumidity === undefined
              ? 0
              : WeatherData.relativeHumidity}
            {WeatherData.relativeHumidityUnit}
          </h5>
        </div>
        <div className={`rounded-xl ${chooseColor(WeatherData.maxTemperature)}`}>
          <h5>Max.</h5>
          <h5>
            {WeatherData.maxTemperature === undefined
              ? 0
              : WeatherData.maxTemperature}
            {WeatherData.temperatureUnit}
          </h5>
        </div>
      </div>
    </li>
  );
};

export default WeatherCard;
