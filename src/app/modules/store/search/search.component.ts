import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { send } from '../shared/actions/search.actions';
import { SearchModel } from '../shared/interfaces/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{search: SearchModel}>
    ) { }
    
  public searchForm: FormGroup;

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.searchForm = this.formBuilder.group({
      name: ''
    })
  }

  public onSubmit(): void {
    this.store.dispatch(send({search: this.searchForm.value}));
  }

}
