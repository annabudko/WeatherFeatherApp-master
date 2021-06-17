import {SimpleObject} from './simple-object';
import {Wind} from './wind';

export interface CurrentWeather {
  weather: SimpleObject;
  temperature: SimpleObject;
  feels_like: SimpleObject;
  humidity: SimpleObject;
  pressure: SimpleObject;
  wind: Wind;
  clouds: SimpleObject;
  visibility: SimpleObject;
  precipitation: SimpleObject;
  city: SimpleObject;
}
