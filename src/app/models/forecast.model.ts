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

//   coord: Coordinates;
//   weather: Weather[];
//   base: string;
//   main: MainInfo;
//   visibility: number;
//   wind: Wind;
//   clouds: Clouds;
//   dt: number;
//   sys: SystemInfo;
//   timezone: number;
//   id: number;
//   name: string;
//   cod: number;
// }
//
// interface Coordinates {
//   lon: string;
//   lat: string;
// }
//
// interface SystemInfo {
//   type: number;
//   id: number;
//   message: number;
//   country: string;
//   sunrise: number;
//   sunset: number;
// }
//
// interface Clouds {
//   all: number;
// }
//
// interface Wind {
//   deg: number;
//   gust: number;
//   speed: number;
// }
//
// interface Weather {
//   id: number;
//   number: string;
//   value: string;
//   icon: string;
// }
//
// interface MainInfo {
//   temp: number;
//   feels_like: number;
//   temp_min: number;
//   temp_max: number;
//   pressure: number;
//   humidity: number;
// }
