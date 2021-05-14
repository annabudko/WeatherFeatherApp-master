export interface Forecast {
  coord: Coordinates;
  weather: Weather;
  base: string;
  main: MainInfo;
  visibility: string;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: SystemInfo;
  timezone: -25200;
  id: number;
  name: string;
  cod: number;
}

interface Coordinates {
  lon: string;
  lat: string;
}

interface SystemInfo {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface Clouds {
  all: number;
}

interface Wind {
  lon: number;
  lat: number;
}

interface Weather {
  id: string;
  main: string;
  description: string;
  icon: string;
}

interface MainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
