export interface Forecast {
  current: CurrentWeather;
}

interface CurrentWeather {
  weather: SimpleObject;
  temperature: SimpleObject;
  feels_like: SimpleObject;
  humidity: SimpleObject;
  pressure: SimpleObject;
  wind: Wind;
  clouds: SimpleObject;
  visibility: SimpleObject;
  precipitation: SimpleObject;
}

interface SimpleObject {
  attr: Attributes;
}

interface Attributes {
  value: any;
  name: string;
  number: number;
  code: string;
  icon: string;
  max: number;
  min: number;
  mode: string;
  unit: string;
}

interface Wind {
  speed: SimpleObject;
  direction: SimpleObject;
}
