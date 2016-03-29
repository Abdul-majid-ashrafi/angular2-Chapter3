import {bootstrap}    from 'angular2/platform/browser';     //for bootstraping
import {Component ,EventEmitter} from 'angular2/core';                    //for components
// import {NgFor} from 'angular2/common'
// import {ProductsList} from '../app/list'
  
                    
                    
                    
export class Product {
constructor(
 public name: string,
 public imageUrl: string,
 public department: string[],
 public price: number){}}
 


 
 @Component({
 selector: 'price-display',
 inputs: ['price'],
 template: `
 <div class="price-display">\${{ price }}</div>
 `
 })
 export class PriceDisplay {
 price: number;
 }
 
 @Component({
 selector: 'product-department',
 inputs: ['productdepartment'],
 template: `
 <div class="products-department">
 <span *ngFor="#name of productdepartment.department; #i=index">
 <a href="#">{{ name }}</a>
 <span>{{i < (productdepartment.department.length-1) ? '>' : ''}}</span>
 </span>
 </div> `
 })
 export class ProductDepartment {
products : Product}

@Component({
 selector: 'product-image',
 host: {class: 'ui small image'},
 inputs: ['productimage'],
 template: `
 <img class="img-thumbnail" [src]="productimage.imageUrl">
 `
 })
 export class ProductImage {
 products: Product;
 }
 
 @Component({
 selector: 'product-row',
 inputs: ['getProduct'],
 host: {'class': 'item'},
 directives: [ProductImage, ProductDepartment, PriceDisplay],
 templateUrl : 'home.html' 
 })
 export class ProductRow {
 products: Product; // i think is not working not importand
 }
 


@Component({
 selector: 'products-list',
directives: [ProductRow],
inputs: ['productList'],
 outputs: ['onProductSelected'],
template: `
 <div class="ui items">
<product-row
 *ngFor="#myProduct of productList"
 [getProduct]="myProduct" 
 (click)='clicked(myProduct)' 
 [class.selected]="isSelected(myProduct)">
 </product-row>
 </div>
 `
 })
 class ProductsList {
     
 productList: Product[];
 /**
132 * @ouput onProductSelected - outputs the current
133 * Product whenever a new Product is selected
134 */
 onProductSelected: EventEmitter<Product>;

 /**
138 * @property currentProduct - local state containing
139 * the currently selected `Product`
140 */
 currentProduct: Product;

 constructor() {
 this.onProductSelected = new EventEmitter();
 }
 clicked(products: Product): void {
 this.currentProduct = products;
 this.onProductSelected.emit(products);
 }
 isSelected(products: Product): boolean {
 if (!products || !this.currentProduct) {
 return false;
}
//  return products.name === this.currentProduct.name;
 }}





@Component({ 
     selector: 'inventory-app',
     directives : [ProductsList],
                template: `
                 <div class="inventory-app">
                 <products-list [productList]="products"
                 (onProductSelected)="productWasSelected($event)">
                 </products-list>
               </div>                            
                    `})
    
        class inventoryApp{
                products : Product[]
                constructor(){
                   this.products = [
                        new Product(
                'Taimoor',
                'http://images.skymetweather.com/themes/skymet/images/gallery/toplists/10-Breathtaking-Images-of-the-Northern-Lights/3.jpg',
                ['Men', 'Accessories', 'Hats'],
                33.99),
                new Product(
                'Chacha',
                'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3K6T0Bf_dXaBiVbKPYg7KtuTzE-aFFZwO6FaYb8G32pDz_FwNcA',
                ['Men', 'Accessories', 'Hats'],
                22.99),
                new Product(
                'Mani',
                'http://www.desktopanimated.com/img/Preview/FantasticFelines4.jpg',
                ['Men', 'Accessories', 'Hats'],
                29.99)
                    ] 
                }       
                productWasSelected(products: Product){
                    alert(`"Your Name Is" ${products.name}`)
                    console.log("Hello", products)
                }
        } ;


 bootstrap(inventoryApp);