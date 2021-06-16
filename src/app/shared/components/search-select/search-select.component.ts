import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Element} from '../../../models/element';
import {FormControl} from '@angular/forms';
import {ReplaySubject, Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';
import {MatSelect} from '@angular/material/select';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() public elementName: any;
  @Input() public elements: Element[] = [];
  @Output() selectedValueEvent = new EventEmitter<string>();

  public filterCtrl: FormControl = new FormControl();

  public currentLg = this.translateService.currentLang;
  public filteredElements: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  // @ts-ignore
  @ViewChild('singleSelect', {static: true}) singleSelect: MatSelect;

  public selectedValue: Element;

  protected onDestroy = new Subject<void>();

  constructor(public translateService: TranslateService) {
    this.selectedValue = this.elements[0];
  }

  ngOnInit(): void {
    this.filteredElements.next(this.elements.slice());
    this.selectedValue = this.elements[0];
    this.filterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterElements();
      });
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
    switch (this.currentLg) {
      case 'en':
        this.filteredElements.next(
          this.elements.filter(element => element.name.toLowerCase().indexOf(search) > -1)
        );
        break;
      case 'ua':
        this.filteredElements.next(
          this.elements.filter(element => element.nameUA.toLowerCase().indexOf(search) > -1)
        );
        break;
      case 'ru':
        this.filteredElements.next(
          this.elements.filter(element => element.nameRU.toLowerCase().indexOf(search) > -1)
        );
        break;
    }
  }

  public selectValue(value: Element): void {
    this.selectedValueEvent.emit(value.name);
  }
}
