import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent implements OnInit {

  @Input() items: Array<any>;
  @Input() itemsPerPage: number = 6;
  @Output() itemsPage = new EventEmitter<any>();

  public itemsActual: Array<any>;
  public pageActual: number;
  public pageTotal: number;

  constructor() { }

  public ngOnInit(): void {
    this.pageTotal = Math.floor(this.items.length / this.itemsPerPage)
      + ( (this.items.length % this.itemsPerPage) ? 1 : 0);
    this.pageActual = 1;
    this.updateItemsActual();
    this.sendActualItems();
  }

  public next(toTheEnd?: boolean): void {
    this.pageActual = toTheEnd ? this.pageTotal : this.pageActual + 1;
    this.updateItemsActual();
    this.sendActualItems();
  }

  public back(toBegin?: boolean): void {
    this.pageActual = toBegin ? 1 : this.pageActual - 1;
    this.updateItemsActual();
    this.sendActualItems();
  }

  private sendActualItems(): void {
    this.itemsPage.emit(this.itemsActual);
  }

  private get initialPageItem(): number {
    return this.itemsPerPage*(this.pageActual-1);
  }

  private updateItemsActual(): void {
    this.itemsActual = this.items.slice(this.initialPageItem, this.initialPageItem + this.itemsPerPage);
  }

  public isDisabledBack(): boolean {
    return this.pageActual <= 1;
  }

  public isDisabledNext(): boolean {
    return this.pageActual >= this.pageTotal;
  }

}
