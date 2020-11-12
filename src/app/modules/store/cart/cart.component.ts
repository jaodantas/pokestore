import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from '../shared/interfaces/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  public cart: CartModel;

  constructor(private store: Store<CartModel>) { }

  public ngOnInit(): void {
    this.store.subscribe(
      (next) => { 
        this.cart = next;
        console.log(this.cart);
      }
    );
  }

}
