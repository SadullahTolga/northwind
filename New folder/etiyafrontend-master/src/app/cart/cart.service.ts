import { Injectable } from '@angular/core';
import { CartItems } from './cart-items';
import { CartItem } from './cart-item';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  getCart(): CartItem[] {
    return CartItems;
  }

  addToCart(product: Product) {
    let item = CartItems.find((c) => c.product.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      let cartItem: CartItem = { product: product, quantity: 1 };
      CartItems.push(cartItem);
    }
  }
}
