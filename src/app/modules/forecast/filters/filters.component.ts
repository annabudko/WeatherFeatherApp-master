import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocationService} from '../../../services/location.service';
import {Element} from '../../../models/element';
import {Cities, Units} from '../../../dataSets';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public selectedCity = '';
  public selectedUnit = 'metric';

  public Units: Element[] = Units;
  public Cities: Element[] = Cities;


  @Input() showCityFilter = true;

  @Output() selectedUnitEvent = new EventEmitter<string>();
  @Output() selectedCityEvent = new EventEmitter<string>();

  constructor(public locationService: LocationService) {
  }

  ngOnInit(): void {
  }

  public getCity(city: string): void {
    this.selectedCityEvent.emit(city);
  }

  public getUnit(unit: string): void {
    this.selectedUnitEvent.emit(unit);
  }
}
