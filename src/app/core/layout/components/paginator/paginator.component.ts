import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, pluck, tap } from 'rxjs/operators';
import { setPage } from 'src/app/modules/store/shared/actions/catalog.actions';
import { CatalogModel } from 'src/app/modules/store/shared/interfaces/catalog.model';
import { SearchModel } from 'src/app/modules/store/shared/interfaces/search.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent implements OnInit {

  @Input() itemsPerPage: number = 6;

  public itemsFull: Array<any>;
  public itemsFiltered: Array<any>;
  public itemsActual: Array<any>;
  public pageActual: number;
  public pageTotal: number;

  public catalog$: Observable<CatalogModel>;
  public search$: Observable<SearchModel>;

  constructor(
    private store: Store<any>
  ) { 
    this.catalog$ = this.store.pipe(select('catalog'));
    this.search$ = this.store.pipe(select('search'));
  }

  public ngOnInit(): void {

    this.catalog$.pipe(
      pluck('full'),
      filter(items => items !== this.itemsFull),
      map((items) => {
        this.itemsFull = items;
        this.itemsFiltered = items;
        this.pageTotal = Math.floor(items.length / this.itemsPerPage)
          + ( (items.length % this.itemsPerPage) ? 1 : 0);
        this.pageActual = 1;
        this.updateItemsActual();
        this.sendActualItems();
      })
    ).subscribe();

    this.search$.pipe(
      pluck('name'),
      map(name => {
        this.updateItemsFiltered(name);
        this.updateItemsActual()
        this.updatePageIndex();
        this.sendActualItems();
      })
    ).subscribe();

  }

  public updatePageIndex(): void {
    this.pageTotal = Math.floor(this.itemsFiltered.length / this.itemsPerPage)
          + ( (this.itemsFiltered.length % this.itemsPerPage) ? 1 : 0);
    this.pageActual = 1;
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
    this.store.dispatch(
      setPage({ 
        catalog: { 
          page: this.itemsActual,
          full: [],
        }
      }));
  }

  private get initialPageItem(): number {
    return this.itemsPerPage*(this.pageActual-1);
  }

  private updateItemsFiltered(name): void {
    this.itemsFiltered = name ? this.itemsFull.filter(pokemon => pokemon.name.includes(name)) : this.itemsFull;
  }

  private updateItemsActual(): void {
    this.itemsActual = this.itemsFiltered.slice(this.initialPageItem, this.initialPageItem + this.itemsPerPage);
  }

  public isDisabledBack(): boolean {
    return this.pageActual <= 1;
  }

  public isDisabledNext(): boolean {
    return this.pageActual >= this.pageTotal;
  }

}
