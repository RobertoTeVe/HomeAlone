export class Settings {
  static readonly WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";
  static readonly BACKEND_API_URL = "";
  static readonly LATITUDE = 42.1616;
  static readonly LONGITUDE = -8.6198;
  //   "Hourly" values are comma separated, i.e: 'temperature_2m, temperature_80m'
  static readonly HOURLY = 'temperature_2m,relativehumidity_2m'; 
}
