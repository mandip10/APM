import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipes';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProductGuardService],
         component: ProductDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
