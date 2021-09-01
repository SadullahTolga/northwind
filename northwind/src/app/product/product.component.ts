import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  products : Product[] = []
  constructor(private productService :ProductService ,
    private cartService:CartService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products=data
    })
  }

  addToCart(product:any){
    this.toastrService.success("Sepete Eklendi " , product.name)
    this.cartService.addToCart(product)
    

  }


}
