import {AfterViewInit, Component, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Element} from '../../models/element';
import {FormControl} from '@angular/forms';
import {ReplaySubject, Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() public elementName = 'element';
  @Input() public elements: Element[] = [];

  @Output() selectedValue: any;

  public filterCtrl: FormControl = new FormControl();

  public filteredElements: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  // @ts-ignore
  @ViewChild('singleSelect', {static: true}) singleSelect: MatSelect;

  protected onDestroy = new Subject<void>();

  constructor() {
    this.selectedValue = this.elements[0];
    this.filteredElements.next(this.elements.slice());
    this.filterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterElements();
      });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  protected setInitialValue(): void {
    this.filteredElements
      .pipe(take(1), takeUntil(this.onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: any, b: any) => a && b && a.id === b.id;
      });
  }

  protected filterElements(): void {
    if (!this.elements) {
      return;
    }

    let search = this.filterCtrl.value;
    if (!search) {
      this.filteredElements.next(this.elements.slice());
      return;
    } else {
      search = search.toLowerCase();
    }

    this.filteredElements.next(
      this.elements.filter(element => element.name.toLowerCase().indexOf(search) > -1)
    );
  }
}
