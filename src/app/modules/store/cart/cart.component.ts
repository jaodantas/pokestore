import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clean } from '../shared/actions/cart.actions';
import { CartModel } from '../shared/interfaces/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  public cart$: Observable<CartModel>;
  public modalShow: boolean = false;

  constructor(private store: Store<{cart: CartModel}>) { 
    this.cart$ = this.store.pipe(select('cart'));
  }

  public ngOnInit(): void {
  }

  public clean(): void {
    this.store.dispatch(clean());
  }

  public finish(): void {
    this.modalShow = true;
  }

  public onModalClose(event): void {
    this.modalShow = event && false;
  }

}
