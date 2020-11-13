import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() show: boolean;
  @Input() title: string;
  @Input() message: string;
  @Output() onClose = new EventEmitter<boolean>();
  
  constructor() { }

  public ngOnInit(): void {
  }

  public closeModal(): void {
    this.onClose.emit(true);
  }

}
