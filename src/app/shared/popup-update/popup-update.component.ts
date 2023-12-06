import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-update',
  templateUrl: './popup-update.component.html',
  styleUrls: ['./popup-update.component.css']
})
export class PopupUpdateComponent {
  @Output() closePopupUpdate = new EventEmitter<void>();

  close(){
    this.closePopupUpdate.emit();
  }

}
