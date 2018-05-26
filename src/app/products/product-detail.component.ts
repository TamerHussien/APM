import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product';


@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private service: ProductService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle = `${id}`;
  this.service.getProduct(id).subscribe(product =>  this.product = product
  , error => this.errorMessage = <any>error);

  }
onBack(): void {
  this._router.navigate(['/products']);
}
}
