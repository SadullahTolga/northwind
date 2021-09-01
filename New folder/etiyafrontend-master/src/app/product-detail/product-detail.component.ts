import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product = {id:0, name:"",categoryId:0, quantityPerUnit:"",unitPrice:2, unitsInStock:2};

  constructor(private productService : ProductService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.getProductById(params["id"])
    })
    
  }

  getProductById(id:number){
    this.productService.getProductsById(id).subscribe(data=>{
      this.product  = data
    })
  }

}
