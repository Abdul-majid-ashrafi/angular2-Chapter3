System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var Product, PriceDisplay, ProductDepartment, ProductImage, ProductRow, ProductsList, inventoryApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import {NgFor} from 'angular2/common'
            // import {ProductsList} from '../app/list'
            Product = (function () {
                function Product(name, imageUrl, department, price) {
                    this.name = name;
                    this.imageUrl = imageUrl;
                    this.department = department;
                    this.price = price;
                }
                return Product;
            }());
            exports_1("Product", Product);
            PriceDisplay = (function () {
                function PriceDisplay() {
                }
                PriceDisplay = __decorate([
                    core_1.Component({
                        selector: 'price-display',
                        inputs: ['price'],
                        template: "\n <div class=\"price-display\">${{ price }}</div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PriceDisplay);
                return PriceDisplay;
            }());
            exports_1("PriceDisplay", PriceDisplay);
            ProductDepartment = (function () {
                function ProductDepartment() {
                }
                ProductDepartment = __decorate([
                    core_1.Component({
                        selector: 'product-department',
                        inputs: ['productdepartment'],
                        template: "\n <div class=\"products-department\">\n <span *ngFor=\"#name of productdepartment.department; #i=index\">\n <a href=\"#\">{{ name }}</a>\n <span>{{i < (productdepartment.department.length-1) ? '>' : ''}}</span>\n </span>\n </div> "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductDepartment);
                return ProductDepartment;
            }());
            exports_1("ProductDepartment", ProductDepartment);
            ProductImage = (function () {
                function ProductImage() {
                }
                ProductImage = __decorate([
                    core_1.Component({
                        selector: 'product-image',
                        host: { class: 'ui small image' },
                        inputs: ['productimage'],
                        template: "\n <img class=\"img-thumbnail\" [src]=\"productimage.imageUrl\">\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductImage);
                return ProductImage;
            }());
            exports_1("ProductImage", ProductImage);
            ProductRow = (function () {
                function ProductRow() {
                }
                ProductRow = __decorate([
                    core_1.Component({
                        selector: 'product-row',
                        inputs: ['getProduct'],
                        host: { 'class': 'item' },
                        directives: [ProductImage, ProductDepartment, PriceDisplay],
                        templateUrl: 'home.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductRow);
                return ProductRow;
            }());
            exports_1("ProductRow", ProductRow);
            ProductsList = (function () {
                function ProductsList() {
                    this.onProductSelected = new core_1.EventEmitter();
                }
                ProductsList.prototype.clicked = function (products) {
                    this.currentProduct = products;
                    this.onProductSelected.emit(products);
                };
                ProductsList.prototype.isSelected = function (products) {
                    if (!products || !this.currentProduct) {
                        return false;
                    }
                    //  return products.name === this.currentProduct.name;
                };
                ProductsList = __decorate([
                    core_1.Component({
                        selector: 'products-list',
                        directives: [ProductRow],
                        inputs: ['productList'],
                        outputs: ['onProductSelected'],
                        template: "\n <div class=\"ui items\">\n<product-row\n *ngFor=\"#myProduct of productList\"\n [getProduct]=\"myProduct\" \n (click)='clicked(myProduct)' \n [class.selected]=\"isSelected(myProduct)\">\n </product-row>\n </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductsList);
                return ProductsList;
            }());
            inventoryApp = (function () {
                function inventoryApp() {
                    this.products = [
                        new Product('Taimoor', 'http://images.skymetweather.com/themes/skymet/images/gallery/toplists/10-Breathtaking-Images-of-the-Northern-Lights/3.jpg', ['Men', 'Accessories', 'Hats'], 33.99),
                        new Product('Chacha', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3K6T0Bf_dXaBiVbKPYg7KtuTzE-aFFZwO6FaYb8G32pDz_FwNcA', ['Men', 'Accessories', 'Hats'], 22.99),
                        new Product('Mani', 'http://www.desktopanimated.com/img/Preview/FantasticFelines4.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
                    ];
                }
                inventoryApp.prototype.productWasSelected = function (products) {
                    alert("\"Your Name Is\" " + products.name);
                    console.log("Hello", products);
                };
                inventoryApp = __decorate([
                    core_1.Component({
                        selector: 'inventory-app',
                        directives: [ProductsList],
                        template: "\n                 <div class=\"inventory-app\">\n                 <products-list [productList]=\"products\"\n                 (onProductSelected)=\"productWasSelected($event)\">\n                 </products-list>\n               </div>                            \n                    " }), 
                    __metadata('design:paramtypes', [])
                ], inventoryApp);
                return inventoryApp;
            }());
            ;
            browser_1.bootstrap(inventoryApp);
        }
    }
});
//# sourceMappingURL=boot.js.map