import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const enterAnimation = trigger('enter',
  [
    state('in', style({display: 'block'})),
    transition('void => *', [
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({opacity: 0}))
        ])
      ], {optional: true}),
      query(':enter', [
        style({opacity: 0}),
        stagger(100, [
          animate('0.5s', style({opacity: 1}))
        ])
      ], {optional: true})
    ])
  ]);
