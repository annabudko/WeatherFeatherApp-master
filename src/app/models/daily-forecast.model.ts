export interface DailyForecast {
  dt: number;
  weather: Weather[];
  temp: Temperature;
  feels_like: Temperature;
  pressure: number;
  humidity: number;
  clouds: number;
  wind_speed: number;
  wind_gust: number;
  wind_deg: number;
  dew_point: number;
  pop: number;
  rain?: number;
  snow?: number;
}

interface Temperature {
  day: number;
  night: number;
  eve: number;
  morn: number;
  min: number;
  max: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
