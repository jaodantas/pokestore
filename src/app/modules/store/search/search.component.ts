import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { send } from '../shared/actions/search.actions';
import { SearchModel } from '../shared/interfaces/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  public keyupHandler: Subject<string> = new Subject<string>();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{search: SearchModel}>
    ) { }
    
  public searchForm: FormGroup;

  public ngOnInit(): void {
    this.initForm();
    this.onSubmitKeyup();
  }

  public initForm(): void {
    this.searchForm = this.formBuilder.group({
      name: ''
    })
  }

  public onSubmit(): void {
    this.store.dispatch(send({search: this.searchForm.value}));
  }

  public keyupSearch(event): void {
    debugger;
    this.keyupHandler.next(this.searchForm.controls.name.value);
  }

  public onSubmitKeyup(): void {
    this.keyupHandler.pipe(
      debounceTime(500)
    ).subscribe(
      (name) => {
        debugger;
        this.store.dispatch(send({search: { name }}))
      }
    );
  }

}
