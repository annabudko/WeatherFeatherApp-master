import {Temperature} from './temperature';
import {Weather} from './weather';

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
