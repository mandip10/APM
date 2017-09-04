import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';


@Component({
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  imageWidth: number=100;
  imageMargin: number=10;
  errorMessage: string;
  product: IProduct;

  filteredProducts: IProduct[];
  products: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
    let id= +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this._productService.getProduct(id)
            .subscribe(products => {
                this.products = products;
    this.product = {
      "productId": id,
      "productName": this.products.productName,
      "productCode": this.products.productCode,
      "releaseDate": this.products.releaseDate,
      "description": this.products.description,
      "price": this.products.price,
      "starRating": this.products.starRating,
      "imageUrl": this.products.imageUrl
    }
    },
    error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
