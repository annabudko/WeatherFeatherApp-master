import {Component, OnInit} from '@angular/core';
import {LocationService} from '../../services/location.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public center: google.maps.LatLngLiteral = {lat: 0, lng: 0};

  constructor(public locationService: LocationService) {
  }

  ngOnInit(): void {
    this.locationService.findCurrentLocation().subscribe(loc => this.center = loc);
  }

}
