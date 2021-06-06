import {Component, OnInit} from '@angular/core';
import {LocationService} from '../../services/location.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public cities: any;
  public lat = 0;
  public lng = 0;

  constructor(public locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationService.findCurrentLocation()
      .subscribe(loc => {
        this.lat = loc.lat;
        this.lng = loc.lng;
      });
    this.locationService.getCities()
      .subscribe(data => {
        this.cities = data;
        console.log(data);
      })
    ;
  }

}
