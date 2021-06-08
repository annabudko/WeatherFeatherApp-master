import {
  trigger, animateChild, group,
  transition, animate, style, query, state, stagger
} from '@angular/animations';

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
// Routable animations
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> ForecastPage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
