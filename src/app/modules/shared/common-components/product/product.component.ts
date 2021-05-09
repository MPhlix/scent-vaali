import { Component, OnInit, Input } from '@angular/core';
import { DealProduct } from 'src/app/modules/shared/common-models/DealProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  @Input ('product') product: DealProduct;

  @Input ('stylesForWrapper') stylesForWrapper: {
    [key: string]: any
  };

  constructor() { }

  ngOnInit(): void {
  }

}
