import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  animations: [
    trigger('enter',
      [
        state('in', style({transform: 'scale(2)'})),
        transition('void => *', [
          style({transform: 'scale(1)'}),
          animate('1500ms ease')
        ])
      ])
  ]
})
export class StartComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
