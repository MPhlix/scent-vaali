import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { DealProduct } from '../../../shared/common-models/DealProduct';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      380: {
        items: 2
      },
      650: {
        items: 3
      },
      950: {
        items: 4
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000
  }

  productsForDeals: DealProduct[] = [
    {
      id: 1,
      isNew: true,
      name: 'A',
      actualPrice: 100,
      dealPrice: 80,
      expiryDate: new Date(2021, 6, 21)
    },
    {
      id: 2,
      isNew: true,
      name: 'B',
      actualPrice: 100,
      dealPrice: 80,
      expiryDate: new Date(2021, 6, 21)
    },
    {
      id: 3,
      isNew: true,
      name: 'C',
      actualPrice: 100,
      dealPrice: 80,
      expiryDate: new Date(2021, 6, 21)
    },
    {
      id: 4,
      isNew: true,
      name: "d",
      actualPrice: 100,
      dealPrice: 80,
      expiryDate: new Date(2021, 6, 21)
    },
    {
      id: 5,
      isNew: true,
      name: 'E',
      actualPrice: 100,
      dealPrice: 80,
      expiryDate: new Date(2021, 6, 21)
    }
  ];

  productStylesForWrapper = {
    padding: "0 15px 0 20px"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
