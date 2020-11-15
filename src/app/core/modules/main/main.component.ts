import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonTypes } from 'src/app/modules/store/shared/enums/types.enum';
import { TypeModel } from 'src/app/modules/store/shared/interfaces/type.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public pokemonType$: Observable<TypeModel>;
  public type: TypeModel;
  public pokemonTypesConst = PokemonTypes; 
  
  constructor(private store: Store<{pokemonType: TypeModel}>) { 
    this.pokemonType$ = this.store.pipe(select('pokemonType'));
  }

  public ngOnInit(): void {
    this.pokemonType$.pipe(
      map(type => {
        this.type = type;

      })
    ).subscribe();
  }

  public getTheme(): string {
    const type = (Object.entries(this.pokemonTypesConst)
      .filter(res => res[1].id == this.type.id)[0][0]);
    
    return 'theme-' + type;
  }

}
