import {Coordinates} from './coordinates.model';

export interface City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
}
