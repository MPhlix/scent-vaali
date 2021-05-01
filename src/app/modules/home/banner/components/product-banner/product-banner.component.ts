import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.scss'],
  animations: [
    // animation triggers go here
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
  ]
})
export class ProductBannerComponent implements OnInit {
  @Input('smallTitle') smallTitle: string;
  @Input('bigTitle') bigTitle: string;
  @Input('priceTitle') priceTitle: string;
  @Input('price') price: number;
  @Input('linkTitle') linkTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
