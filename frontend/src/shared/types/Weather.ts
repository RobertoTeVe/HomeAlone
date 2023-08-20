// Card Types

export interface CardType {
  maxTemperature: number | undefined;
  minTemperature: number | undefined;
  relativeHumidity: number | undefined;
  temperatureUnit: string | undefined;
  relativeHumidityUnit:string|undefined;
}

// Request Types

export interface RequestType {
  latitude: number;
  longitude: number;
  hourly: string;
  timezone?: string;
}

// Response Types
export interface ResponseType {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units?: HourlyUnitsType;
  hourly?: HourlyType;
}

export interface HourlyUnitsType {
  time: string;
  temperature_2m?: string;
  relativehumidity_2m?: string;
  temperature_80m?: string;
}

export interface HourlyType {
  time: string[];
  temperature_2m: number[];
  relativehumidity_2m: number[];
  temperature_80m?: number[];
}
