// import {Component ,EventEmitter } from 'angular2/core'
// import {Product} from '../app/boot'
// import {ProductRow} from '../app/boot'
// import {ProductImage} from '../app/boot'
// import {ProductDepartment} from '../app/boot'
// import {PriceDisplay} from '../app/boot'
// // @Component({
// //  selector: 'products-list',
// // // directives: [ProductRow],
// // // inputs: ['productList'],
// // //  outputs: ['onProductSelected'],
// // template: `
// //  <div class="ui items">
// // hello role
// //  </div>
// //  `
// //  })
// //  export class ProductsList {}
// @Component({
//  selector: 'products-list',
// directives: [ProductRow],
// inputs: ['productList'],
//  outputs: ['onProductSelected'],
// template: `
//  <div class="ui items">
// <product-row
//  *ngFor="#myProduct of productList"
//  [getProduct]="myProduct" 
//  (click)='clicked(myProduct)' 
//  [class.selected]="isSelected(myProduct)">
//  </product-row>
//  </div>
//  `
//  })
//  export class ProductsList {
//  productList: Product[];
//  /**
// 132 * @ouput onProductSelected - outputs the current
// 133 * Product whenever a new Product is selected
// 134 */
//  onProductSelected: EventEmitter<Product>;
//  /**
// 138 * @property currentProduct - local state containing
// 139 * the currently selected `Product`
// 140 */
//  currentProduct: Product;
//  constructor() {
//  this.onProductSelected = new EventEmitter();
//  }
//  clicked(products: Product): void {
//  this.currentProduct = products;
//  this.onProductSelected.emit(products);
//  }
//  isSelected(products: Product): boolean {
//  if (!products || !this.currentProduct) {
//  return false;
// }
// //  return products.name === this.currentProduct.name;
//  }} 
//# sourceMappingURL=list.js.map