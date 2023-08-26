import * as WeatherType from "@/shared/types/Weather";
import { motion } from "framer-motion";
import SolNublado from "@/assets/SolNublado.png";



const WeatherCard = (WeatherData: WeatherType.CardType,) => {
  const overlayStyles = `p-5 absolute z-30 flex w-[310px] 
  whitespace-normal bg-gray-200 text-white opacity-0 rounded-[30px] text-center`;

  return (
    <li className={`relative mx-5 inline-block flex-1`}>
    <motion.div
      className={`grid grid-cols-3 grid-rows-3 ${overlayStyles}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <img 
      src={SolNublado} 
      alt="weather-card-image" 
      width="500px"
      className="col-span-3 row-span-3"
      />
      <div className="">
        <h5>Min.</h5>
        <h5>{WeatherData.minTemperature === undefined ? 0 : WeatherData.minTemperature}{WeatherData.temperatureUnit}</h5>
      </div>
      <div className="">
        <h5>Rel. Hum.</h5>
        <h5>{WeatherData.relativeHumidity === undefined ? 0 : WeatherData.relativeHumidity}{WeatherData.relativeHumidityUnit}</h5>
      </div>
      <div className="">
        <h5>Max.</h5>
        <h5>{WeatherData.maxTemperature === undefined ? 0 : WeatherData.maxTemperature}{WeatherData.temperatureUnit}</h5>
      </div>
    </motion.div>
    </li>
  );
};

export default WeatherCard;
